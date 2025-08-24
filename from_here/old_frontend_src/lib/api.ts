import { 
  User, Product, Department, Wishlist, Order, AuthTokens, LoginRequest, RegisterRequest,
  CompanyInfo, PageContent, BusinessHours, TeamMember, FAQ, Testimonial,
  Supplier, SupplierProduct, UnitOfMeasure, FinishedInventory, StockMovement, StockAlert
} from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://famdridevops.pythonanywhere.com/api';

interface ApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

class ApiClient {
  private baseURL: string;
  private accessToken: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;
    if (typeof window !== 'undefined') {
      this.accessToken = localStorage.getItem('accessToken');
    }
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.accessToken && { Authorization: `Bearer ${this.accessToken}` }),
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        if (response.status === 401) {
          // Check if we have a refresh token before attempting refresh
          const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
          
          if (!refreshToken) {
            // No refresh token available, clear storage and redirect if not already on login
            this.handleAuthenticationFailure();
            throw new Error('No refresh token available');
          }

          // Token expired or invalid, try to refresh
          try {
            await this.refreshToken();
            // Retry the request with new token
            config.headers = {
              ...config.headers,
              Authorization: `Bearer ${this.accessToken}`,
            };
            const retryResponse = await fetch(url, config);
            if (!retryResponse.ok) {
              throw new Error(`HTTP error! status: ${retryResponse.status}`);
            }
            return await this.parseJsonResponse(retryResponse);
          } catch (refreshError) {
            // Refresh failed, handle authentication failure
            this.handleAuthenticationFailure();
            throw refreshError;
          }
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await this.parseJsonResponse(response);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  private async parseJsonResponse(response: Response) {
    const contentType = response.headers.get('content-type');
    
    // Check if response is actually JSON
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.warn('Expected JSON but got:', contentType, 'Content:', text.substring(0, 200));
      throw new Error('Server returned non-JSON response');
    }

    // Get the response text first
    const text = await response.text();
    
    // Check if response is empty
    if (!text || text.trim() === '') {
      console.warn('Empty response from server');
      return null;
    }

    // Try to parse JSON
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Failed to parse JSON:', text.substring(0, 200));
      throw new Error('Invalid JSON response from server');
    }
  }

  private handleAuthenticationFailure(): void {
    if (typeof window !== 'undefined') {
      // Clear all auth data
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      this.accessToken = null;
      
      // Only redirect if not already on auth pages
      const currentPath = window.location.pathname;
      const isOnAuthPage = currentPath.includes('/login') || currentPath.includes('/register');
      
      if (!isOnAuthPage) {
        window.location.href = '/login';
      }
    }
  }

  private async refreshToken(): Promise<void> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch(`${this.baseURL}/auth/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await this.parseJsonResponse(response);
    this.accessToken = data.access;
    localStorage.setItem('accessToken', data.access);
  }

  async login(credentials: LoginRequest): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await this.request<{ user: User; tokens: AuthTokens }>('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    this.accessToken = response.tokens.access;
    localStorage.setItem('accessToken', response.tokens.access);
    localStorage.setItem('refreshToken', response.tokens.refresh);
    localStorage.setItem('user', JSON.stringify(response.user));

    return response;
  }

  async register(data: RegisterRequest): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await this.request<{ user: User; tokens: AuthTokens }>('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    this.accessToken = response.tokens.access;
    localStorage.setItem('accessToken', response.tokens.access);
    localStorage.setItem('refreshToken', response.tokens.refresh);
    localStorage.setItem('user', JSON.stringify(response.user));

    return response;
  }

  async logout(): Promise<void> {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.accessToken = null;
  }

  async getDepartments(): Promise<ApiResponse<Department>> {
    return this.request<ApiResponse<Department>>('/products/departments/');
  }

  async getDepartment(id: number): Promise<Department> {
    return this.request<Department>(`/products/departments/${id}/`);
  }

  async getProducts(): Promise<ApiResponse<Product>> {
    return this.request<ApiResponse<Product>>('/products/');
  }

  async getProduct(id: number): Promise<Product> {
    return this.request<Product>(`/products/${id}/`);
  }

  async getWishlist(): Promise<Wishlist> {
    return this.request<Wishlist>('/wishlist/');
  }

  async getAllWishlists(): Promise<ApiResponse<Wishlist>> {
    return this.request<ApiResponse<Wishlist>>('/wishlist/admin/all/');
  }

  async addToWishlist(productId: number, quantity: number, notes?: string): Promise<any> {
    return this.request('/wishlist/add/', {
      method: 'POST',
      body: JSON.stringify({
        product_id: productId,
        quantity,
        notes: notes || ''
      }),
    });
  }

  async removeFromWishlist(itemId: number): Promise<void> {
    return this.request(`/wishlist/remove/${itemId}/`, {
      method: 'DELETE',
    });
  }

  async convertToOrder(): Promise<{ order_number: string }> {
    return this.request<{ order_number: string }>('/wishlist/convert-to-order/', {
      method: 'POST',
    });
  }

  async getOrders(): Promise<ApiResponse<Order>> {
    return this.request<ApiResponse<Order>>('/orders/');
  }

  async getOrder(id: number): Promise<Order> {
    return this.request<Order>(`/orders/${id}/`);
  }

  async updateOrderStatus(orderId: number, status: string): Promise<Order> {
    return this.request<Order>(`/orders/${orderId}/status/`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  // CMS Methods
  async getCompanyInfo(): Promise<any> {
    return this.request('/products/company-info/');
  }

  async getPageContent(page: string): Promise<any> {
    return this.request(`/products/page-content/${page}/`);
  }

  async getBusinessHours(): Promise<any> {
    return this.request('/products/business-hours/');
  }

  async getTeamMembers(): Promise<any> {
    return this.request('/products/team-members/');
  }

  async getFAQs(): Promise<any> {
    return this.request('/products/faqs/');
  }

  async getTestimonials(): Promise<any> {
    return this.request('/products/testimonials/');
  }

  async getFeaturedTestimonials(): Promise<any> {
    return this.request('/products/testimonials/?is_featured=true');
  }

  // Supplier Management Methods
  async getSuppliers(): Promise<ApiResponse<Supplier>> {
    return this.request<ApiResponse<Supplier>>('/suppliers/suppliers/');
  }

  async getSupplier(id: number): Promise<Supplier> {
    return this.request<Supplier>(`/suppliers/suppliers/${id}/`);
  }

  async getSupplierProducts(): Promise<ApiResponse<SupplierProduct>> {
    return this.request<ApiResponse<SupplierProduct>>('/suppliers/supplier-products/');
  }

  async getSupplierSummary(): Promise<any> {
    return this.request('/suppliers/summary/');
  }

  async getBestPrices(): Promise<any> {
    return this.request('/suppliers/best-prices/');
  }

  // Inventory Management Methods
  async getUnitsOfMeasure(): Promise<ApiResponse<UnitOfMeasure>> {
    return this.request<ApiResponse<UnitOfMeasure>>('/inventory/units/');
  }

  async getFinishedInventory(): Promise<ApiResponse<FinishedInventory>> {
    return this.request<ApiResponse<FinishedInventory>>('/inventory/finished-inventory/');
  }

  async getInventoryItem(productId: number): Promise<FinishedInventory> {
    return this.request<FinishedInventory>(`/inventory/finished-inventory/${productId}/`);
  }

  async getStockMovements(): Promise<ApiResponse<StockMovement>> {
    return this.request<ApiResponse<StockMovement>>('/inventory/stock-movements/');
  }

  async getProductStockMovements(productId: number): Promise<ApiResponse<StockMovement>> {
    return this.request<ApiResponse<StockMovement>>(`/inventory/stock-movements/?product=${productId}`);
  }

  async getStockAlerts(): Promise<ApiResponse<StockAlert>> {
    return this.request<ApiResponse<StockAlert>>('/inventory/alerts/');
  }

  async resolveStockAlert(alertId: number): Promise<StockAlert> {
    return this.request<StockAlert>(`/inventory/alerts/${alertId}/acknowledge/`, {
      method: 'POST',
    });
  }

  async getInventorySummary(): Promise<any> {
    return this.request('/inventory/finished-inventory/summary/');
  }

  async getLowStockProducts(): Promise<any> {
    return this.request('/inventory/finished-inventory/low_stock/');
  }

  async getStockLevels(): Promise<any> {
    return this.request('/inventory/stock-levels/');
  }
}

export const apiClient = new ApiClient(); 