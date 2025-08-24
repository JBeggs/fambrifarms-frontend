'use client';

import React, { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { Wishlist, WishlistItem } from '@/types';

export default function AdminWishlistsPage() {
  const [wishlists, setWishlists] = useState<Wishlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedWishlist, setSelectedWishlist] = useState<Wishlist | null>(null);

  useEffect(() => {
    const fetchWishlists = async () => {
      try {
        // Note: This endpoint might need to be created in the backend
        const response = await apiClient.getAllWishlists();
        setWishlists(response.results || []);
      } catch (err: any) {
        setError('Failed to load wishlists');
        console.error('Error fetching wishlists:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlists();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getTotalValue = (items: WishlistItem[]) => {
    return items.reduce((total, item) => total + (item.product_price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Wishlist Management</h1>
        <div className="text-sm text-gray-400">
          Total wishlists: {wishlists.length}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Restaurant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Total Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {wishlists.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                    No wishlists found
                  </td>
                </tr>
              ) : (
                wishlists.map((wishlist) => (
                  <tr key={wishlist.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        {wishlist.restaurant_business_name || wishlist.restaurant_name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {wishlist.restaurant_address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">
                        {wishlist.restaurant_email}
                      </div>
                      <div className="text-xs text-gray-400">
                        {wishlist.restaurant_phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">
                        {wishlist.total_items} items
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">
                        R{getTotalValue(wishlist.items).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-300">
                        {formatDate(wishlist.updated_at)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedWishlist(wishlist)}
                        className="text-blue-400 hover:text-blue-300 mr-4"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Wishlist Details Modal */}
      {selectedWishlist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                Wishlist Details - {selectedWishlist.restaurant_business_name || selectedWishlist.restaurant_name}
              </h2>
              <button
                onClick={() => setSelectedWishlist(null)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-gray-700 rounded-lg mb-6 p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-300">Restaurant</label>
                  <p className="text-white">{selectedWishlist.restaurant_business_name || selectedWishlist.restaurant_name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Contact</label>
                  <p className="text-white">{selectedWishlist.restaurant_email}</p>
                  <p className="text-sm text-gray-400">{selectedWishlist.restaurant_phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Address</label>
                  <p className="text-white">{selectedWishlist.restaurant_address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Created</label>
                  <p className="text-white">{formatDate(selectedWishlist.created_at)}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {selectedWishlist.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">
                          {item.product_name}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-300">
                          {item.quantity} {item.product_unit}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm text-gray-300">
                          R{item.product_price}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">
                          R{(item.product_price * item.quantity).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-300">
                          {item.notes || '-'}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-400">
                Last updated: {formatDate(selectedWishlist.updated_at)}
              </div>
              <div className="text-lg font-bold text-white">
                Total: R{getTotalValue(selectedWishlist.items).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 