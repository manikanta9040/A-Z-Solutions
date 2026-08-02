# Conference Management

Full-stack conference-management application, organized as an npm workspace.

## Structure

- `client/` — React and Vite frontend. Application code is in `client/src/`.
- `server/` — Express API and database integration.
- `database/` — SQL schema.

## Run locally

```bash
npm install
mysql -u root -proot < database/schema.sql
npm run dev
```

The API runs on `http://localhost:5001` because port 5000 is commonly used by macOS AirTunes.

Run a single service with `npm run client` or `npm run server`.

## Default admin account

After applying `database/schema.sql`, sign in at `/admin/login` with:

- Email: `admin@summitsphere.com`
- Password: `admin123`
