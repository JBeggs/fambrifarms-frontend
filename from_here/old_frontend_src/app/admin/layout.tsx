'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && (!user || user.user_type !== 'admin')) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!user || user.user_type !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-gray-900 shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/admin" className="text-xl font-bold text-white">
                🔧 Fambri Farms Admin
              </Link>
              <div className="ml-10 flex space-x-8">
                <Link href="/admin/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/admin/products" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Products
                </Link>
                <Link href="/admin/orders" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Orders
                </Link>
                <Link href="/admin/wishlists" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Wishlists
                </Link>
                <Link href="/admin/departments" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Departments
                </Link>
                <Link href="/admin/users" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Users
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300 mr-4">Welcome, {user.first_name}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
} 