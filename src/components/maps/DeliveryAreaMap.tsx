'use client';

import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface DeliveryArea {
  name: string;
  coordinates: [number, number][];
  color: string;
  description: string;
}

interface RestaurantLocation {
  name: string;
  position: [number, number];
  address: string;
  deliveryRadius: number; // in km
}

const DeliveryAreaMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Sun City coordinates (approximate center)
  const sunCityCenter: [number, number] = [-25.8851, 27.1037];
  
  // Sun City delivery areas/zones
  const deliveryAreas: DeliveryArea[] = [
    {
      name: "Sun City Resort Area",
      coordinates: [
        [-25.8751, 27.0937],
        [-25.8751, 27.1137],
        [-25.8951, 27.1137],
        [-25.8951, 27.0937],
      ],
      color: "#10b981",
      description: "Main resort and entertainment complex"
    },
    {
      name: "Sun City Residential",
      coordinates: [
        [-25.8651, 27.0837],
        [-25.8651, 27.1237],
        [-25.9051, 27.1237],
        [-25.9051, 27.0837],
      ],
      color: "#3b82f6",
      description: "Residential areas and neighborhoods"
    },
    {
      name: "Golf Course Areas",
      coordinates: [
        [-25.8551, 27.0737],
        [-25.8551, 27.1037],
        [-25.8851, 27.1037],
        [-25.8851, 27.0737],
      ],
      color: "#8b5cf6",
      description: "Golf courses and recreational facilities"
    }
  ];
  
  // Restaurant locations in Sun City
  const restaurants: RestaurantLocation[] = [
    {
      name: "Sun City Country Club",
      position: [-25.8801, 27.1087],
      address: "Sun City Resort, North West Province",
      deliveryRadius: 5
    },
    {
      name: "Soho Restaurant",
      position: [-25.8851, 27.1137],
      address: "Sun City Entertainment Centre",
      deliveryRadius: 4
    },
    {
      name: "Legends Golf Club",
      position: [-25.8701, 27.0887],
      address: "Legends Golf & Safari Resort",
      deliveryRadius: 6
    }
  ];

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    try {
      // Create map instance
      const map = L.map(mapRef.current, {
        center: sunCityCenter,
        zoom: 13,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add delivery areas
      deliveryAreas.forEach(area => {
        const polygon = L.polygon(area.coordinates as L.LatLngExpression[], {
          color: area.color,
          fillColor: area.color,
          fillOpacity: 0.3,
          weight: 2
        }).addTo(map);

        polygon.bindPopup(`
          <div class="p-2">
            <h3 class="font-semibold text-green-800">${area.name}</h3>
            <p class="text-sm text-gray-600 mt-1">${area.description}</p>
            <p class="text-xs text-green-600 mt-2">✅ Delivery Available</p>
          </div>
        `);
      });

      // Add restaurant markers with delivery radius circles
      restaurants.forEach(restaurant => {
        const marker = L.marker(restaurant.position as L.LatLngExpression).addTo(map);
        
        marker.bindPopup(`
          <div class="p-2">
            <h3 class="font-semibold text-green-800">${restaurant.name}</h3>
            <p class="text-sm text-gray-600 mt-1">${restaurant.address}</p>
            <p class="text-xs text-blue-600 mt-2">🚚 ${restaurant.deliveryRadius}km radius</p>
          </div>
        `);

        // Add delivery radius circle
        L.circle(restaurant.position as L.LatLngExpression, {
          color: '#059669',
          fillColor: '#10b981',
          fillOpacity: 0.1,
          radius: restaurant.deliveryRadius * 1000 // Convert km to meters
        }).addTo(map);
      });

      mapInstance.current = map;
      setIsLoaded(true);

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup function
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <div
        ref={mapRef}
        style={{ height: '400px', width: '100%' }}
        className="z-0"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading delivery area map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryAreaMap; 