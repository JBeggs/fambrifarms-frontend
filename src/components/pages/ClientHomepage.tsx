'use client';

import { DepartmentShowcase } from '@/components/template/DepartmentShowcase';
import { Navigation } from '@/components/template/Navigation';
import { ContentBlock } from '@/components/cms/ContentBlock';
import { useCompanyInfo } from '@/components/cms/CompanyInfo';
import { useAuth } from '@/contexts/AuthContext';

export default function ClientHomepage() {
  const { companyInfo } = useCompanyInfo();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center py-12 mb-8">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                🚜 <ContentBlock 
                  page="home" 
                  section="hero_title" 
                  fallback="Welcome to Fambri Farms"
                  className="inline"
                />
              </h1>
              <ContentBlock 
                page="home" 
                section="hero_subtitle" 
                fallback="Your trusted partner for fresh, quality produce. We supply restaurants with the finest ingredients, sourced directly from local farms and trusted suppliers."
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/departments"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Browse Departments
                </a>
                <a
                  href="/products"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                >
                  View All Products
                </a>
              </div>
            </div>
            
            {/* Order Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  🗓️ Order Schedule
                </h2>
                <p className="text-gray-600 mb-6">
                  We accept orders on specific days to ensure the freshest delivery
                </p>
                <div className="flex justify-center gap-4">
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                    Tuesdays
                  </div>
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                    Fridays
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Orders placed on these days will be processed and delivered within 24-48 hours
                </p>
              </div>
            </div>
            
            {/* Page Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Departments
              </h2>
              <p className="text-lg text-gray-600">
                Each department is managed by dedicated experts who ensure the highest quality products
              </p>
            </div>
            
            {/* Department Showcase */}
            <DepartmentShowcase />
            
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  About {companyInfo?.name || 'Fambri Farms'}
                </h3>
                <ContentBlock 
                  page="home" 
                  section="content" 
                  fallback="We are passionate about connecting local farms with restaurants, ensuring that every ingredient that reaches your kitchen meets our exacting standards for freshness and quality."
                  className="text-gray-600 max-w-3xl mx-auto"
                />
              </div>
              <div className="flex justify-center">
                <a
                  href="/about"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Learn More About Us
                </a>
              </div>
            </div>
            
            {/* Call to Action */}
            {/* Call to Action - Conditional based on authentication */}
            {!isAuthenticated && (
              <div className="text-center mt-16 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to Start Ordering?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join {companyInfo?.name || 'Fambri Farms'} today and get access to premium quality produce for your restaurant
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/register"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Create Account
                    </a>
                    <a
                      href="/login"
                      className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Authenticated user welcome */}
            {isAuthenticated && (
              <div className="text-center mt-16 mb-8">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border border-green-200">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Welcome to {companyInfo?.name || 'Fambri Farms'}, {user?.first_name}! 🎉
                  </h3>
                  <p className="text-green-700 mb-6">
                    You're all set! Browse our premium quality produce and start building your orders
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/products"
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      Shop Products
                    </a>
                    <a
                      href="/dashboard"
                      className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold"
                    >
                      My Dashboard
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 