### Development Plan (Next Steps)

1) Procurement (done)
- App, models (SupplierPurchaseOrder, SupplierPOItem), endpoints to generate POs, update, receive
- Backend auto-assign supplier/internal on order creation

2) Production Reservations (started)
- Model + endpoints added: /api/production/reservations/
- Create per internal-fulfillment line; expose ETAs in UI

3) Admin Endpoints
- /api/admin/users (list/create/update/reset password)
- /api/admin/restaurants (create/assign/remove users)

4) Frontend Enhancements
- Supplier override per line during order confirmation; grouped supplier summary
- Admin POs screens (list/detail/receive)

5) Audit & Notifications
- Audit trail for key actions; email/webhook notifications for POs and order status

6) Reliability & Security
- Rate limiting; stricter permissions; input validation; robust error payloads
