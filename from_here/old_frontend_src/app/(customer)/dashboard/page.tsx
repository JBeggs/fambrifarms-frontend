'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import Link from 'next/link';
import { apiClient } from '@/lib/api';
import { Order } from '@/types';

export default function DashboardPage() {
  const { user } = useAuth();
  const { wishlist, loading: wishlistLoading } = useWishlist();
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentOrders = async () => {
      try {
        const orders = await apiClient.getOrders();
        setRecentOrders(orders.results?.slice(0, 5) || []); // Show last 5 orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentOrders();
  }, []);

  const today = new Date();
  const dayOfWeek = today.getDay();
  const isMonday = dayOfWeek === 1;
  const isThursday = dayOfWeek === 4;
  const isOrderDay = isMonday || isThursday;

  const getNextOrderDay = () => {
    const today = new Date();
    const currentDay = today.getDay();
    
    if (currentDay === 1) return 'Today (Monday)';
    if (currentDay === 4) return 'Today (Thursday)';
    
    // Calculate next Monday or Thursday
    let daysUntilNext = 0;
    if (currentDay < 1) daysUntilNext = 1 - currentDay;
    else if (currentDay < 4) daysUntilNext = 4 - currentDay;
    else daysUntilNext = 7 - currentDay + 1; // Next Monday
    
    const nextOrderDate = new Date(today);
    nextOrderDate.setDate(today.getDate() + daysUntilNext);
    
    return nextOrderDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const wishlistItemCount = wishlist?.items?.length || 0;

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.first_name}!
        </h1>
        <p className="text-gray-600">
          Manage your restaurant orders and wishlist
        </p>
      </div>

      {/* Order Status Banner */}
      <div className={`mb-6 p-4 rounded-lg ${
        isOrderDay 
          ? 'bg-green-50 border border-green-200' 
          : 'bg-yellow-50 border border-yellow-200'
      }`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {isOrderDay ? (
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-2">🎯</span>
                <span className="text-green-800 font-medium">Orders Open Today!</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-yellow-600 text-xl mr-2">📅</span>
                <span className="text-yellow-800 font-medium">
                  Next Order Day: {getNextOrderDay()}
                </span>
              </div>
            )}
          </div>
          <div className="ml-auto">
            {isOrderDay && (
              <Link
                href="/orders/create"
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
              >
                Place Order Now
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wishlist Summary */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">❤️</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Wishlist Items
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {wishlistLoading ? '...' : wishlistItemCount}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/wishlist" className="font-medium text-green-600 hover:text-green-500">
                View wishlist
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">📋</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Recent Orders
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {loading ? '...' : recentOrders.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link href="/orders" className="font-medium text-green-600 hover:text-green-500">
                View all orders
              </Link>
            </div>
          </div>
        </div>

        {/* Order Schedule */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl">📅</span>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Order Schedule
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    Mondays & Thursdays
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <span className="font-medium text-gray-900">
                Next: {getNextOrderDay()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>
            
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              </div>
            ) : recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Order #{order.order_number}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'delivered' 
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                      <Link
                        href={`/orders/${order.id}`}
                        className="text-green-600 hover:text-green-500 text-sm font-medium"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl mb-4 block">🛒</span>
                <p className="text-gray-500 mb-4">No orders yet</p>
                <Link
                  href="/products"
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                >
                  Browse Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 