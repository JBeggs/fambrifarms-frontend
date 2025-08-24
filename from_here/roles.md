### Roles and Permissions (non-admin)

Multi-role staff: a staff member can hold multiple roles simultaneously (e.g., CEO + Stocktaker). Authorization checks evaluate the union of assigned roles.

- **CEO**: read-only across all dashboards, financial summaries, supplier performance, sales, stock health. Can approve large POs, price overrides.
- **Manager**: full operational control. Create POs to suppliers, approve/confirm customer orders, schedule production, manage pricing, manage users' access (non-admin scope), resolve stock alerts.
- **Stocktaker (Inventory Controller)**: manage stock counts, record stock movements (in/out/adjustment), reconcile variances, batch expiries, mark production batches complete.
- **Production Lead**: manage recipes, start/complete production batches; monitor yields; flag shortages.
- **Sales/Ops**: manage customer accounts, verify restaurants, assist with orders, issue credits/returns.
- **Restaurant Users (Customer)**: browse products, maintain wishlist, place orders on allowed days (Tue/Fri), view order history and invoices. A restaurant can have multiple users (chef, manager) under the same account.

Access policy highlights
- Staff log in with staff/admin accounts; customers with restaurant accounts.
- Soft-deactivate any user immediately removes access; audit trails keep their actions linked.
- Password resets: staff can initiate resets for customers; managers can reset non-admin staff passwords.

Superuser-only (summary): global user management, restaurant membership control, catalog/price guardrails, procurement/production overrides, and financial voids/credits with audit.
