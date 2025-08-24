import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Fambri Farms
            <span className="block text-green-700 text-2xl sm:text-3xl md:text-4xl font-normal mt-2">
              Supply Chain System
            </span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
            A comprehensive development plan for farm-to-restaurant supply chain management. 
            This documentation explains what we're building and how it will work.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onepager" className="inline-block rounded-lg bg-green-600 px-8 py-4 text-white font-semibold hover:bg-green-700 active:bg-green-800 text-lg">
              Explore the System
            </Link>
            <Link href="/plan" className="inline-block rounded-lg border-2 border-green-600 px-8 py-4 text-green-700 font-semibold hover:bg-green-50 text-lg">
              Development Plan
            </Link>
          </div>
        </div>
      </section>

      {/* Development Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We're Building
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurant Ordering</h3>
              <p className="text-gray-600">
                Simple wishlist system where restaurants order on Tuesdays & Fridays. 
                Smart supplier selection and in-house production decisions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Operations</h3>
              <p className="text-gray-600">
                Multiple staff roles (Manager, CEO, Stocktaker, Production Lead) with specific 
                responsibilities for inventory, production, and procurement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Reporting</h3>
              <p className="text-gray-600">
                Operational dashboards showing orders, stock alerts, supplier performance, 
                and financial summaries with CSV exports.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dual Supply Chain</h3>
              <p className="text-gray-600">
                Automatic supplier selection for best prices, plus in-house production 
                from recipes when it's more efficient.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Role Users</h3>
              <p className="text-gray-600">
                Staff can have multiple roles simultaneously. Restaurants can have 
                multiple users (chef, manager) under one account.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile First</h3>
              <p className="text-gray-600">
                Every screen designed for phones first. Simple, clear actions 
                with minimal complexity and fast loading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Development Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-green-600 font-bold text-lg mb-2">Phase 1 - Week 1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Foundation</h3>
              <p className="text-sm text-gray-600">Django procurement backend functionality, deploy to PythonAnywhere, core API endpoints, documentation</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-blue-600 font-bold text-lg mb-2">Phase 2 - Week 2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Operations</h3>
              <p className="text-sm text-gray-600">Production reservations, admin endpoints, basic reporting</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-purple-600 font-bold text-lg mb-2">Phase 3 - Week 3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Polish</h3>
              <p className="text-sm text-gray-600">Restaurant UX, admin improvements, performance optimization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
