'use client';

import React from 'react';
import DeliveryInfo from '@/components/delivery/DeliveryInfo';
import dynamic from 'next/dynamic';

const DeliveryAreaMap = dynamic(() => import('@/components/maps/DeliveryAreaMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
        <p className="text-gray-600">Loading delivery area map...</p>
      </div>
    </div>
  )
});

export default function DeliveryInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            🚚 Delivery Information
          </h1>
          <p className="text-gray-600 text-lg">
            Place orders on Tuesday & Friday - receive deliveries the following days throughout Sun City
          </p>
        </div>

        {/* Main Delivery Information */}
        <div className="mb-8">
          <DeliveryInfo />
        </div>

        {/* Interactive Delivery Map */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🗺️ Interactive Delivery Coverage Map</h2>
            <p className="text-gray-600">
              Explore our delivery areas in Sun City. Tuesday orders delivered Wed-Thu, Friday orders delivered Sat-Sun. Click zones and markers for details.
            </p>
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            <DeliveryAreaMap />
          </div>
          
          {/* Map Legend */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-green-800">Sun City Resort Area</h3>
                <p className="text-sm text-green-600">Main resort, entertainment complex, hotels</p>
                <div className="text-xs font-medium text-green-700 mt-1">✅ Same-day delivery available</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-blue-800">Residential Areas</h3>
                <p className="text-sm text-blue-600">Sun City homes and local establishments</p>
                <div className="text-xs font-medium text-blue-700 mt-1">✅ Same-day delivery available</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-purple-800">Pilanesberg Area</h3>
                <p className="text-sm text-purple-600">Extended coverage zone</p>
                <div className="text-xs font-medium text-purple-700 mt-1">📅 Next-day delivery available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">📞 Need Help with Delivery?</h3>
            <p className="mb-4">
              Our delivery support team is here to help with any questions about coverage, timing, or special requirements.
            </p>
            <div className="space-y-2 text-sm">
              <div><strong>Emergency Hotline:</strong> +27 14 557-0000</div>
              <div><strong>WhatsApp Orders:</strong> +27 82 123-4567</div>
            </div>
          </div>
          
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">🎯 Ready to Order?</h3>
            <p className="mb-4">
              Browse our fresh produce and add items to your wishlist. Place orders on Tuesdays & Fridays for delivery the following days.
            </p>
            <div className="flex gap-3">
              <a
                href="/products"
                className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Products
              </a>
              <a
                href="/wishlist"
                className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-400 transition-colors"
              >
                View Wishlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 