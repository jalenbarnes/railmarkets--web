"use client";

import { useState } from "react";

type FeedRow = {
  ticker: string;
  status: "READY ON PULLBACK" | "READY NOW" | "MONITOR";
  type: string;
  preview: string;
  updated: string;
};

const rows: FeedRow[] = [
  {
    ticker: "XLE",
    status: "READY ON PULLBACK",
    type: "ETF",
    preview: "Buy zone 62.10 · stop 60.85",
    updated: "09:41",
  },
  {
    ticker: "XOM",
    status: "READY ON PULLBACK",
    type: "US_EQUITY",
    preview: "Entry 171.60 · stop 168.90",
    updated: "09:40",
  },
  {
    ticker: "MRVL",
    status: "MONITOR",
    type: "US_EQUITY",
    preview: "Promote only on clean 5-min reclaim",
    updated: "09:38",
  },
];

const watchlist = ["XLE · READY ON PB", "XOM · MONITOR", "MRVL · MONITOR"];
const stories = [
  "Oil holds gains as supply risk persists",
  "Semis mixed after post-earnings reset",
  "Rates ease but breadth remains narrow",
];

const tierCards = [
  { title: "FREE", price: "$0", summary: "Starter access" },
  { title: "$25 BASE", price: "$25/mo", summary: "Core tools + weekly signals" },
  { title: "$50 MID", price: "$50/mo", summary: "Daily execution notes" },
  { title: "$100 TOP", price: "$100/mo", summary: "Priority alerts + full feed" },
];

export default function Home() {
  const [chartOpen, setChartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
      <header className="border-b border-[#2E2E2E] bg-black/80 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-semibold tracking-wide text-[#FF7A00]">RAILMARKETS.COM</p>
          <nav className="hidden gap-6 text-sm text-[#B3B3B3] md:flex">
            <span>LIVE FEED</span>
            <span>SESSIONS</span>
            <span>WATCHLIST</span>
            <span>PRICING</span>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-5xl">LIVE FEED (US SESSION)</h1>
          <p className="mt-2 text-sm text-[#FF7A00]">BLACK · GREY · ORANGE BRAND SYSTEM</p>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#3A3A3A] bg-[#141414] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">XOP</h2>
                <p className="text-sm text-[#B3B3B3]">ETF · ENERGY</p>
              </div>
              <span className="rounded-full bg-[#FF7A00] px-3 py-1 text-xs font-semibold text-black">
                READY NOW
              </span>
            </div>

            <p className="text-sm leading-6 text-[#D6D6D6]">
              Trade plan: buy XOP at 188.20 for current session. Stop 186.70. Targets
              191.40 / 193.00.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-xl bg-[#FF7A00] px-4 py-2 text-sm font-semibold text-black">
                View Full Setup
              </button>
              <button
                onClick={() => setChartOpen(true)}
                className="rounded-xl border border-[#3A3A3A] bg-[#232323] px-4 py-2 text-sm"
              >
                📈 Open Chart
              </button>
            </div>
          </article>

          <article className="rounded-2xl border border-[#3A3A3A] bg-[#1E1E1E] p-6">
            <h3 className="text-lg font-semibold">Session Snapshot</h3>
            <p className="mt-1 text-xs text-[#B3B3B3]">Updated 09:49 CT</p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-[#FF7A00]">Top Watchlist</p>
              <ul className="mt-2 space-y-2 text-sm text-[#D6D6D6]">
                {watchlist.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-[#FF7A00]">Top Stories</p>
              <ul className="mt-2 space-y-2 text-sm text-[#D6D6D6]">
                {stories.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-[#3A3A3A] bg-[#1E1E1E] p-5">
          <div className="grid grid-cols-6 gap-3 border-b border-[#333] pb-3 text-xs text-[#B3B3B3]">
            <span>Ticker</span>
            <span>Status</span>
            <span>Type</span>
            <span className="col-span-2">Trade Plan (Preview)</span>
            <span>Updated</span>
          </div>

          {rows.map((row) => (
            <div key={row.ticker} className="mt-3 grid grid-cols-6 gap-3 text-sm">
              <span>{row.ticker}</span>
              <span>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    row.status === "MONITOR"
                      ? "bg-[#2A2A2A]"
                      : "bg-[#CC6200] text-[#F2F2F2]"
                  }`}
                >
                  {row.status}
                </span>
              </span>
              <span>{row.type}</span>
              <span className="col-span-2 text-[#D6D6D6]">{row.preview}</span>
              <span>{row.updated}</span>
            </div>
          ))}
        </section>

        <section>
          <h2 className="mb-4 text-center text-2xl font-bold">Pricing Tiers</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {tierCards.map((tier) => (
              <div key={tier.title} className="rounded-2xl border border-[#3A3A3A] bg-[#141414] p-4">
                <p className="text-sm font-semibold text-[#FF7A00]">{tier.title}</p>
                <p className="mt-2 text-2xl font-bold">{tier.price}</p>
                <p className="mt-1 text-sm text-[#B3B3B3]">{tier.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {chartOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4">
          <div className="w-full max-w-3xl rounded-2xl border border-[#FF7A00] bg-[#111] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#FF7A00]">Chart Preview · XOP</h3>
              <button onClick={() => setChartOpen(false)} className="text-sm text-[#B3B3B3]">
                Close
              </button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <a
                href="https://www.tradingview.com/symbols/AMEX-XOP/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#FF7A00] px-4 py-3 text-center font-semibold text-black"
              >
                Open in TradingView
              </a>
              <button className="rounded-xl border border-[#3A3A3A] bg-[#232323] px-4 py-3">
                In-App Widget (Next Sprint)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
