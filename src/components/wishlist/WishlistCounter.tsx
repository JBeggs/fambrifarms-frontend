'use client';

import React from 'react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';

export default function WishlistCounter() {
  const { isAuthenticated } = useAuth();
  const { wishlist, loading } = useWishlist();

  if (!isAuthenticated || loading) {
    return null;
  }

  const itemCount = wishlist?.items?.length || 0;

  if (itemCount === 0) {
    return null;
  }

  return (
    <span className="ml-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full min-w-[1.25rem] h-5 flex items-center justify-center animate-pulse">
      {itemCount}
    </span>
  );
} 