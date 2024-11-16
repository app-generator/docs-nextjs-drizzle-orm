# [Nextjs With Drizzle ORM](https://app-generator.dev/docs/technologies/nextjs/drizzle-orm.html)

This quick guide demonstrates the use of Drizzle with server components in Next.js. We breeze past the initial steps for spinning up a local PostgreSQL server and starting a Next.js app.

> 👉 [How to use Drizzle with server components in Next.js.](https://app-generator.dev/docs/technologies/nextjs/drizzle-orm.html) - Complete Documentation

<br />

## Spin Up a Local Postgres Instance

First, install PostgreSQL locally and start a running database instance named `drizzle_nextjs` using either `psql` or [pgAdmin](https://www.pgadmin.org/docs/). If you need a refresher, please refer to this [YouTube tutorial](https://www.youtube.com/watch?v=KuQUNHCeKCk).

### PostgreSQL Credentials

Have the credentials of your Postgres instance ready, in a `.env` file stored at the root. It should follow this format:

```bash
DB_HOST=localhost
DB_PORT_NO=5432
DB_USERNAME=postgres
DB_PASSWORD="YOUR_PASSWORD"
DB_NAME=drizzle_nextjs
DB_URL=postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT/${DB_NAME}
```

## Application Setup

1. Clone this repo from [here](https://github.com/app-generator/docs-nextjs-drizzle-orm).
2. `cd` in and Install dependencies:

```bash
npm i
```

3. Generate Drizzle migration files:

```bash
npm run db:generate
```

4. Run database migrations:

```bash
npm run db:migrate
```

5. Seed database:

```bash
npm run db:seed
```

6. Run the Next.js server:

```bash
npm run dev
```

Visit `http://localhost:3000/`. The app should be running.

---
[Nextjs With Drizzle ORM](https://app-generator.dev/docs/technologies/nextjs/drizzle-orm.html) -  Free sample provided by [App Generator](https://app-generator.dev)
