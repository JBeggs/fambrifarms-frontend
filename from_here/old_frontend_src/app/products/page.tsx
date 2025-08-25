'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/template/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/lib/api';
import { Department, Product } from '@/types';
import AddToWishlistButton from '@/components/wishlist/AddToWishlistButton';

export default function ProductsPage() {
  const { isAuthenticated, user } = useAuth();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [departmentsResponse, productsResponse] = await Promise.all([
          apiClient.getDepartments(),
          apiClient.getProducts()
        ]);
        
        setDepartments(departmentsResponse.results.filter(dept => dept.is_active));
        setProducts(productsResponse.results.filter(product => product.is_active));
        setFilteredProducts(productsResponse.results.filter(product => product.is_active));
        
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by department
    if (selectedDepartment) {
      filtered = filtered.filter(product => product.department.toString() === selectedDepartment);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedDepartment, searchTerm]);

  const getDepartmentName = (departmentId: number) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.name : 'Unknown';
  };

  const getDepartmentColor = (departmentId: number) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept ? dept.color : '#16a34a';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{error}</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center py-12 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Our Products
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our comprehensive catalog of fresh, quality products sourced from local farms and trusted suppliers.
              </p>
            </div>
            
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Products
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or description..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                {(selectedDepartment || searchTerm) && (
                  <button
                    onClick={() => {
                      setSelectedDepartment('');
                      setSearchTerm('');
                    }}
                    className="text-sm text-green-600 hover:text-green-700 font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
            
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const departmentColor = product.department_color || getDepartmentColor(product.department);
                  
                  return (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 overflow-hidden"
                    >
                      <div 
                        className="h-48 flex items-center justify-center text-6xl"
                        style={{ backgroundColor: departmentColor + '20' }}
                      >
                        📦
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-800">
                            {product.name}
                          </h3>
                          <span 
                            className="text-xs text-white px-2 py-1 rounded-full font-medium"
                            style={{ backgroundColor: departmentColor }}
                          >
                            {product.department_name || getDepartmentName(product.department)}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span 
                              className="text-2xl font-bold"
                              style={{ color: departmentColor }}
                            >
                              R{product.price}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              {product.unit}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              product.is_active 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {product.is_active ? 'Available' : 'Unavailable'}
                            </span>
                          </div>
                        </div>

                        {/* Add to Wishlist Button */}
                        {product.is_active && (
                          <AddToWishlistButton product={product} className="w-full" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  {searchTerm || selectedDepartment 
                    ? 'No products found matching your filters.' 
                    : 'No products available at the moment.'}
                </div>
                {(searchTerm || selectedDepartment) && (
                  <button
                    onClick={() => {
                      setSelectedDepartment('');
                      setSearchTerm('');
                    }}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
            
            {/* Call to Action - Conditional based on authentication */}
            {!isAuthenticated && (
              <div className="text-center mt-16">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to Start Ordering?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create an account to add products to your wishlist and place orders on Mondays and Thursdays
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/register"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Create Account
                    </a>
                    <a
                      href="/login"
                      className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Authenticated user message */}
            {isAuthenticated && (
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm p-8 border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Great selection, {user?.first_name}! 🛒
                  </h3>
                  <p className="text-green-700 mb-6">
                    Add products to your wishlist and place orders on Mondays and Thursdays
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/dashboard"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      View My Dashboard
                    </a>
                    <a
                      href="/departments"
                      className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      Browse by Department
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 