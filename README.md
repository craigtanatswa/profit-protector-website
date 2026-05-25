# Profit Protector Website

Official marketing website for [Profit Protector](https://play.google.com/store/apps/details?id=com.profitprotector) — a mobile business management app built for small shops and SMEs. Track sales, inventory, customers, and profits in real time, all from your pocket.

## About

This repository contains the public-facing landing site for the Profit Protector Android app. The site introduces the product, highlights key features, showcases app screenshots, and links visitors to download the app on Google Play.

**Live pages**

| Route | Description |
| --- | --- |
| `/` | Landing page with features, benefits, app preview, and download CTAs |
| `/privacy` | Privacy policy for the Profit Protector mobile application |

## Features Highlighted

- Real profit visibility on every sale
- Smart inventory management with low-stock alerts
- Customer and credit tracking
- Detailed reports with PDF and CSV export
- Offline-first functionality with automatic sync
- Multi-currency support (USD and local currency)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI + Lucide icons)
- [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/profit-protector-website.git
cd profit-protector-website
npm install
```

This project includes both `package-lock.json` and `pnpm-lock.yaml`. Use whichever package manager you prefer — just stay consistent within your environment.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout and site metadata
│   ├── page.tsx          # Landing page
│   ├── privacy/
│   │   └── page.tsx      # Privacy policy
│   └── globals.css       # Global styles and Tailwind theme
├── components/
│   └── ui/               # shadcn/ui components
├── hooks/                # Custom React hooks
├── lib/                  # Shared utilities
├── public/               # Static assets (icons, etc.)
└── styles/               # Additional styles
```

## Deployment

This site is designed to deploy on [Vercel](https://vercel.com/) with zero configuration. Vercel Analytics is enabled automatically in production builds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Links

- **Google Play:** [Download Profit Protector](https://play.google.com/store/apps/details?id=com.profitprotector)
- **Support:** [support@profitprotector.app](mailto:support@profitprotector.app)

## License

All rights reserved. © Profit Protector
