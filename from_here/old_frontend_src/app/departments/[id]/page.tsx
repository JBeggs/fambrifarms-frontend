'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Navigation } from '@/components/template/Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { apiClient } from '@/lib/api';
import { Department, Product } from '@/types';
import AddToWishlistButton from '@/components/wishlist/AddToWishlistButton';

export default function DepartmentPage() {
  const params = useParams();
  const departmentId = params.id as string;
  const { isAuthenticated, user } = useAuth();
  
  const [department, setDepartment] = useState<Department | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch department details and products
        const [departmentResponse, productsResponse] = await Promise.all([
          apiClient.getDepartment(parseInt(departmentId)),
          apiClient.getProducts()
        ]);
        
        setDepartment(departmentResponse);
        
        // Filter products for this department
        const departmentProducts = productsResponse.results.filter(
          product => product.department === parseInt(departmentId) && product.is_active
        );
        setProducts(departmentProducts);
        
      } catch (error) {
        console.error('Failed to fetch department data:', error);
        setError('Failed to load department information. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (departmentId) {
      fetchDepartmentData();
    }
  }, [departmentId]);

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

  if (error || !department) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {error || 'Department not found'}
            </h1>
            <a
              href="/departments"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Departments
            </a>
          </div>
        </div>
      </div>
    );
  }

  const departmentColor = department.color || '#16a34a';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center py-12 mb-8">
              <h1 
                className="text-4xl font-bold mb-4"
                style={{ color: departmentColor }}
              >
                {department.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {department.description}
              </p>
            </div>
            
            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
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
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {product.name}
                      </h3>
                      
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
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  No products available in this department at the moment.
                </div>
                <a
                  href="/departments"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Browse Other Departments
                </a>
              </div>
            )}
            
            {/* Call to Action - Conditional based on authentication */}
            {!isAuthenticated && (
              <div className="text-center mt-16">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Interested in These Products?
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
                    Welcome back, {user?.first_name}! 👋
                  </h3>
                  <p className="text-green-700 mb-6">
                    You can add these products to your wishlist and place orders on Mondays and Thursdays
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/dashboard"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Go to Dashboard
                    </a>
                    <a
                      href="/products"
                      className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      Browse All Products
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