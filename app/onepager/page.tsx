export default function OnePageOverview() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">System Overview</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about the Fambri Farms supply chain system in one place
        </p>
      </div>

      {/* What This System Does */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">
          What This System Does
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-2">Restaurant Orders</h3>
            <p className="text-green-700">
              Lets restaurants order fresh produce from Fambri Farms through a simple wishlist system
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Staff Management</h3>
            <p className="text-blue-700">
              Helps Fambri staff manage stock, production, and suppliers with role-based access
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-purple-800 mb-2">Smart Automation</h3>
            <p className="text-purple-700">
              Creates purchase orders to suppliers and invoices to customers automatically
            </p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
          How Ordering Works
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Build Wishlist</h3>
              <p className="text-gray-600">Restaurants add items to a wishlist throughout the week, adjusting quantities as needed</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Place Order (Mondays & Thursdays)</h3>
              <p className="text-gray-600">On order days, restaurants convert their wishlist to an actual order</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Smart Fulfillment</h3>
              <p className="text-gray-600">The system decides for each item: buy from a supplier or make it in-house based on cost and availability</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Procurement & Production</h3>
              <p className="text-gray-600">Staff see supplier purchase orders to send and receive deliveries, or schedule in-house production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses It */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-500 pb-2">
          Who Uses It
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Restaurant Users
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Build and maintain wishlists</li>
              <li>• Place orders on allowed days</li>
              <li>• View order history and invoices</li>
              <li>• Multiple users per restaurant (chef, manager)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Fambri Staff
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Manager:</strong> Confirm orders, manage pricing</li>
              <li>• <strong>CEO:</strong> View dashboards, approve decisions</li>
              <li>• <strong>Stocktaker:</strong> Manage inventory, stock counts</li>
              <li>• <strong>Production Lead:</strong> Run production batches</li>
              <li>• <strong>Sales/Ops:</strong> Customer support, invoicing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We're Building Next */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-orange-500 pb-2">
          What We're Building Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="font-semibold text-orange-800 mb-2">Simple Screens</h3>
            <p className="text-orange-700 mb-3">
              Clean, mobile-first interfaces for purchase orders and receiving deliveries
            </p>
            <div className="text-sm text-orange-600">
              • Purchase order management<br/>
              • Delivery receiving screens<br/>
              • Production batch tracking
            </div>
          </div>
          <div className="bg-teal-50 rounded-lg p-6">
            <h3 className="font-semibold text-teal-800 mb-2">Smart Dashboards</h3>
            <p className="text-teal-700 mb-3">
              Key numbers at a glance with actionable insights
            </p>
            <div className="text-sm text-teal-600">
              • Orders and stock alerts<br/>
              • Supplier performance<br/>
              • Financial summaries
            </div>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="font-semibold text-indigo-800 mb-2">Basic Reports</h3>
            <p className="text-indigo-700 mb-3">
              Essential reports with CSV export functionality
            </p>
            <div className="text-sm text-indigo-600">
              • Orders this week<br/>
              • Open purchase orders<br/>
              • Low stock alerts
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-6">
            <h3 className="font-semibold text-pink-800 mb-2">User Management</h3>
            <p className="text-pink-700 mb-3">
              Complete admin panel for managing all system users
            </p>
            <div className="text-sm text-pink-600">
              • Add/edit restaurant customers<br/>
              • Manage staff access<br/>
              • Password resets
            </div>
          </div>
        </div>
      </section>

      {/* Where to Login */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-400 pb-2">
          Where to Login (When Built)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Restaurant Access</h3>
            <p className="text-gray-600 mb-3">
              Login at <code className="bg-gray-200 px-2 py-1 rounded">/login</code> or register at <code className="bg-gray-200 px-2 py-1 rounded">/register</code>
            </p>
            <p className="text-gray-600">
              After login, restaurants go to their dashboard to manage wishlists and orders
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Staff Access</h3>
            <p className="text-gray-600 mb-3">
              Same login page, but staff users are redirected to the admin dashboard
            </p>
            <p className="text-gray-600">
              Access level depends on your role: Manager, CEO, Stocktaker, Production Lead, or Sales/Ops
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
