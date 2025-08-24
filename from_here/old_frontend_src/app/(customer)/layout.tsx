'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import WishlistCounter from '@/components/wishlist/WishlistCounter';

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-xl font-bold text-green-800">
                  🚜 Fambri Farms
                </Link>
                <div className="ml-10 flex space-x-8">
                  <Link href="/dashboard" className="text-gray-900 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link href="/quick-order" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    ⚡ Quick Order
                  </Link>
                  <Link href="/products" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    Products
                  </Link>
                  <Link href="/wishlist" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    ❤️ Wishlist
                    <WishlistCounter />
                  </Link>
                  <Link href="/delivery-info" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    🚚 Delivery
                  </Link>
                  <Link href="/orders" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    Orders
                  </Link>
                  <Link href="/profile" className="text-gray-500 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  {user.first_name} {user.last_name}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
  );
} 