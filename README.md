# NexSal website

NexSal's public website, contact system, and private inquiry inbox.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Admin inbox

Copy `.env.example` to `.env.local` and replace every value before running the site. `AUTH_SECRET` must contain at least 32 random characters.

The login route is intentionally unlisted in public navigation:

```text
/admin/login
```

Successful authentication grants access to `/admin/inbox` through an HTTP-only, signed, eight-hour session cookie. Contact submissions are stored in `.data/inbox.json`, which is private and ignored by Git.

The filesystem inbox is suitable for a persistent Node server. Serverless platforms such as Vercel do not provide durable writable filesystems; replace `utilities/server/inbox.ts` with a managed database adapter before deploying there.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
