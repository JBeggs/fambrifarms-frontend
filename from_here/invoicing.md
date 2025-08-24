### Invoicing Lifecycle

- **Invoice Creation**
  - Generated from confirmed orders; captures customer, items, unit prices, VAT, totals.
- **Terms & Taxes**
  - Terms: Net 30 (from API index). VAT: 15%.
- **Status**
  - draft → sent → paid → partially_paid → overdue → void
- **Delivery & Documents**
  - Send invoice PDF/email to restaurant contacts.
- **Reconciliation**
  - Payments recorded against invoice; credits/returns adjust balance and stock.
