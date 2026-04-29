# ZEEPACK

Premium custom packaging website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Getting started

1. Open the project folder:

```bash
cd /Users/sajjadahmad/Documents/zeepack
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
cp .env.example .env.local
```

Then add:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

Form submissions are configured to send to:

- `shanzeeshan571@gmail.com`

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project structure

```text
zeepack/
├── public/
│   └── images/
│       ├── industries/
│       ├── mockups/
│       └── packaging/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── industries/
│   │   │   └── [slug]/
│   │   ├── products/
│   │   │   └── [slug]/
│   │   ├── quote/
│   │   ├── sustainability/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   └── lib/
├── package.json
└── README.md
```

## Main pages

- `/` Homepage
- `/about`
- `/products`
- `/products/[slug]`
- `/industries`
- `/industries/[slug]`
- `/sustainability`
- `/quote`
- `/contact`

## Notes

- Contact, lead, and quote forms now send through the Resend API route when env vars are configured.
- `RESEND_FROM_EMAIL` should use a verified sender/domain in production for best deliverability.
- Metadata, sitemap, robots, FAQ schema, and organization schema are already structured for SEO.
