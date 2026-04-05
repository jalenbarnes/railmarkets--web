import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col relative overflow-hidden">
      {/* Subtle Ambient Orange Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--brand-orange)] opacity-[0.03] blur-[150px] rounded-full"></div>
      </div>

      {/* Transparent Navigation Bar */}
      <nav className="relative z-10 w-full py-6 px-8 flex justify-between items-center bg-transparent">
        <div className="font-bold text-xl tracking-tight text-white uppercase flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-4 h-4 bg-[var(--brand-orange)] rounded-sm"></div>
          RailMarkets
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <Link href="/feed" className="hover:text-white transition-colors">Live Feed</Link>
          <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
          <Link href="/social" className="hover:text-white transition-colors">Social</Link>
        </div>
        <div className="flex gap-6 items-center text-sm font-medium">
          <Link href="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
          <Link href="/signup" className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] text-white px-5 py-2.5 rounded-sm transition-colors shadow-[0_0_15px_rgba(217,94,20,0.3)]">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase max-w-4xl leading-tight">
          Institutional Grade <br /> Market Intelligence
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl font-light">
          Structured trade setups, real-time market catalysts, and execution logic delivered in a format built for the modern trader.
        </p>
        <Link href="/signup" className="mt-10 bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] text-white px-8 py-4 rounded-sm text-lg font-bold transition-colors shadow-[0_0_20px_rgba(217,94,20,0.4)]">
          Get Started
        </Link>
      </main>

      {/* Partially Revealed 'Live Feed' Frosted Sheet */}
      <div className="relative z-20 w-full max-w-5xl mx-auto -mt-16 sm:-mt-24 md:-mt-32 px-4 pb-0 flex flex-col items-center">
        <div className="w-full glass-panel rounded-t-2xl p-6 border-b-0 shadow-2xl overflow-hidden relative" style={{ height: "280px" }}>
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[var(--brand-border)]">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Live Feed</h3>
            <span className="text-[var(--brand-orange)] text-xs font-semibold">Live • US Session</span>
          </div>

          {/* Dummy Rows */}
          <div className="space-y-4">
            {/* Row 1 */}
            <div className="flex items-center justify-between text-sm py-2">
              <div className="flex items-center gap-3 w-1/4">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold">N</div>
                <span className="font-bold text-white">NVDA</span>
              </div>
              <div className="w-1/4 h-6 flex items-center">
                {/* Fake Sparkline Green */}
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-[var(--status-green)] fill-none stroke-2 opacity-80" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 15 L20 10 L40 18 L60 5 L80 10 L100 2" />
                </svg>
              </div>
              <div className="w-1/4 flex justify-end">
                <span className="bg-[rgba(16,185,129,0.1)] text-[var(--status-green)] px-3 py-1 rounded-full text-xs font-bold border border-[rgba(16,185,129,0.2)]">READY NOW</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-between text-sm py-2">
              <div className="flex items-center gap-3 w-1/4">
                <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold">A</div>
                <span className="font-bold text-white">AMD</span>
              </div>
              <div className="w-1/4 h-6 flex items-center">
                {/* Fake Sparkline Red */}
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-[var(--status-red)] fill-none stroke-2 opacity-80" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M0 5 L20 8 L40 2 L60 15 L80 10 L100 18" />
                </svg>
              </div>
              <div className="w-1/4 flex justify-end">
                <span className="bg-[rgba(245,158,11,0.1)] text-[var(--status-yellow)] px-3 py-1 rounded-full text-xs font-bold border border-[rgba(245,158,11,0.2)]">READY ON PULLBACK</span>
              </div>
            </div>

            {/* Fade Out Gradient Cover */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--brand-glass)] to-transparent z-10 pointer-events-none rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
