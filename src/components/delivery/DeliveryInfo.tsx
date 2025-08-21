'use client';

import React from 'react';

interface DeliveryInfoProps {
  className?: string;
}

export default function DeliveryInfo({ className = '' }: DeliveryInfoProps) {
  const deliverySchedule = [
    { day: 'Monday', status: 'Order Prep', description: 'Preparing for Tuesday orders' },
    { day: 'Tuesday', status: 'Order Day', description: 'Place orders today', isOrderDay: true },
    { day: 'Wednesday', status: 'Delivery Day', description: 'Delivering Tuesday orders', isDelivery: true },
    { day: 'Thursday', status: 'Delivery Day', description: 'Delivering Tuesday orders', isDelivery: true },
    { day: 'Friday', status: 'Order Day', description: 'Place orders today', isOrderDay: true },
    { day: 'Saturday', status: 'Delivery Day', description: 'Delivering Friday orders', isDelivery: true },
    { day: 'Sunday', status: 'Delivery Day', description: 'Delivering Friday orders', isDelivery: true },
  ];

  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className={`bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
          🚚 Sun City Delivery Service
        </h3>
        <p className="text-gray-700">
          Fresh produce delivered to restaurants across Sun City Resort and surrounding areas. Orders placed on Tuesday/Friday are delivered the following days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Schedule */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">📅 Weekly Schedule</h4>
          <div className="space-y-2">
            {deliverySchedule.map((schedule) => (
              <div
                key={schedule.day}
                className={`flex items-center justify-between p-2 rounded text-sm ${
                  schedule.day === currentDay
                    ? 'bg-green-100 border border-green-300'
                    : 'bg-white border border-gray-200'
                } ${
                  schedule.isOrderDay 
                    ? 'ring-2 ring-blue-400' 
                    : schedule.isDelivery 
                    ? 'ring-2 ring-green-400' 
                    : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${
                    schedule.day === currentDay ? 'text-green-800' : 'text-gray-700'
                  }`}>
                    {schedule.day}
                  </span>
                  {schedule.day === currentDay && (
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                      Today
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className={`font-medium ${
                    schedule.isOrderDay 
                      ? 'text-blue-600' 
                      : schedule.isDelivery 
                      ? 'text-green-600' 
                      : 'text-gray-600'
                  }`}>
                    {schedule.status}
                  </div>
                  <div className="text-xs text-gray-500">{schedule.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">🗺️ Coverage Areas</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-white rounded border border-gray-200">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h5 className="font-medium text-gray-800">Sun City Resort</h5>
                <p className="text-sm text-gray-600">Main resort, entertainment center, hotels</p>
                <span className="text-xs text-green-600 font-medium">✅ Same-day delivery</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-white rounded border border-gray-200">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h5 className="font-medium text-gray-800">Residential Areas</h5>
                <p className="text-sm text-gray-600">Sun City homes and local establishments</p>
                <span className="text-xs text-blue-600 font-medium">✅ Same-day delivery</span>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-white rounded border border-gray-200">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h5 className="font-medium text-gray-800">Pilanesberg Area</h5>
                <p className="text-sm text-gray-600">Extended coverage area</p>
                <span className="text-xs text-purple-600 font-medium">✅ Next-day delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-white rounded border border-gray-200">
          <div className="text-lg font-bold text-blue-600">2x</div>
          <div className="text-xs text-gray-600">Weekly Order Days</div>
          <div className="text-xs text-gray-500">Tue & Fri</div>
        </div>
        <div className="text-center p-3 bg-white rounded border border-gray-200">
          <div className="text-lg font-bold text-green-600">5x</div>
          <div className="text-xs text-gray-600">Weekly Deliveries</div>
          <div className="text-xs text-gray-500">Wed-Sun</div>
        </div>
        <div className="text-center p-3 bg-white rounded border border-gray-200">
          <div className="text-lg font-bold text-purple-600">15km</div>
          <div className="text-xs text-gray-600">Max Delivery Radius</div>
        </div>
        <div className="text-center p-3 bg-white rounded border border-gray-200">
          <div className="text-lg font-bold text-orange-600">100%</div>
          <div className="text-xs text-gray-600">Fresh Guarantee</div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6 p-4 bg-green-600 text-white rounded-lg">
        <h4 className="font-semibold mb-2">📞 Delivery Support</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Emergency Hotline:</strong><br />
            📱 +27 14 557-0000
          </div>
          <div>
            <strong>WhatsApp Orders:</strong><br />
            💬 +27 82 123-4567
          </div>
        </div>
      </div>
    </div>
  );
} 