### Procurement Runbook

Migrations
```bash
cd /Users/jodybeggs/Documents/fambrifarms_after_meeting/backend
source venv/bin/activate
python manage.py makemigrations accounts orders procurement
python manage.py migrate
```

Generate Supplier POs from an Order
- Endpoint: POST /api/procurement/purchase-orders/generate/
- Body: { "order_id": <id> }
- Behavior: groups order items by supplier (ignores internal lines) and creates POs

View/Update a PO
- GET /api/procurement/purchase-orders/{id}/
- PATCH /api/procurement/purchase-orders/{id}/ with { status, expected_date, notes }

Receive a PO (partial allowed)
- POST /api/procurement/purchase-orders/{id}/receive/
- Body: { "items": [ { "po_item_id": X, "received_quantity": 5 } ] }
- Status auto-updates to partial/received

Notes
- Lines without supplier stay unresolved; staff can assign later
- Internal lines create production reservations (planned next)
