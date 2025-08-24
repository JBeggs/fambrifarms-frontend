### Sitemap and Screen Outlines (New Frontend)

Public
- `/login` (email, password, submit)
- `/register` (restaurant registration form)

Restaurant (authenticated, user_type='restaurant')
- `/dashboard` (CTA to order on Tue/Fri, wishlist count, recent orders)
- `/products` (browse/search)
- `/wishlist` (items, quantities, remove)
- `/orders` (list)
- `/orders/:id` (detail: status, items)
- `/confirm-order` (grouped by supplier; supplier override per line; totals; place order)

Staff/Admin (authenticated, user_type in ['staff','admin'])
- `/admin/dashboard` (KPIs: pending orders, low stock, open POs)
- `/admin/orders` (list, filters)
- `/admin/orders/:id` (detail; status changes; who placed order; supplier grouping)
- `/admin/procurement/pos` (list POs)
- `/admin/procurement/pos/:id` (detail; status; receive items)
- `/admin/production` (batches list; reservations)
- `/admin/products` (catalog; availability; price)
- `/admin/departments` (list)
- `/admin/users` (list; create; update; reset pw)
- `/admin/restaurants` (list/create; assign/remove users)
- `/admin/reports` (operational reports; CSV export)

Screen outlines
- Confirm Order
  - Table grouped by supplier
  - Columns: product, qty, price, supplier (dropdown), subtotal
  - Actions: place order; back to wishlist

- PO Detail
  - Header: supplier, status, expected date
  - Items: product, qty, price, received qty (editable receive form)
  - Actions: mark received (partial/full), save notes

- Admin Reports
  - Tabs: Orders, POs, Stock, AR
  - Filters: date range, status
  - Table + export CSV

Notes
- Keep UI minimal; avoid nested modals; show clear primary action per page
- SSR-safe components; stable IDs
