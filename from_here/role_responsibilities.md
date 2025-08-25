### Detailed Role Responsibilities and Maintenance Tasks

This document describes what each role does to keep the system running smoothly and accurately, day-to-day and week-to-week. Staff can have multiple roles; responsibilities stack.

- CEO
  - Reviews: KPIs dashboards (sales, fulfillment rate, stock health, supplier performance)
  - Approvals: large price overrides, high-value POs, large credits/voids
  - Cadence: weekly strategy review; monthly supplier performance review
  - Maintenance: ensures policy thresholds and approval chains are set (with Manager)

- Manager
  - Orders: approves/confirms customer orders; oversees delivery scheduling; resolves escalations
  - Procurement: reviews auto-generated POs, adjusts supplier choices if needed, sends and tracks POs
  - Production: prioritizes internal production; balances stock vs. supplier procurement
  - Catalog: owns product availability, pricing updates, and department hygiene
  - Access: onboards/offboards staff and restaurant users (non-admin scope), resets passwords
  - Maintenance: daily queue checks (pending orders, low stock alerts), weekly catalog review, monthly pricing updates

- Stocktaker (Inventory Controller)
  - Stock movements: records receipts (supplier), sales (deliveries), adjustments (waste/variance)
  - Alerts: responds to low stock/expiry alerts; initiates replenishment or flags production
  - Reconciliation: cycle counts (weekly) and full counts (monthly/quarterly)
  - Maintenance: keep batch data complete (lot, expiry, quantities), ensure FIFO/weighted average integrity

- Production Lead
  - Batches: plans, starts, and completes production runs; captures actual yields and waste
  - Reservations: fulfills internal reservations (order lines marked internal), updates finished inventory
  - BOM/Recipes: updates recipes with correct yields and cost assumptions (with Manager approval)
  - Maintenance: ensure production schedule meets order demand and stock targets; report bottlenecks

- Sales/Ops
  - Customer care: verifies restaurants, assists with ordering, resolves issues/returns
  - Invoices: monitors invoice lifecycle; nudges for overdue payments; raises credits when needed
  - Communication: sends order confirmations and delivery updates; captures customer notes/preferences
  - Maintenance: keeps customer contact details accurate; monitors repeat issues

- Restaurant Users (Customers: chef, manager, owner)
  - Browsing: view products, stock status, pricing
  - Wishlist: build and maintain wishlist; prepare orders on allowed days (Mon/Thu)
  - Orders: place orders; monitor status; receive goods and report discrepancies
  - Finance: review invoices; raise disputes/returns promptly
  - Maintenance: keep restaurant account contacts current; align order timing with delivery windows

- Superuser (exclusive capabilities; oversight)
  - Governance: create/upgrade/downgrade users (including superusers), deactivate/reactivate accounts
  - Security: enforce password resets, adjust allowed origins, environment toggles
  - Financial controls: approve high-value credits, void invoices with audit
  - Data operations: export/anonymize on request, manage backups
  - Maintenance: quarterly access review; periodic policy/audit checks

Daily/Weekly Checklist (shared responsibilities)
- Daily: confirm new orders; resolve alerts; send/track POs; review production needs; update statuses
- Weekly: cycle counts; catalog cleanup; supplier follow-ups; overdue invoice review; KPI snapshot
- Monthly: price review; supplier performance review; recipe yield validation; access audit (superuser)
