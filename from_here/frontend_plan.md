### Frontend Plan (Clarity First)

Short-term (current app)
- Keep UI minimal: clean tables/cards; avoid complex modals
- Add supplier override dropdown per line on confirm page; grouped summary by supplier
- Admin: PO list/detail/receive; simple filters; CSV export

Mid-term (rewrite)
- New app structure based on roles and tasks (Dashboard → Orders → Procurement → Production → Reporting)
- Shared components: DataTable, SummaryCard, FormField; design tokens for consistency
- SSR-friendly components; stable IDs; no random IDs during render

Principles
- One clear action per screen; explain the “why” and “what happens next”
- Async states explicit (loading/saving/errors)
- Use from_here docs to map screens to backend endpoints
