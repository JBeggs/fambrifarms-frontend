### High-Level Data Model

- **User** (id, email, first_name, last_name, phone, user_type, is_verified)
- **Restaurant** (id, name, business details)
  - has many Users (roles: chef, manager)
  - has many Orders
- **Department** (id, name, color, is_active)
- **Product** (id, name, description, department_id, price, unit, is_active)
  - inventory: available_quantity, reserved_quantity, reorder_level, minimum_level
- **Wishlist** (id, user_id/restaurant_id, items[])
- **Order** (id, order_number, restaurant_id, created_by_user_id, status, items[])
- **OrderItem** (id, order_id, product_id, quantity, price, total)
- **Invoice** (id, order_id, totals, status, due_date)
- **Supplier** (id, name, contacts)
  - **SupplierProduct** (id, supplier_id, product_id, supplier_price, stock_quantity, is_available)
- **Production**
  - **Recipe** (id, product_id, ingredients[]: raw_material_id, quantity)
  - **ProductionBatch** (id, recipe_id, start/end, yield)
- **Inventory Movements** (id, product_id, movement_type, quantity, reference_type, reference_id)
- **Alerts** (id, alert_type, product_id?, message, severity, is_resolved)
