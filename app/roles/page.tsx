export default function RolesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">User Roles & Permissions</h1>
        <p className="text-xl text-gray-600">
          Who does what in the Fambri Farms supply chain system
        </p>
      </div>

      {/* Multi-Role Note */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Multi-Role Staff</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>Staff members can hold multiple roles simultaneously (e.g., CEO + Stocktaker). 
              Authorization checks evaluate the union of assigned roles, giving access to all combined permissions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Roles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Staff Roles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CEO */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800">CEO</h3>
            </div>
            <p className="text-purple-700 mb-4">
              Read-only access across all dashboards with approval authority for major decisions
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-purple-800">Financial summaries and KPI dashboards</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-purple-800">Supplier performance analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-purple-800">Approve large purchase orders and price overrides</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-purple-800">Sales and stock health monitoring</span>
              </div>
            </div>
          </div>

          {/* Manager */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800">Manager</h3>
            </div>
            <p className="text-green-700 mb-4">
              Full operational control over orders, procurement, production, and user management
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-green-800">Create and manage purchase orders to suppliers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-green-800">Approve and confirm customer orders</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-green-800">Schedule production and manage pricing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-green-800">Manage user access and resolve stock alerts</span>
              </div>
            </div>
          </div>

          {/* Stocktaker */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800">Stocktaker (Inventory Controller)</h3>
            </div>
            <p className="text-blue-700 mb-4">
              Manages all inventory movements, stock counts, and maintains accurate stock levels
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-blue-800">Record stock movements (in/out/adjustments)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-blue-800">Reconcile variances and batch expiries</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-blue-800">Mark production batches as complete</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-blue-800">Resolve stock alerts and manage counts</span>
              </div>
            </div>
          </div>

          {/* Production Lead */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800">Production Lead</h3>
            </div>
            <p className="text-orange-700 mb-4">
              Manages recipes, production batches, and monitors yields for in-house manufacturing
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-orange-800">Manage recipes and production batches</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-orange-800">Start and complete production runs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-orange-800">Monitor yields and flag shortages</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-orange-800">Fulfill internal reservations</span>
              </div>
            </div>
          </div>

          {/* Sales/Ops */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border border-teal-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-teal-800">Sales/Ops</h3>
            </div>
            <p className="text-teal-700 mb-4">
              Customer-facing role managing accounts, orders, invoices, and customer support
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-teal-800">Manage customer accounts and verify restaurants</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-teal-800">Assist with orders and resolve issues</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-teal-800">Monitor invoices and handle returns/credits</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-teal-800">Send order confirmations and delivery updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Users */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Restaurant Users</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border border-indigo-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-800">Restaurant Customers</h3>
                <p className="text-indigo-600">Chef, Manager, Owner</p>
              </div>
            </div>
            <p className="text-indigo-700 mb-6">
              Restaurant users can browse products, maintain wishlists, and place orders. 
              Multiple users (chef, manager, owner) can be associated with the same restaurant account.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">What They Can Do:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Browse products and view stock status</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Build and maintain wishlists</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Place orders on Tuesdays & Fridays</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">View order history and track status</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-3">Responsibilities:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Review invoices and report discrepancies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Keep restaurant contact details current</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Align order timing with delivery windows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-indigo-600">•</span>
                    <span className="text-indigo-800">Receive goods and report any issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Superuser Exclusive */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Superuser Exclusive</h2>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-800">Django Superuser</h3>
              <p className="text-red-600">System Administrator</p>
            </div>
          </div>
          <p className="text-red-700 mb-6">
            Superusers have exclusive access to system-wide management functions that no other role can touch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-3">User Management:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Create/upgrade/downgrade any user type</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Create other superusers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Deactivate/reactivate accounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Force password resets for any user</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-3">System Control:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Approve high-value credits and voids</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Manage security settings and access controls</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Export/anonymize data on request</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span className="text-red-800">Quarterly access reviews and policy checks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Policy */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Access Policy Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Login Separation</h3>
            <p className="text-gray-600">
              Staff log in with staff/admin accounts; customers with restaurant accounts. 
              Clear separation of access levels.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Immediate Deactivation</h3>
            <p className="text-gray-600">
              Soft-deactivate any user immediately removes access while keeping audit trails 
              of their actions linked.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Password Management</h3>
            <p className="text-gray-600">
              Staff can initiate resets for customers; managers can reset non-admin staff passwords; 
              superusers can reset anyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
