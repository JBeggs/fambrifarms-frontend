'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface OrderItem {
  id: number;
  product_name: string;
  quantity: number;
  price: string;
  notes?: string;
}

interface Order {
  id: number;
  order_number: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'in_transit' | 'delivered' | 'cancelled';
  total_amount: string;
  order_date: string;
  estimated_delivery?: string;
  items: OrderItem[];
  delivery_address: string;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-orange-100 text-orange-800',
  in_transit: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusLabels = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  preparing: 'Preparing',
  in_transit: 'In Transit',
  delivered: 'Delivered',
  cancelled: 'Cancelled'
};

export default function OrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('/api/orders/', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        // Mock data for development
        setOrders([
          {
            id: 1,
            order_number: 'ORD-2025-001',
            status: 'confirmed',
            total_amount: '245.50',
            order_date: '2025-01-18T10:30:00Z',
            estimated_delivery: '2025-01-19T14:00:00Z',
            delivery_address: 'Sun City Resort, Restaurant Kitchen',
            items: [
              { id: 1, product_name: 'Organic Carrots', quantity: 5, price: '25.50', notes: 'Extra fresh please' },
              { id: 2, product_name: 'Baby Spinach', quantity: 10, price: '45.00' },
              { id: 3, product_name: 'Roma Tomatoes', quantity: 8, price: '32.75' }
            ]
          },
          {
            id: 2,
            order_number: 'ORD-2025-002',
            status: 'delivered',
            total_amount: '180.25',
            order_date: '2025-01-15T09:15:00Z',
            delivery_address: 'Sun City Country Club Kitchen',
            items: [
              { id: 4, product_name: 'Fresh Herbs Mix', quantity: 3, price: '45.75' },
              { id: 5, product_name: 'Bell Peppers', quantity: 12, price: '60.00' },
              { id: 6, product_name: 'Cucumber', quantity: 6, price: '24.50' }
            ]
          },
          {
            id: 3,
            order_number: 'ORD-2025-003', 
            status: 'preparing',
            total_amount: '320.80',
            order_date: '2025-01-19T08:45:00Z',
            estimated_delivery: '2025-01-20T12:00:00Z',
            delivery_address: 'Legends Golf Club Restaurant',
            items: [
              { id: 7, product_name: 'Premium Beef', quantity: 5, price: '125.00' },
              { id: 8, product_name: 'Fresh Salmon', quantity: 3, price: '95.80' },
              { id: 9, product_name: 'Seasonal Vegetables', quantity: 8, price: '40.00' }
            ]
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      // Set mock data on error as fallback
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const activeOrders = orders.filter(order => 
    ['pending', 'confirmed', 'preparing', 'in_transit'].includes(order.status)
  );
  
  const orderHistory = orders.filter(order => 
    ['delivered', 'cancelled'].includes(order.status)
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: string) => {
    return `R${parseFloat(amount).toFixed(2)}`;
  };

  const OrderCard = ({ order }: { order: Order }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {order.order_number}
          </h3>
          <p className="text-sm text-gray-500">
            Ordered: {formatDate(order.order_date)}
          </p>
          {order.estimated_delivery && (
            <p className="text-sm text-green-600 mt-1">
              📅 Expected: {formatDate(order.estimated_delivery)}
            </p>
          )}
        </div>
        <div className="text-right">
          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
            {statusLabels[order.status]}
          </span>
          <p className="text-lg font-bold text-gray-900 mt-2">
            {formatCurrency(order.total_amount)}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">
          📍 <strong>Delivery to:</strong> {order.delivery_address}
        </p>
      </div>

      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Order Items:</h4>
        <div className="space-y-2">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex-1">
                <span className="text-sm text-gray-900">{item.product_name}</span>
                <span className="text-sm text-gray-500 ml-2">×{item.quantity}</span>
                {item.notes && (
                  <p className="text-xs text-blue-600 italic">{item.notes}</p>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900">
                {formatCurrency(item.price)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm">
          📋 View Details
        </button>
        {order.status === 'delivered' && (
          <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors text-sm">
            🔄 Reorder
          </button>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📦 My Orders
          </h1>
          <p className="text-gray-600">
            Track your current orders and view your order history
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 px-6 py-4 text-sm font-medium rounded-l-lg transition-colors ${
                activeTab === 'active'
                  ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🚚 Active Orders ({activeOrders.length})
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 px-6 py-4 text-sm font-medium rounded-r-lg transition-colors ${
                activeTab === 'history'
                  ? 'bg-green-50 text-green-700 border-b-2 border-green-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              📋 Order History ({orderHistory.length})
            </button>
          </div>
        </div>

        {/* Orders Content */}
        {activeTab === 'active' ? (
          <div>
            {activeOrders.length > 0 ? (
              <div className="space-y-6">
                {activeOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Active Orders
                </h3>
                <p className="text-gray-600 mb-6">
                  You don't have any orders in progress right now.
                </p>
                <a
                  href="/products"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Browse Products
                </a>
              </div>
            )}
          </div>
        ) : (
          <div>
            {orderHistory.length > 0 ? (
              <div className="space-y-6">
                {orderHistory.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Order History
                </h3>
                <p className="text-gray-600">
                  Your completed and cancelled orders will appear here.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/quick-order"
              className="flex-1 bg-white text-center py-4 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-medium text-gray-900">Quick Order</h4>
              <p className="text-sm text-gray-600">Fast bulk ordering for restaurants</p>
            </a>
            <a
              href="/products"
              className="flex-1 bg-white text-center py-4 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">🛒</div>
              <h4 className="font-medium text-gray-900">Browse Products</h4>
              <p className="text-sm text-gray-600">Find new products to order</p>
            </a>
            <a
              href="/delivery-info"
              className="flex-1 bg-white text-center py-4 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">🚚</div>
              <h4 className="font-medium text-gray-900">Delivery Info</h4>
              <p className="text-sm text-gray-600">Check delivery schedule & areas</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 