### Logic Plan (Keep It Simple)

Principles
- Backend-first logic; frontend remains thin (render, inputs, navigation)
- Deterministic endpoints; minimal branching in UI
- Small number of clearly named statuses; avoid hidden magic

Key flows
- Order creation: server validates order-day; assigns supplier/internal; returns order with lines annotated
- PO generation: server groups by supplier; idempotent; receiving updates item/PO status
- Production reservations: created for internal lines; fulfilled on batch completion
- Invoicing: generated from confirmed orders; Net 30; simple status machine; no partial invoice in v1

Frontend
- Separate simple flows (wishlist → confirm → done); avoid multi-step wizards unless necessary
- Provide clear read-only summaries with light actions (override supplier, confirm order)

Backend
- Validate all assumptions; return clear error messages
- Audit important changes; idempotent endpoints for order conversions and PO generation
