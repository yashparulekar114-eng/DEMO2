# HireFlow ATS

Applicant tracking for recruiters and candidates. This repository currently includes a Tailwind landing page and Clerk authentication. The product dashboard is intentionally not built yet.

## Stack

- Next.js 15 App Router
- Tailwind CSS
- Clerk (`@clerk/nextjs`)

## Setup

```bash
npm install
cp .env.example .env.local
```

Development Clerk keys are created by `clerk init`. To use your own Clerk application, set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in `.env.local`.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use **Log In** on the landing page to reach Clerk sign-in.
