### Auth Plan (Placement and Usage)

Endpoints (backend)
- POST /api/auth/login/
- POST /api/auth/register/
- POST /api/auth/token/refresh/
- GET  /api/auth/profile/ (returns user_type, roles[], restaurant_roles[])

Placement (new frontend)
- Public: `/login`, `/register`
- After login:
  - Restaurant users → `/dashboard` (wishlist, recent orders) with CTA to order on Tue/Fri
  - Staff/admin → `/admin/dashboard` (KPIs, queues)

Usage rules
- JWT store: access in memory/localStorage; refresh token persisted; refresh transparently on 401
- Guarded routes: staff/admin pages require `user_type` and/or roles; restaurant pages require authenticated `user_type='restaurant'`
- Multi-user restaurants: allow multiple users (chef/manager/owner) under same restaurant account

Global UI
- Top nav shows login/register when logged out; user menu when logged in with logout action
- Error messages: clear invalid credentials; rate limit feedback if configured

Minimal UI screens
- Login: email/password; link to register; forgot/reset handled by staff for now
- Register (restaurant): email, names, phone, business info
