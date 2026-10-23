# SiyaSphere Marketing Website

A modern, responsive marketing website for SiyaSphere - a B2B SaaS services company specializing in GTM Tech Integration, Marketing Automation, RevOps, and AI-driven workflows.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
siyasphere-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── solutions/         # Solutions overview + /solutions/[slug] pages
│   ├── how-it-works/      # How It Works page
│   ├── case-studies/      # Case Studies overview + /case-studies/[slug] pages
│   ├── gtm-stack/         # Modern GTM Stack guide
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # UI components (Button, Card, etc.)
│   └── sections/         # Page sections
├── lib/                   # Content and SEO data
│   ├── caseStudies.ts    # All case studies (grid, pages, sitemap, llms.txt)
│   ├── solutions.ts      # All solutions (grid, pages, footer, sitemap, llms.txt)
│   └── seoConfig.ts      # Site metadata and structured data
└── public/               # Static assets, robots.txt, llms.txt
```

## Features

- Responsive design for all devices
- SEO-optimized structure
- High performance with Next.js optimizations
- Accessible components
- Modern SaaS design aesthetic

## Environment Variables

Set these in Vercel (Project → Settings → Environment Variables):

| Variable | Purpose |
|---|---|
| `ZOHO_SMTP_HOST`, `ZOHO_SMTP_PORT`, `ZOHO_SMTP_USER`, `ZOHO_SMTP_PASSWORD` | Sending contact form emails |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional; Google Search Console is verified via DNS |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional; Bing Webmaster Tools meta tag |

## Adding Content

- **Case study:** add an entry to `lib/caseStudies.ts`. The page, sitemap entry, and grid card are generated automatically.
- **Solution:** add an entry to `lib/solutions.ts`. Reference related case studies by slug in `caseStudySlugs`.
