'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { apiClient } from '@/lib/api';
import { Product } from '@/types';

interface DepartmentSummary {
  id: number;
  name: string;
  product_count: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
  notes?: string;
}



export default function QuickOrderPage() {
  const { user } = useAuth();
  const { addToWishlist } = useWishlist();

  const [products, setProducts] = useState<Product[]>([]);
  const [departments, setDepartments] = useState<DepartmentSummary[]>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'search' | 'category'>('search');

  // Quick quantity input refs
  const quantityRefs = React.useRef<{ [key: number]: HTMLInputElement | null }>({});

  useEffect(() => {
    fetchProducts();
    fetchDepartments();
  }, []);

  // Calculate product counts for departments when products are loaded
  useEffect(() => {
    if (products.length > 0 && departments.length > 0) {
      const updatedDepartments = departments.map(dept => ({
        ...dept,
        product_count: products.filter(product => product.department_name === dept.name).length
      }));
      setDepartments(updatedDepartments);
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      const data = await apiClient.getProducts();
      const products = data.results || [];
      setProducts(products);
      console.info('Loaded', products.length, 'products from database');
    } catch (error) {
      console.error('Error connecting to API:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const data = await apiClient.getDepartments();
      const departments = (data.results || []).map((dept: any) => ({
        id: dept.id,
        name: dept.name,
        product_count: 0 // Will be calculated from products once they're loaded
      }));
      setDepartments(departments);
      console.info('Loaded', departments.length, 'departments from database');
    } catch (error) {
      console.error('Error connecting to departments API:', error);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || 
                            product.department_name.toLowerCase() === selectedDepartment.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  const addToOrder = (product: Product, quantity: number, notes?: string) => {
    if (quantity <= 0) return;

    const existingIndex = orderItems.findIndex(item => item.product.id === product.id);
    
    if (existingIndex >= 0) {
      const newItems = [...orderItems];
      newItems[existingIndex] = {
        ...newItems[existingIndex],
        quantity: newItems[existingIndex].quantity + quantity,
        notes: notes || newItems[existingIndex].notes
      };
      setOrderItems(newItems);
    } else {
      setOrderItems([...orderItems, { product, quantity, notes }]);
    }

    // Clear the quantity input
    if (quantityRefs.current[product.id]) {
      quantityRefs.current[product.id]!.value = '';
    }
  };

  const removeFromOrder = (productId: number) => {
    setOrderItems(orderItems.filter(item => item.product.id !== productId));
  };

  const updateOrderQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(productId);
      return;
    }

    setOrderItems(orderItems.map(item => 
      item.product.id === productId 
        ? { ...item, quantity }
        : item
    ));
  };

  const handleQuickAdd = (product: Product) => {
    const quantityInput = quantityRefs.current[product.id];
    const quantity = quantityInput ? parseFloat(quantityInput.value) : 0;
    
    if (quantity > 0) {
      addToOrder(product, quantity);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, product: Product) => {
    if (e.key === 'Enter') {
      handleQuickAdd(product);
    }
  };

  const getOrderTotal = () => {
    return orderItems.reduce((total, item) => 
      total + (parseFloat(item.product.price) * item.quantity), 0
    );
  };

  const addAllToWishlist = async () => {
    try {
      for (const item of orderItems) {
        await addToWishlist(item.product.id, item.quantity, item.notes);
      }
      setOrderItems([]); // Clear order after adding to wishlist
      alert('All items added to wishlist!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      alert('Error adding items to wishlist');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ⚡ Quick Order Builder
          </h1>
          <p className="text-gray-600">
            Fast, efficient ordering for restaurants - search, select quantities, and build your order
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Product Search & Selection */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products by name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="all">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.name}>
                      {dept.name} ({dept.product_count})
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('search')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'search' 
                      ? 'bg-green-100 text-green-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  🔍 Search Mode
                </button>
                <button
                  onClick={() => setViewMode('category')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'category' 
                      ? 'bg-green-100 text-green-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  📂 Category Browse
                </button>
              </div>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Products ({filteredProducts.length})
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredProducts.map(product => (
                  <div key={product.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${product.is_active ? 'bg-green-500' : 'bg-red-500'}`} />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm font-medium text-green-600">
                                R{parseFloat(product.price).toFixed(2)} per {product.unit}
                              </span>
                              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                {product.department_name}
                              </span>
                                                             {!product.is_active && (
                                 <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded">
                                   Out of Stock
                                 </span>
                               )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                                             {/* Quick Add Section */}
                       {product.is_active && (
                        <div className="flex items-center gap-2 ml-4">
                                                     <input
                             ref={(el) => { quantityRefs.current[product.id] = el; }}
                             type="number"
                             placeholder="Qty"
                             min="0"
                             step="0.1"
                             className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500"
                             onKeyPress={(e) => handleKeyPress(e, product)}
                           />
                          <span className="text-xs text-gray-500">{product.unit}</span>
                          <button
                            onClick={() => handleQuickAdd(product)}
                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <div className="text-4xl mb-2">
                    {products.length === 0 ? '📡' : '🔍'}
                  </div>
                  {products.length === 0 ? (
                    <div>
                      <p>No products available.</p>
                      <p className="text-sm mt-1">Please ensure the backend is running and has product data.</p>
                    </div>
                  ) : (
                    <div>
                      <p>No products found matching your search criteria.</p>
                      <p className="text-sm mt-1">Try adjusting your search terms or department filter.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-6">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  🛒 Current Order ({orderItems.length} items)
                </h3>
              </div>
              
              <div className="p-4">
                {orderItems.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <div className="text-3xl mb-2">📋</div>
                    <p className="text-sm">Your order is empty</p>
                    <p className="text-xs mt-1">Add products using the quick add buttons</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                      {orderItems.map(item => (
                        <div key={item.product.id} className="flex items-center justify-between text-sm">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{item.product.name}</p>
                            <p className="text-gray-500">R{parseFloat(item.product.price).toFixed(2)} per {item.product.unit}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-2">
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateOrderQuantity(item.product.id, parseFloat(e.target.value) || 0)}
                              min="0"
                              step="0.1"
                              className="w-16 px-1 py-1 text-xs border border-gray-300 rounded text-center"
                            />
                            <button
                              onClick={() => removeFromOrder(item.product.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-900">Total:</span>
                        <span className="text-lg font-bold text-green-600">
                          R{getOrderTotal().toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={addAllToWishlist}
                          className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                        >
                          💚 Add All to Wishlist
                        </button>
                        <button
                          onClick={() => setOrderItems([])}
                          className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                        >
                          Clear Order
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-medium text-green-800 mb-2">💡 Quick Tips</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Type quantities and press Enter to add</li>
                <li>• Use decimal quantities (e.g., 2.5 kg)</li>
                <li>• Orders convert to invoices on Tue/Fri</li>
                <li>• Items are added to your wishlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 