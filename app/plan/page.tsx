export default function DevelopmentPlanPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Development Plan</h1>
        <p className="text-xl text-gray-600">
          Our roadmap for building the Fambri Farms supply chain system
        </p>
      </div>

      {/* Timeline Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-green-800">Phase 1</h3>
                <p className="text-green-600">Week 1 - Foundation</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Django procurement backend (POs create/update/receive)</li>
              <li>• Auto supplier assignment</li>
              <li>• Deploy Django backend to PythonAnywhere</li>
              <li>• Admin models and URL routing configured</li>
              <li>• Core documentation (one-pager, glossary, sitemap)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Phase 2</h3>
                <p className="text-blue-600">Week 2 - Operations</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Production reservations for internal items</li>
              <li>• Basic production screens</li>
              <li>• Admin endpoints (users, restaurants)</li>
              <li>• Reporting basics with CSV export</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-purple-800">Phase 3</h3>
                <p className="text-purple-600">Week 3 - Polish</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• Restaurant UX: wishlist → confirm → order</li>
              <li>• Admin POs polish: filters, pagination</li>
              <li>• Performance and stability improvements</li>
              <li>• Idempotent operations, rate limiting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Phase Breakdown */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Implementation Steps</h2>
        
        {/* Phase 1 Details */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-500 rounded-full text-white flex items-center justify-center font-bold">1</div>
            <h3 className="text-2xl font-bold text-gray-900">Foundation Phase (Week 1)</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">✅ Completed</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Backend - Procurement System</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Created procurement Django app</li>
                <li>✅ SupplierPurchaseOrder and SupplierPOItem models</li>
                <li>✅ Endpoints: generate POs, update, receive</li>
                <li>✅ Auto-assign supplier/internal on order creation</li>
                <li>✅ Multi-supplier fulfillment logic</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Frontend - Documentation App</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Mobile-first documentation pages</li>
                <li>✅ System overview and roles pages</li>
                <li>✅ Glossary with plain language terms</li>
                <li>✅ Development plan documentation</li>
                <li>✅ Navigation and responsive design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2 Details */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-bold">2</div>
            <h3 className="text-2xl font-bold text-gray-900">Operations Phase (Week 2)</h3>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">🚧 Next</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Production Reservations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Create ProductionReservation model</li>
                <li>• Link to internal-fulfillment order lines</li>
                <li>• Fulfill on batch completion</li>
                <li>• Expose ETAs in UI</li>
                <li>• Production batch tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Admin Endpoints (continuation)</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Extend /api/admin/users (list/create/update/reset)</li>
                <li>• Extend /api/admin/restaurants (create/assign/remove users)</li>
                <li>• User management UI screens</li>
                <li>• Password reset functionality</li>
                <li>• Role assignment interface</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Basic Reporting</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Orders dashboard: counts by status</li>
                <li>• Supplier PO dashboard: open/received</li>
                <li>• Stock health: low stock, expiring</li>
                <li>• CSV export functionality</li>
                <li>• Simple table views</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Production Screens</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Production batches list</li>
                <li>• Start/complete batch workflows</li>
                <li>• Yield tracking interface</li>
                <li>• Reservation fulfillment</li>
                <li>• Recipe management basics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 3 Details */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold">3</div>
            <h3 className="text-2xl font-bold text-gray-900">Polish Phase (Week 3)</h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">⏳ Planned</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-11">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Restaurant UX Enhancement</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wishlist → confirm order flow</li>
                <li>• Supplier override per line</li>
                <li>• Grouped supplier summary</li>
                <li>• Order confirmation screens</li>
                <li>• Mobile-optimized interfaces</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Admin PO Improvements</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• PO list with filters and pagination</li>
                <li>• Detailed PO view with status</li>
                <li>• Partial receive improvements</li>
                <li>• Supplier performance tracking</li>
                <li>• Delivery scheduling</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">Performance & Stability</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Idempotent operations</li>
                <li>• Rate limiting implementation</li>
                <li>• Robust error handling</li>
                <li>• Logging and monitoring</li>
                <li>• Input validation improvements</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">System Reliability</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Stricter permissions</li>
                <li>• Audit trail for key actions</li>
                <li>• Email/webhook notifications</li>
                <li>• Backup and recovery procedures</li>
                <li>• Security hardening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stretch Goals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Stretch Goals (Week 4+)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Financial Features</h3>
            <ul className="space-y-2 text-sm text-orange-700">
              <li>• Invoice PDF generation</li>
              <li>• Credits and returns UI</li>
              <li>• AR aging reports</li>
              <li>• Payment tracking</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6 border border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Advanced Reporting</h3>
            <ul className="space-y-2 text-sm text-teal-700">
              <li>• Supplier performance analytics</li>
              <li>• Production yield reports</li>
              <li>• Cost analysis dashboards</li>
              <li>• Trend analysis</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
            <h3 className="text-lg font-semibold text-pink-800 mb-3">UI/UX Polish</h3>
            <ul className="space-y-2 text-sm text-pink-700">
              <li>• Theming and branding pass</li>
              <li>• Micro-interactions</li>
              <li>• Advanced mobile gestures</li>
              <li>• Accessibility improvements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend (Django)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Core Apps:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• accounts (users, authentication)</li>
                  <li>• products (catalog, inventory)</li>
                  <li>• orders (wishlist, orders, items)</li>
                  <li>• suppliers (supplier management)</li>
                  <li>• procurement (purchase orders)</li>
                  <li>• production (recipes, batches)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JWT authentication</li>
                  <li>• Role-based permissions</li>
                  <li>• Multi-supplier fulfillment</li>
                  <li>• Production reservations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend (Next.js)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Current App:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Documentation and planning app</li>
                  <li>• Mobile-first responsive design</li>
                  <li>• No authentication (informational only)</li>
                  <li>• Tailwind CSS styling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Future Full App:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Restaurant and admin dashboards</li>
                  <li>• Order management interfaces</li>
                  <li>• Real-time updates</li>
                  <li>• Progressive Web App features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
            <p className="text-sm text-gray-600">
              Reduce order processing time by 50% through automation and smart supplier selection
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">User Adoption</h3>
            <p className="text-sm text-gray-600">
              100% of restaurant customers using the system for weekly orders within 3 months
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Data Accuracy</h3>
            <p className="text-sm text-gray-600">
              95% inventory accuracy through automated tracking and regular reconciliation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
