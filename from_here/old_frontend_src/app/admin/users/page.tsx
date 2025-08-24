'use client';

import React, { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { User } from '@/types';
import Link from 'next/link';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // This would need to be implemented in the API client
        console.log('Fetching users...');
        // For now, just simulate some data
        setUsers([
          {
            id: 1,
            email: 'test@restaurant.com',
            first_name: 'John',
            last_name: 'Doe',
            user_type: 'restaurant',
            phone: '123-456-7890',
            is_verified: true,
          },
          {
            id: 2,
            email: 'admin@fambrifarms.com',
            first_name: 'Admin',
            last_name: 'User',
            user_type: 'admin',
            phone: '098-765-4321',
            is_verified: true,
          },
        ]);
      } catch (err: any) {
        setError('Failed to load users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleUserVerification = async (userId: number, currentStatus: boolean) => {
    try {
      // This would need to be implemented in the API client
      console.log('Toggle user verification:', userId, !currentStatus);
      // For now, just update the local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, is_verified: !currentStatus } : user
      ));
    } catch (err: any) {
      console.error('Error updating user verification:', err);
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'all') return true;
    return user.user_type === filter;
  });

  const getUserTypeColor = (userType: User['user_type']) => {
    switch (userType) {
      case 'restaurant':
        return 'bg-green-100 text-green-800';
      case 'admin':
        return 'bg-blue-100 text-blue-800';
      case 'staff':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">
              Manage restaurant and admin users
            </p>
          </div>
          <div className="flex space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Users</option>
              <option value="restaurant">Restaurants</option>
              <option value="admin">Admins</option>
              <option value="staff">Staff</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
              Invite User
            </button>
          </div>
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-8">
          <span className="text-4xl mb-4 block">👥</span>
          <p className="text-gray-500 mb-4">
            {filter === 'all' ? 'No users found' : `No ${filter} users found`}
          </p>
          {filter !== 'all' && (
            <button
              onClick={() => setFilter('all')}
              className="text-blue-600 hover:text-blue-500"
            >
              View all users
            </button>
          )}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Users ({filteredUsers.length})
              </h3>
              <div className="flex space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Export
                </button>
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Bulk Actions
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-lg">
                              {user.user_type === 'restaurant' ? '🍽️' : 
                               user.user_type === 'admin' ? '👑' : '👤'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.first_name} {user.last_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUserTypeColor(user.user_type)}`}>
                        {user.user_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.phone || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.is_verified
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {user.is_verified ? 'Verified' : 'Unverified'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          href={`/admin/users/${user.id}`}
                          className="text-blue-600 hover:text-blue-500"
                        >
                          View
                        </Link>
                        <span className="text-gray-300">|</span>
                        <button
                          onClick={() => toggleUserVerification(user.id, user.is_verified)}
                          className={`${
                            user.is_verified
                              ? 'text-yellow-600 hover:text-yellow-500'
                              : 'text-green-600 hover:text-green-500'
                          }`}
                        >
                          {user.is_verified ? 'Unverify' : 'Verify'}
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-red-600 hover:text-red-500">
                          Deactivate
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
} 