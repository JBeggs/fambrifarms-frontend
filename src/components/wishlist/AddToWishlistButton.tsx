'use client';

import React, { useState } from 'react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { Product } from '@/types';

interface AddToWishlistButtonProps {
  product: Product;
  className?: string;
}

export default function AddToWishlistButton({ product, className = '' }: AddToWishlistButtonProps) {
  const { isAuthenticated } = useAuth();
  const { addToWishlist } = useWishlist();
  const [isAdding, setIsAdding] = useState(false);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuickAdd = async () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    try {
      setIsAdding(true);
      await addToWishlist(product.id, 1);
      
      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to add to wishlist:', error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleCustomAdd = async () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }

    try {
      setIsAdding(true);
      await addToWishlist(product.id, quantity, notes);
      
      // Reset and show success
      setQuantity(1);
      setNotes('');
      setShowQuantitySelector(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to add to wishlist:', error);
    } finally {
      setIsAdding(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <a
        href="/login"
        className={`inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors ${className}`}
      >
        ❤️ Login to Add
      </a>
    );
  }

  if (showSuccess) {
    return (
      <div className={`inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-lg animate-pulse ${className}`}>
        ✅ Added to Wishlist!
      </div>
    );
  }

  if (showQuantitySelector) {
    return (
      <div className={`bg-white border border-gray-200 rounded-lg p-4 shadow-lg ${className}`}>
        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-900">
            Add {product.name} to Wishlist
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600 whitespace-nowrap">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
            />
            <span className="text-sm text-gray-500">{product.unit}</span>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Notes (optional):</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requirements..."
              rows={2}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setShowQuantitySelector(false)}
              className="flex-1 px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleCustomAdd}
              disabled={isAdding}
              className="flex-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium disabled:opacity-50"
            >
              {isAdding ? 'Adding...' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* Quick Add Button */}
      <button
        onClick={handleQuickAdd}
        disabled={isAdding}
        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 font-medium"
        title={`Quick add 1 ${product.unit} to wishlist`}
      >
        {isAdding ? (
          <span className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Adding...
          </span>
        ) : (
          <span className="flex items-center">
            ❤️ Add to Wishlist
          </span>
        )}
      </button>
      
      {/* Custom Add Button */}
      <button
        onClick={() => setShowQuantitySelector(true)}
        className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors border border-green-300"
        title="Add with custom quantity and notes"
      >
        ⚙️
      </button>
    </div>
  );
} 