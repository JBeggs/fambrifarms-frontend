export default function ReportsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reporting Plan</h1>
        <p className="text-xl text-gray-600">
          Simple, high-signal reports to keep the business running smoothly
        </p>
      </div>

      {/* Reporting Philosophy */}
      <section className="mb-16">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Our Reporting Approach</h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  We focus on <strong>actionable insights</strong> rather than overwhelming dashboards. 
                  Each report answers a specific business question and includes CSV export for deeper analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Operational Reports */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">1</div>
          <h2 className="text-3xl font-bold text-gray-900">Phase 1: Operational Reports</h2>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Essential</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Orders Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Orders Dashboard</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Track order flow and identify bottlenecks in the fulfillment process
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-gray-700">Counts by status (pending, confirmed, delivered)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-gray-700">Revenue by day/week with trends</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-gray-700">Who placed orders (restaurant breakdown)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span className="text-gray-700">Failed/cancelled order analysis</span>
              </div>
            </div>
          </div>

          {/* Supplier PO Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Supplier PO Dashboard</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Monitor purchase orders and supplier performance
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">Open/partial/received PO counts</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">Overdue purchase orders by supplier</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">Expected delivery dates vs. actual</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">Supplier reliability scores</span>
              </div>
            </div>
          </div>

          {/* Stock Health */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Stock Health</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Prevent stockouts and minimize waste through proactive monitoring
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-gray-700">Low stock list with reorder recommendations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-gray-700">Items expiring soon (next 7 days)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-gray-700">Production needed for internal items</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">•</span>
                <span className="text-gray-700">Stock movement velocity analysis</span>
              </div>
            </div>
          </div>

          {/* Customer Activity */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Customer Activity</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand customer behavior and identify growth opportunities
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-gray-700">Top customers by order value and frequency</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-gray-700">Order frequency patterns by restaurant</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-gray-700">Failed/cancelled orders with reasons</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-gray-700">New vs. returning customer analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Financial Reports */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">2</div>
          <h2 className="text-3xl font-bold text-gray-900">Phase 2: Financial Reports</h2>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Growth</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Invoices & AR */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Invoices & AR</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Monitor cash flow and identify collection issues early
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span className="text-gray-700">AR aging (current/30/60/90 days)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span className="text-gray-700">Overdue totals by customer</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span className="text-gray-700">Payment trends and collection rates</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                <span className="text-gray-700">Credits/returns impact analysis</span>
              </div>
            </div>
          </div>

          {/* Gross Margin Analysis */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Gross Margin Analysis</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Understand profitability by product and department
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-gray-700">Gross margin by product (simple average)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-gray-700">Department profitability comparison</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-gray-700">Supplier vs. internal cost analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">•</span>
                <span className="text-gray-700">Price optimization recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Performance Reports */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">3</div>
          <h2 className="text-3xl font-bold text-gray-900">Phase 3: Performance Reports</h2>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Optimization</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Supplier Performance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Supplier Performance</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Optimize supplier relationships and identify the best partners
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-indigo-600">•</span>
                <span className="text-gray-700">Lead times: promised vs. actual delivery</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600">•</span>
                <span className="text-gray-700">Fill rate: complete vs. partial deliveries</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600">•</span>
                <span className="text-gray-700">Price trends and competitiveness</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-indigo-600">•</span>
                <span className="text-gray-700">Quality issues and return rates</span>
              </div>
            </div>
          </div>

          {/* Production Performance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Production Performance</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Improve efficiency and reduce waste in internal production
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span className="text-gray-700">Yields vs. plan by recipe and batch</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span className="text-gray-700">Waste rates and cost impact</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span className="text-gray-700">Cost per unit trends over time</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span className="text-gray-700">Production capacity utilization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Delivery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Reports Are Delivered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Implementation</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Endpoints returning aggregates and summaries</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Minimal inputs (date range, status filters)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Optimized queries with proper indexing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Caching for frequently accessed reports</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Experience</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Simple tables with clear column headers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Trend spark-lines for key metrics</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>One-click CSV export functionality</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Mobile-responsive design for phone access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Access by Role */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Report Access by Role</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">CEO</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• All financial reports</div>
              <div>• High-level operational summaries</div>
              <div>• Supplier performance trends</div>
              <div>• Customer growth metrics</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Manager</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• All operational reports</div>
              <div>• Stock health and alerts</div>
              <div>• PO and supplier management</div>
              <div>• Customer activity details</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Staff Roles</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Reports relevant to their function</div>
              <div>• Stocktaker: inventory and stock health</div>
              <div>• Production: batch performance</div>
              <div>• Sales: customer activity and AR</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
