'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api';
import { Department } from '@/types';

// Helper function to get department emoji
const getDepartmentEmoji = (departmentName: string): string => {
  const name = departmentName.toLowerCase();
  if (name.includes('vegetable')) return '🥕';
  if (name.includes('fruit')) return '🍎';
  if (name.includes('dairy') || name.includes('egg')) return '🥛';
  if (name.includes('meat') || name.includes('poultry')) return '🥩';
  if (name.includes('herb') || name.includes('spice')) return '🌿';
  if (name.includes('seafood')) return '🐟';
  if (name.includes('pantry') || name.includes('staple')) return '🍯';
  if (name.includes('specialty')) return '✨';
  if (name.includes('hardware')) return '🔧';
  return '🌱';
};

export const DepartmentShowcase = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiClient.getDepartments();
        
        // Filter only active departments
        const activeDepartments = response.results.filter(dept => dept.is_active);
        setDepartments(activeDepartments);
      } catch (error) {
        console.error('Failed to fetch departments:', error);
        setError('Failed to load departments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const handleDepartmentClick = (department: Department) => {
    router.push(`/departments/${department.id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (departments.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">No departments available at this time.</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {departments.map((department) => {
        const emoji = getDepartmentEmoji(department.name);
        const color = department.color || '#16a34a';
        
        return (
          <div
            key={department.id}
            onClick={() => handleDepartmentClick(department)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200 overflow-hidden"
          >
            <div 
              className="h-32 flex items-center justify-center text-6xl"
              style={{ backgroundColor: color + '20' }}
            >
              {emoji}
            </div>
            
            <div className="p-6">
              <h3 
                className="text-xl font-bold mb-2"
                style={{ color: color }}
              >
                {department.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {department.description || 'Fresh quality products from our farm'}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  View Products
                </span>
                <svg 
                  className="w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 