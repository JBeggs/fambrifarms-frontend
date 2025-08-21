'use client';

import { Navigation } from '@/components/template/Navigation';
import { ContentBlock } from '@/components/cms/ContentBlock';
import { useCompanyInfo } from '@/components/cms/CompanyInfo';

export default function AboutPage() {
  const { companyInfo } = useCompanyInfo();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center py-12 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                <ContentBlock 
                  page="about" 
                  section="hero_title" 
                  fallback={`About ${companyInfo?.name || 'Fambri Farms'}`}
                />
              </h1>
              <ContentBlock 
                page="about" 
                section="hero_subtitle" 
                fallback="Your trusted partner in restaurant supply since day one"
                className="text-xl text-gray-600"
              />
            </div>
            
            {/* Company Story */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
              <ContentBlock 
                page="about" 
                section="content" 
                fallback="Founded with a passion for connecting local farms with restaurants, Fambri Farms has grown from a small family operation to a trusted supplier serving restaurants across the region."
                className="prose prose-lg text-gray-600"
              />
            </div>
            
            {/* Values */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh & Quality</h3>
                <p className="text-gray-600">
                  We source directly from local farms and trusted suppliers, ensuring every product 
                  meets our strict quality standards for freshness and taste.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable Partnership</h3>
                <p className="text-gray-600">
                  We understand the demands of restaurant operations. Our reliable delivery schedule 
                  and consistent quality make us a partner you can count on.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-3xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Efficient Delivery</h3>
                <p className="text-gray-600">
                  Our Tuesday and Friday ordering schedule ensures optimal freshness while providing 
                  restaurants with the flexibility they need to plan their menus.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Service</h3>
                <p className="text-gray-600">
                  Every restaurant is unique, and we tailor our service to meet your specific needs. 
                  Our team is always ready to help you find the perfect ingredients.
                </p>
              </div>
            </div>
            
            {/* Mission */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                To empower restaurants with the finest ingredients while supporting local agriculture 
                and sustainable farming practices. We're building a community where great food starts 
                with great ingredients.
              </p>
            </div>
            
            {/* Farm Location */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Farm Location</h2>
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Magaliesburg Region</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {companyInfo?.description || 'Located at the foot of the Magaliesburg mountain range in Hartbeespoort, our farm benefits from rich soil and ideal climate conditions.'}
                </p>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Address:</strong> {companyInfo?.address || 'BR1601, Hartbeeshoek Road, Broederstroom, 0260'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 