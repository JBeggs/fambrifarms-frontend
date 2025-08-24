export type StaffRole = 'ceo' | 'manager' | 'stocktaker' | 'production_lead' | 'sales' | 'ops';
export type RestaurantRole = 'chef' | 'manager' | 'owner' | 'staff';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  user_type: 'restaurant' | 'admin' | 'staff';
  phone: string;
  is_verified: boolean;
  // Optional role sets for fine-grained permissions without changing user_type semantics
  roles?: StaffRole[]; // for staff users
  restaurant_roles?: RestaurantRole[]; // for restaurant users belonging to a restaurant account
}

export interface Product {
  id: number;
  name: string;
  description: string;
  department: number;
  department_name: string;
  department_color: string;
  price: number;
  unit: string;
  is_active: boolean;
  // Inventory information (added for stock management)
  available_quantity?: number;
  reserved_quantity?: number;
  needs_production?: boolean;
  supplier_count?: number;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  color: string;
  is_active: boolean;
}

export interface WishlistItem {
  id: number;
  product: number;
  product_name: string;
  product_price: number;
  product_unit: string;
  quantity: number;
  notes: string;
  added_at: string;
}

export interface Wishlist {
  id: number;
  user: number;
  restaurant_name: string;
  restaurant_business_name: string;
  restaurant_address: string;
  restaurant_phone: string;
  restaurant_email: string;
  items: WishlistItem[];
  total_items: number;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: number;
  order_number: string;
  restaurant: number;
  restaurant_name: string;
  restaurant_business_name: string;
  restaurant_address: string;
  restaurant_phone: string;
  restaurant_email: string;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  created_at: string;
  updated_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  product: number;
  product_name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
  business_name: string;
  address: string;
  city: string;
  postal_code: string;
}

// CMS Types
export interface CompanyInfo {
  id: number;
  name: string;
  tagline: string;
  description: string;
  phone_primary: string;
  phone_secondary: string;
  email: string;
  address: string;
  whatsapp: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PageContent {
  id: number;
  page: string;
  title: string;
  subtitle: string;
  content: string;
  hero_title: string;
  hero_subtitle: string;
  meta_description: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface BusinessHours {
  id: number;
  day: string;
  day_display: string;
  is_open: boolean;
  open_time: string;
  close_time: string;
  special_note: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
  is_active: boolean;
  order: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  is_active: boolean;
  order: number;
}

export interface Testimonial {
  id: number;
  customer_name: string;
  restaurant_name: string;
  content: string;
  rating: number;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
}

// Supplier and Inventory Types (added for stock management)
export interface Supplier {
  id: number;
  name: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  address: string;
  city: string;
  postal_code: string;
  is_active: boolean;
}

export interface SupplierProduct {
  id: number;
  supplier: number;
  supplier_name: string;
  product: number;
  product_name: string;
  supplier_price: number;
  stock_quantity: number;
  is_available: boolean;
}

export interface UnitOfMeasure {
  id: number;
  name: string;
  abbreviation: string;
  is_weight: boolean;
  base_unit_multiplier: number;
  is_active: boolean;
}

export interface FinishedInventory {
  id: number;
  product: number;
  product_name: string;
  available_quantity: number;
  reserved_quantity: number;
  minimum_level: number;
  reorder_level: number;
  average_cost: number;
  needs_production: boolean;
  last_updated: string;
}

export interface StockMovement {
  id: number;
  product: number;
  product_name: string;
  movement_type: 'in' | 'out' | 'adjustment';
  quantity: number;
  reference_type: string;
  reference_id: string;
  notes: string;
  created_by: number;
  created_at: string;
}

export interface StockAlert {
  id: number;
  alert_type: 'low_stock' | 'out_of_stock' | 'expired' | 'production_needed';
  product?: number;
  product_name?: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  is_resolved: boolean;
  created_at: string;
} 