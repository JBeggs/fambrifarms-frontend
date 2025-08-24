export default function SitemapPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">App Structure & Wireframes</h1>
        <p className="text-xl text-gray-600">
          Complete sitemap and screen layouts for the full Fambri Farms system
        </p>
      </div>

      {/* Current vs Future */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h2 className="text-xl font-semibold text-green-800 mb-3">Current App (This Documentation)</h2>
            <div className="space-y-2 text-sm text-green-700">
              <div>• Landing page with development overview</div>
              <div>• System overview and user roles</div>
              <div>• Glossary and development plan</div>
              <div>• Reporting strategy</div>
              <div>• Mobile-first, informational only</div>
              <div>• No authentication required</div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Future Full App (To Be Built)</h2>
            <div className="space-y-2 text-sm text-blue-700">
              <div>• Complete restaurant and admin dashboards</div>
              <div>• Order management and procurement</div>
              <div>• User authentication and role-based access</div>
              <div>• Real-time inventory tracking</div>
              <div>• Production management</div>
              <div>• Reporting and analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Routes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Public Routes (No Authentication)</h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Authentication & Landing</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">/login</code>
                  <span className="text-gray-600">Login form (email, password, submit)</span>
                </div>
                <div className="flex items-center gap-3">
                  <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">/register</code>
                  <span className="text-gray-600">Restaurant registration form</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Login Screen Layout:</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Email and password fields</div>
                  <div>• "Remember me" checkbox</div>
                  <div>• Link to registration</div>
                  <div>• Forgot password (handled by staff)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Routes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Restaurant Routes (Customer Access)</h2>
        <div className="space-y-6">
          
          {/* Dashboard */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-900">Restaurant Dashboard</h3>
              <code className="text-sm font-mono text-indigo-600">/dashboard</code>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Key Elements:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• CTA to order on Tue/Fri (prominent button)</div>
                    <div>• Current wishlist item count</div>
                    <div>• Recent orders with status</div>
                    <div>• Next delivery date</div>
                    <div>• Outstanding invoice alerts</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Mobile Layout:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Large "Order Now" button (if Tue/Fri)</div>
                    <div>• Card-based layout for quick actions</div>
                    <div>• Swipe-friendly order history</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products & Wishlist */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-green-50 border-b border-green-200">
              <h3 className="text-lg font-semibold text-green-900">Products & Wishlist</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/products</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Browse/search products</div>
                    <div>• Filter by department</div>
                    <div>• Stock status indicators</div>
                    <div>• Add to wishlist buttons</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/wishlist</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Items with quantities</div>
                    <div>• Edit quantities inline</div>
                    <div>• Remove items</div>
                    <div>• Convert to order button</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/confirm-order</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Grouped by supplier</div>
                    <div>• Supplier override dropdown</div>
                    <div>• Price and subtotals</div>
                    <div>• Final place order action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-purple-50 border-b border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900">Order Management</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/orders</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Order list with status badges</div>
                    <div>• Date and total columns</div>
                    <div>• Quick status filtering</div>
                    <div>• Tap to view details</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/orders/:id</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Order status timeline</div>
                    <div>• Item details with suppliers</div>
                    <div>• Delivery information</div>
                    <div>• Invoice link when available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff/Admin Routes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Staff/Admin Routes (Internal Access)</h2>
        <div className="space-y-6">
          
          {/* Admin Dashboard */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-orange-50 border-b border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900">Admin Dashboard</h3>
              <code className="text-sm font-mono text-orange-600">/admin/dashboard</code>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">KPI Cards:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Pending orders count</div>
                    <div>• Low stock alerts</div>
                    <div>• Open purchase orders</div>
                    <div>• Today's revenue</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Quick Actions:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Process pending orders</div>
                    <div>• Generate POs</div>
                    <div>• Receive deliveries</div>
                    <div>• Resolve stock alerts</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Recent Activity:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• New orders feed</div>
                    <div>• Completed deliveries</div>
                    <div>• System alerts</div>
                    <div>• User activity log</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Management */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-blue-50 border-b border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900">Order Management</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/orders</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Order list with filters</div>
                    <div>• Status, date, customer filters</div>
                    <div>• Bulk actions for processing</div>
                    <div>• Export to CSV</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/orders/:id</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Order detail with status changes</div>
                    <div>• Who placed order (user tracking)</div>
                    <div>• Supplier grouping view</div>
                    <div>• Internal notes and history</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Procurement */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-teal-50 border-b border-teal-200">
              <h3 className="text-lg font-semibold text-teal-900">Procurement Management</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/procurement/pos</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Purchase order list</div>
                    <div>• Filter by supplier, status</div>
                    <div>• Expected delivery dates</div>
                    <div>• Generate new POs</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/procurement/pos/:id</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• PO header (supplier, status, date)</div>
                    <div>• Items with qty, price, received qty</div>
                    <div>• Receive items form (partial/full)</div>
                    <div>• Notes and delivery tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production & Inventory */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-red-50 border-b border-red-200">
              <h3 className="text-lg font-semibold text-red-900">Production & Inventory</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/production</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Production batches list</div>
                    <div>• Reservations queue</div>
                    <div>• Start/complete workflows</div>
                    <div>• Yield tracking</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/products</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Product catalog management</div>
                    <div>• Availability toggles</div>
                    <div>• Price updates</div>
                    <div>• Stock level monitoring</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/departments</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Department list</div>
                    <div>• Add/edit departments</div>
                    <div>• Color coding</div>
                    <div>• Product assignments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Management */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-pink-50 border-b border-pink-200">
              <h3 className="text-lg font-semibold text-pink-900">User Management</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/users</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• User list with roles</div>
                    <div>• Create new users</div>
                    <div>• Update user details</div>
                    <div>• Reset passwords</div>
                    <div>• Deactivate/reactivate</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">/admin/restaurants</code>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Restaurant list/create</div>
                    <div>• Assign/remove users</div>
                    <div>• Business details management</div>
                    <div>• Account status control</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 bg-indigo-50 border-b border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-900">Reports & Analytics</h3>
              <code className="text-sm font-mono text-indigo-600">/admin/reports</code>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Orders Tab:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Orders by status</div>
                    <div>• Revenue trends</div>
                    <div>• Customer breakdown</div>
                    <div>• CSV export</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">POs Tab:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Open/received counts</div>
                    <div>• Supplier performance</div>
                    <div>• Overdue tracking</div>
                    <div>• CSV export</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Stock Tab:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Low stock alerts</div>
                    <div>• Expiring items</div>
                    <div>• Movement velocity</div>
                    <div>• CSV export</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">AR Tab:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Aging buckets</div>
                    <div>• Overdue totals</div>
                    <div>• Payment trends</div>
                    <div>• CSV export</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Design Principles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Screen Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile First</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Design for phone screens primarily</div>
              <div>• Large touch targets (44px minimum)</div>
              <div>• Thumb-friendly navigation</div>
              <div>• Minimal horizontal scrolling</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Actions</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• One primary action per screen</div>
              <div>• Avoid nested modals</div>
              <div>• Clear visual hierarchy</div>
              <div>• Obvious next steps</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast Loading</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• SSR-safe components</div>
              <div>• Stable IDs (no Math.random)</div>
              <div>• Optimistic updates</div>
              <div>• Skeleton loading states</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Implementation Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Architecture</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Next.js App Router:</strong> File-based routing with layouts</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Tailwind CSS:</strong> Utility-first styling with custom components</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>React Context:</strong> Auth state and user permissions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>SWR/React Query:</strong> Data fetching and caching</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend Integration</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span><strong>JWT Authentication:</strong> Access + refresh token flow</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span><strong>Role-based routing:</strong> Redirect based on user_type</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span><strong>API client:</strong> Centralized error handling</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span><strong>Real-time updates:</strong> WebSocket for order status</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
