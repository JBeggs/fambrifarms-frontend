### Backend Plan (Endpoints and Integrity)

- Auth & Roles
  - Return user_type, roles[], restaurant_roles[]; admin endpoints for users and restaurants

- Orders & Wishlist
  - Enforce order-day; assign supplier/internal; return annotated lines; expose created_by

- Procurement
  - Generate POs from order; CRUD PO; receive PO (partial/complete); link to OrderItem
  - Auto-supplier assignment improvements (lead time, preferred supplier, price caps)

- Production
  - ProductionReservation model; schedule and fulfill; update finished inventory
  - Expose batches and reservations for reporting

- Inventory & Alerts
  - Keep stock movements as audit; alerts endpoints (acknowledge)

- Invoicing
  - Generate from confirmed orders; simple status machine; PDFs later

- Reporting
  - Summary endpoints with date filters; paginate large lists; CSV export endpoints

- Ops & Security
  - Idempotent conversion/generation endpoints; rate limiting; input validation; logging
