# Payload Portfolio

Personal portfolio built with Next.js App Router, Payload CMS, PostgreSQL, TypeScript, and Tailwind CSS 4.

## Local development

Use Node.js 24.22.1 or newer in the 24.x release line and pnpm 11.24.0.
The `packageManager` field pins pnpm; use Corepack if available.

```sh
cp .env.example .env
```

Set `PAYLOAD_SECRET` to a random secret, for example using `openssl rand -hex 32`.
The example database URL matches the PostgreSQL credentials in `.env.example`.
If you change those credentials, update `DATABASE_URL` as well.

```sh
pnpm install
docker compose up -d postgres
pnpm dev
```

- Website: http://localhost:3000
- CMS: http://localhost:3000/admin — create the first administrator on initial setup.

Docker Compose runs PostgreSQL only. Run Next.js locally with `pnpm dev`.
The homepage does not require a database connection; CMS routes do.

## Structure

```text
src/
  app/
    (frontend)/       Website routes, root layout, and Tailwind entry point
    (payload)/        Payload admin and API routes
  collections/       Payload collection schemas (Users, Media)
  payload.config.ts  CMS and PostgreSQL configuration
  payload-types.ts   Generated Payload types
tests/
  e2e/               Browser tests
  int/               Payload integration tests
```

Add shared frontend components under `src/components/ui` and `src/components/layout`
when needed. Keep route-specific components next to their route. Add shared utilities
under `src/lib` as they become necessary; avoid empty placeholder modules.

The website and CMS share one Next.js application. Payload configuration stays in
`src/payload.config.ts`; there is no separate CMS service or Nx workspace.

## Styling

Use Tailwind utility classes for the website. Its CSS entry point is
`src/app/(frontend)/globals.css`, imported only by the frontend layout.
PostCSS is configured in `postcss.config.mjs`. Tailwind 4 uses CSS-first configuration;
add design tokens with `@theme` in `globals.css` when needed.

Payload retains its own styles. Use `src/app/(payload)/custom.scss` for intentional
admin customizations rather than importing the frontend stylesheet.

## Commands

| Command                   | Purpose                                                  |
| ------------------------- | -------------------------------------------------------- |
| `pnpm dev`                | Start development server                                 |
| `pnpm build`              | Create production build                                  |
| `pnpm start`              | Serve production build                                   |
| `pnpm lint`               | Check ESLint rules                                       |
| `pnpm typecheck`          | Check TypeScript types                                   |
| `pnpm format`             | Format source files                                      |
| `pnpm format:check`       | Check formatting                                         |
| `pnpm generate:types`     | Regenerate types after changing Payload schemas          |
| `pnpm generate:importmap` | Regenerate Payload admin component imports               |
| `pnpm test:int`           | Run integration tests (requires PostgreSQL)              |
| `pnpm test:e2e`           | Run all browser tests (requires PostgreSQL and Chromium) |

Install the test browser once with `pnpm exec playwright install chromium`.
Run the frontend smoke test alone with:

```sh
pnpm test:e2etests/e2e/frontend.e2e.spec.ts
```

Admin tests create and delete a test user. Use a dedicated test database for the
full test suite; do not point tests at a production database.

## Production

`next.config.ts` enables standalone output for the Dockerfile. Build the image with
`docker build -t payload-portfolio .` and supply `DATABASE_URL` and `PAYLOAD_SECRET`
at runtime. Environment files are excluded from the Docker build context.

Persist `/app/media` when running uploads in a container, or configure external
storage before deploying. Create and apply Payload database migrations as part of
your production release process; development schema synchronization is not a
production migration strategy.
