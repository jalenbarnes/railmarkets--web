# RailMarkets Web MVP

Initial RailMarkets web app scaffold built with Next.js + TypeScript + Tailwind.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Current MVP scope
- RailMarkets branded landing/feed page
- Strict palette: black / grey / orange
- Centered `LIVE FEED (US SESSION)` header
- Pricing tiers: FREE / $25 BASE / $50 MID / $100 TOP
- Featured setup widget with subtle `Open Chart` action
- Session Snapshot with Top Watchlist + Top Stories
- Chart modal scaffold:
  - Link out to TradingView
  - Placeholder for in-app widget integration next sprint

## Local run
```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Production build check
```bash
npm run build
npm start
```

## Vercel deploy
1. Push this repo to GitHub.
2. In Vercel, import the repository.
3. Add domains:
   - railmarkets.com
   - www.railmarkets.com
4. If nameservers are already set to Vercel, DNS will be managed in Vercel.

## Next sprint
- Add auth (Clerk or Supabase)
- Add Stripe subscriptions by tier
- Add feed API + persistence
- Replace chart modal placeholder with TradingView embeddable widget
- Add role/tier access gates for feature visibility
