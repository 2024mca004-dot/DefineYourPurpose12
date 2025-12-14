# Data Files (Legacy)

**Note:** These files contain static data that was used during initial development.

The application now fetches all data from the backend API:
- Companies → `GET /api/companies`
- Plans → `GET /api/plans`
- Listings → `GET /api/listings`
- Blog → `GET /api/blog`

These files are kept for reference but are **not used** in the current application.

The actual data is stored in `server/storage.ts`.
