'use client';

import { Navigation } from '@/components/template/Navigation';
import { ContentBlock } from '@/components/cms/ContentBlock';
import { useCompanyInfo } from '@/components/cms/CompanyInfo';
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';
import { FAQ } from '@/types';

export default function ContactPage() {
  const { companyInfo } = useCompanyInfo();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await apiClient.getFAQs();
        setFaqs(response.results || []);
      } catch (error) {
        console.error('Failed to load FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

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
                  page="contact" 
                  section="hero_title" 
                  fallback="Contact Us"
                />
              </h1>
              <ContentBlock 
                page="contact" 
                section="hero_subtitle" 
                fallback="Get in touch with our team for any inquiries about our products and services"
                className="text-xl text-gray-600"
              />
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-green-600 mr-3">📧</div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600">{companyInfo?.email || 'info@fambrifarms.co.za'}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="text-green-600 mr-3">📞</div>
                    <div>
                      <div className="font-semibold text-gray-800">Phone</div>
                      <div className="text-gray-600">{companyInfo?.phone_primary || '+27 (0)84 504 8586'}</div>
                      {companyInfo?.phone_secondary && (
                        <div className="text-gray-600">{companyInfo.phone_secondary}</div>
                      )}
                    </div>
                  </div>
                  
                  {companyInfo?.whatsapp && (
                    <div className="flex items-center">
                      <div className="text-green-600 mr-3">💬</div>
                      <div>
                        <div className="font-semibold text-gray-800">WhatsApp</div>
                        <div className="text-gray-600">{companyInfo.whatsapp}</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="text-green-600 mr-3 mt-1">📍</div>
                    <div>
                      <div className="font-semibold text-gray-800">Address</div>
                      <div className="text-gray-600 whitespace-pre-line">
                        {companyInfo?.address || 'BR1601, Hartbeeshoek Road\nBroederstroom, 0260\nSouth Africa'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-800">7:00 AM - 5:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-800">8:00 AM - 2:00 PM</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-800">Closed</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">📦 Order Days</h3>
                  <p className="text-sm text-green-700">
                    We accept orders on <strong>Mondays</strong> and <strong>Thursdays</strong> only. 
                    Orders placed on these days will be processed and delivered within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Name (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your restaurant name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Pricing</option>
                    <option>Delivery</option>
                    <option>Account Setup</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ) : (
                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 