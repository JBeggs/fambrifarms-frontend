'use client';

import React, { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { Department } from '@/types';
import Link from 'next/link';

export default function AdminDepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.getDepartments();
      setDepartments(response.results || []);
    } catch (error) {
      console.error('Failed to fetch departments:', error);
      setError('Failed to load departments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleDepartmentStatus = async (departmentId: number, currentStatus: boolean) => {
    try {
      await apiClient.updateDepartment(departmentId, { is_active: !currentStatus });
      // Update local state
      setDepartments(departments.map(dept => 
        dept.id === departmentId ? { ...dept, is_active: !currentStatus } : dept
      ));
    } catch (err: any) {
      console.error('Error updating department status:', err);
      setError('Failed to update department status');
    }
  };

  const filteredDepartments = departments.filter(dept => {
    const matchesSearch = dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (dept.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const activeDepartments = filteredDepartments.filter(dept => dept.is_active);
  const inactiveDepartments = filteredDepartments.filter(dept => !dept.is_active);

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
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={fetchDepartments}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Department Management</h1>
            <p className="text-gray-600">
              Organize products into departments and categories
            </p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
            Add New Department
          </button>
        </div>
      </div>

      {/* Search and Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search departments..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Departments
            </label>
            <div className="text-2xl font-bold text-blue-600">
              {departments.length}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Active Departments
            </label>
            <div className="text-lg font-semibold text-green-600">
              {activeDepartments.length}
            </div>
          </div>
        </div>
      </div>

      {/* Active Departments */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Active Departments ({activeDepartments.length})
        </h2>
        
        {activeDepartments.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-lg shadow">
            <span className="text-4xl mb-4 block">🏷️</span>
            <p className="text-gray-500">No active departments</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeDepartments.map((department) => (
              <div key={department.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-6xl">
                      {department.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {department.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {department.description || 'No description available'}
                  </p>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xs text-gray-500">
                      ID: {department.id}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/departments/${department.id}`}
                      className="flex-1 text-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => toggleDepartmentStatus(department.id, department.is_active)}
                      className="flex-1 text-center px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Deactivate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inactive Departments */}
      {inactiveDepartments.length > 0 && (
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Inactive Departments ({inactiveDepartments.length})
          </h2>
          
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">
                Inactive departments are hidden from customers
              </h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {inactiveDepartments.map((department) => (
                <div key={department.id} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">
                      {department.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {department.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {department.description || 'No description'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                      Inactive
                    </span>
                    <button
                      onClick={() => toggleDepartmentStatus(department.id, department.is_active)}
                      className="text-green-600 hover:text-green-500 text-sm font-medium"
                    >
                      Activate
                    </button>
                    <span className="text-gray-300">|</span>
                    <Link
                      href={`/admin/departments/${department.id}`}
                      className="text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 