'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Wishlist, WishlistItem } from '../types';
import { apiClient } from '../lib/api';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  wishlist: Wishlist | null;
  loading: boolean;
  isOrderDay: boolean;
  addToWishlist: (productId: number, quantity: number, notes?: string) => Promise<void>;
  removeFromWishlist: (itemId: number) => Promise<void>;
  convertToOrder: () => Promise<string>;
  checkOrderDay: () => Promise<void>;
  refreshWishlist: () => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Wishlist | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOrderDay, setIsOrderDay] = useState(false);
  const { isAuthenticated, loading: authLoading } = useAuth();

  const refreshWishlist = async () => {
    if (!isAuthenticated) {
      return;
    }
    try {
      const data = await apiClient.getWishlist();
      setWishlist(data);
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
    }
  };

  const checkOrderDay = async () => {
    // Local rule: Orders can be placed on Tuesdays (2) and Fridays (5)
    const today = new Date();
    const dayOfWeek = today.getDay();
    setIsOrderDay(dayOfWeek === 2 || dayOfWeek === 5);
  };

  const addToWishlist = async (productId: number, quantity: number, notes?: string) => {
    if (!isAuthenticated) {
      throw new Error('User must be authenticated to add to wishlist');
    }
    await apiClient.addToWishlist(productId, quantity, notes);
    await refreshWishlist();
  };

  const removeFromWishlist = async (itemId: number) => {
    if (!isAuthenticated) {
      throw new Error('User must be authenticated to remove from wishlist');
    }
    await apiClient.removeFromWishlist(itemId);
    await refreshWishlist();
  };

  const convertToOrder = async (): Promise<string> => {
    if (!isAuthenticated) {
      throw new Error('User must be authenticated to convert to order');
    }
    const result = await apiClient.convertToOrder();
    await refreshWishlist();
    return result.order_number;
  };

  useEffect(() => {
    const initialize = async () => {
      // Don't make API calls if auth is still loading
      if (authLoading) {
        return;
      }

      // Only initialize if user is authenticated
      if (!isAuthenticated) {
        setLoading(false);
        setWishlist(null);
        setIsOrderDay(false);
        return;
      }

      setLoading(true);
      try {
        await Promise.all([refreshWishlist(), checkOrderDay()]);
      } catch (error) {
        console.error('Failed to initialize wishlist:', error);
      } finally {
        setLoading(false);
      }
    };
    
    initialize();
  }, [isAuthenticated, authLoading]);

  return (
    <WishlistContext.Provider value={{
      wishlist,
      loading,
      isOrderDay,
      addToWishlist,
      removeFromWishlist,
      convertToOrder,
      checkOrderDay,
      refreshWishlist,
    }}>
      {children}
    </WishlistContext.Provider>
  );
}; 