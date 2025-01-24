# Usage

## Local Development

- Apply migrations: `npm run migrate`.
- Seed initial data: `npm run seed`.
- Drop all tables: `npm run droptables`.
- Reset database: `make run`.
- Ensure seeds have realistic data and connected points for testing.

## Deployment

- Integrate migration scripts into deployment pipelines.
- Note: `seed` and `droptable` are disabled in production.

## Version Control

- Store migration scripts and seed data in the repository.
