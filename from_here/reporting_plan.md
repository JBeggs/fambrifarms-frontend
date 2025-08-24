### Reporting Plan (Simple, High-Signal)

Phase 1 (operational)
- Orders dashboard: counts by status, revenue by day/week, who placed orders
- Supplier PO dashboard: open/partial/received counts; overdue POs
- Stock health: low stock list, expiring soon, production needed
- Customer activity: top customers, order frequency; failed/cancelled orders

Phase 2 (financial)
- Invoices: AR aging (current/30/60/90), overdue totals, payment trends
- Credits/returns impact; gross margin by product/department (simple average to start)

Phase 3 (performance)
- Supplier performance: lead times, fill rate, price trends
- Production performance: yields vs. plan, waste rates, cost per unit trend

Delivery
- Backend: endpoints returning aggregates/summaries; minimal inputs (date range, status)
- Frontend: simple tables and trend spark-lines; CSV export
