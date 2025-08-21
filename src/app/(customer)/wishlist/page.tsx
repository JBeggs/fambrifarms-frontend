'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { WishlistItem } from '@/types';
import Link from 'next/link';

export default function WishlistPage() {
  const { user } = useAuth();
  const { wishlist, loading, isOrderDay, removeFromWishlist, convertToOrder } = useWishlist();
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [editingQuantity, setEditingQuantity] = useState<number>(1);
  const [editingNotes, setEditingNotes] = useState<string>('');
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [converting, setConverting] = useState(false);

  const handleEditStart = (item: WishlistItem) => {
    setEditingItem(item.id);
    setEditingQuantity(item.quantity);
    setEditingNotes(item.notes || '');
  };

  const handleEditSave = async () => {
    // TODO: Implement update wishlist item API call
    setEditingItem(null);
  };

  const handleEditCancel = () => {
    setEditingItem(null);
  };

  const handleRemoveItem = async (itemId: number) => {
    try {
      await removeFromWishlist(itemId);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const handleConvertToOrder = async () => {
    try {
      setConverting(true);
      const orderNumber = await convertToOrder();
      setShowConvertModal(false);
      // Show success message or redirect
      alert(`Order ${orderNumber} created successfully!`);
    } catch (error) {
      console.error('Failed to convert to order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  const calculateTotal = () => {
    return wishlist?.items.reduce((total, item) => 
      total + (Number(item.product_price) * item.quantity), 0) || 0;
  };

  const getOrderDayMessage = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    if (isOrderDay) {
      return {
        message: "🎯 Orders are open today!",
        subMessage: "Perfect timing to place your order",
        className: "bg-green-100 border-green-300 text-green-800"
      };
    }
    
    // Calculate next order day
    let daysUntil = 0;
    if (dayOfWeek < 2) daysUntil = 2 - dayOfWeek; // Next Tuesday
    else if (dayOfWeek < 5) daysUntil = 5 - dayOfWeek; // Next Friday
    else daysUntil = 7 - dayOfWeek + 2; // Next Tuesday
    
    const nextOrderDate = new Date(today);
    nextOrderDate.setDate(today.getDate() + daysUntil);
    const nextDay = nextOrderDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
    
    return {
      message: "📅 Next order day coming up!",
      subMessage: `Orders open on ${nextDay}`,
      className: "bg-blue-100 border-blue-300 text-blue-800"
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mb-8"></div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-gray-300 rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const orderDayInfo = getOrderDayMessage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                ❤️ My Wishlist
                {wishlist?.items && wishlist.items.length > 0 && (
                  <span className="ml-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                    {wishlist.items.length} items
                  </span>
                )}
              </h1>
                             <p className="text-gray-600 mt-1">
                 {wishlist?.restaurant_business_name || `${user?.first_name}'s Restaurant`}
               </p>
            </div>
            
            {wishlist?.items && wishlist.items.length > 0 && (
              <div className="flex gap-3">
                <Link
                  href="/products"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Add More Items
                </Link>
                {isOrderDay && (
                  <button
                    onClick={() => setShowConvertModal(true)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center"
                  >
                    🚀 Place Order Now
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Order Day Status */}
          <div className={`border rounded-lg p-4 ${orderDayInfo.className}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{orderDayInfo.message}</h3>
                <p className="text-sm opacity-90">{orderDayInfo.subMessage}</p>
              </div>
              {isOrderDay && wishlist?.items && wishlist.items.length > 0 && (
                <button
                  onClick={() => setShowConvertModal(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
                >
                  Order Ready!
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Wishlist Content */}
        {!wishlist?.items || wishlist.items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Start building your order by adding products to your wishlist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Browse Products
              </Link>
              <Link
                href="/departments"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                Shop by Department
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Wishlist Items */}
            {wishlist.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Product Image Placeholder */}
                    <div className="h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center text-2xl">
                      🥬
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {item.product_name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        R {Number(item.product_price).toFixed(2)} per {item.product_unit}
                      </p>
                      {item.notes && (
                        <p className="text-sm text-gray-500 mt-1 italic">
                          Note: {item.notes}
                        </p>
                      )}
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center space-x-4">
                      {editingItem === item.id ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            min="1"
                            value={editingQuantity}
                            onChange={(e) => setEditingQuantity(parseInt(e.target.value) || 1)}
                            className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
                          />
                          <div className="flex space-x-1">
                            <button
                              onClick={handleEditSave}
                              className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                            >
                              ✓
                            </button>
                            <button
                              onClick={handleEditCancel}
                              className="bg-gray-400 text-white px-3 py-1 rounded text-sm hover:bg-gray-500 transition-colors"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">
                            {item.quantity}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.product_unit}
                          </div>
                        </div>
                      )}

                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          R {(Number(item.product_price) * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditStart(item)}
                          className="text-gray-400 hover:text-blue-600 transition-colors p-1"
                          title="Edit item"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-green-500">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Order Summary</h3>
                <div className="text-2xl font-bold text-green-600">
                  R {calculateTotal().toFixed(2)}
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Total Items:</span>
                  <span>{wishlist?.items.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R {calculateTotal().toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-gray-900">
                  <span>Order Total:</span>
                  <span>R {calculateTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/products"
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium"
                >
                  Add More Items
                </Link>
                {isOrderDay ? (
                  <button
                    onClick={() => setShowConvertModal(true)}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    🚀 Place Order Now
                  </button>
                ) : (
                  <div className="flex-1 bg-gray-300 text-gray-500 py-3 px-4 rounded-lg text-center font-medium cursor-not-allowed">
                    Order on Tue/Fri Only
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Delivery Information Link */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-sm p-6 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">🚚 Delivery Information</h3>
                <p className="text-gray-600 text-sm">
                  Learn about our Sun City delivery areas, schedules, and coverage zones.
                  {wishlist?.items && wishlist.items.length > 0 && (
                    <span className="font-medium text-green-600"> Your order will be delivered on Tue/Fri!</span>
                  )}
                </p>
              </div>
              <Link
                href="/delivery-info"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center"
              >
                View Delivery Info →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Convert to Order Modal */}
      {showConvertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚀 Place Your Order
            </h3>
            <p className="text-gray-600 mb-6">
              Are you ready to convert your wishlist into an order? This will create an official order with order number for tracking.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Total Items:</span>
                <span>{wishlist?.items.length || 0}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Order Total:</span>
                <span>R {calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConvertModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                disabled={converting}
              >
                Cancel
              </button>
              <button
                onClick={handleConvertToOrder}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold disabled:opacity-50"
                disabled={converting}
              >
                {converting ? 'Creating Order...' : 'Confirm Order'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 