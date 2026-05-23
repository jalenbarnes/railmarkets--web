import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden font-sans selection:bg-[#d95e14] selection:text-white">
      {/* Ambient Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#d95e14] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 w-full max-w-7xl mx-auto py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
          RailMarkets
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L10 10L2 18" stroke="#d95e14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/feed" className="hover:text-white transition-colors">Live Feed</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            Markets <span className="text-[10px]">▼</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
            Social <span className="text-[10px]">▼</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/sign-in" className="text-gray-400 hover:text-white transition-colors">Login</Link>
          <Link href="/sign-up" className="bg-[#d95e14] hover:bg-[#b84f0f] text-white px-6 py-2 rounded-md transition-colors shadow-[0_4px_14px_0_rgba(217,94,20,0.39)]">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center mt-16 md:mt-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide uppercase leading-tight">
          STAY ON TRACK WITH <br /> REAL TIME MARKET INSIGHTS
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
          Leverage proprietary AI-driven insights derived from real-time <br className="hidden md:block" /> market data across trusted global sources.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Link href="/sign-up" className="bg-[#d95e14] hover:bg-[#b84f0f] text-white px-10 py-3.5 rounded-md font-medium transition-colors shadow-[0_4px_20px_0_rgba(217,94,20,0.4)]">
            Get Started
          </Link>
        </div>
      </main>

      {/* Live Feed Mockup Sheet */}
      <div className="relative z-20 w-full max-w-6xl mx-auto mt-20 px-4 md:px-8 flex-1 flex flex-col">
        <div className="w-full flex-1 bg-[#141414]/90 backdrop-blur-xl border border-white/10 rounded-t-xl overflow-hidden flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] min-h-[400px]">
          
          {/* Top Bar */}
          <div className="flex items-center px-6 py-4 border-b border-white/5 bg-black/40">
            <div className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d95e14]"></span>
              Live Feed
            </div>
          </div>

          <div className="flex-1 p-6 md:p-8 relative">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Market Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></div>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">S&P</div>
                      <div>
                        <div className="text-sm font-bold text-white">SPX</div>
                        <div className="text-xs text-gray-400">S&P 500 Index</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-12 mb-4 w-full">
                    <svg viewBox="0 0 100 30" className="w-full h-full stroke-[#10b981] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 25 L20 20 L40 28 L60 15 L80 20 L100 5" /></svg>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 bg-white/5">READY NOW</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></div>
                      <div className="w-8 h-8 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center font-bold text-xs">NDQ</div>
                      <div>
                        <div className="text-sm font-bold text-white">NDX</div>
                        <div className="text-xs text-gray-400">NASDAQ 100</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-12 mb-4 w-full">
                    <svg viewBox="0 0 100 30" className="w-full h-full stroke-[#10b981] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 20 L20 25 L40 15 L60 22 L80 10 L100 8" /></svg>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 bg-white/5">READY ON PULLBACK</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></div>
                      <div className="w-8 h-8 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold text-xs">DOW</div>
                      <div>
                        <div className="text-sm font-bold text-white">DJI</div>
                        <div className="text-xs text-gray-400">Dow Jones Industrial</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-12 mb-4 w-full">
                    <svg viewBox="0 0 100 30" className="w-full h-full stroke-[#ef4444] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 10 L20 15 L40 8 L60 25 L80 20 L100 28" /></svg>
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 bg-white/5">MONITOR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-4 mb-4">
                <h2 className="text-xl font-semibold text-white">Execution Plans</h2>
                <span className="text-[#d95e14] text-xs font-medium cursor-pointer hover:text-[#b84f0f] transition-colors hover:underline">Upgrade for detailed execution plans</span>
              </div>
              
              <div className="border border-white/10 rounded-lg bg-black/20 overflow-hidden">
                <div className="flex items-center justify-between py-3 px-4 border-b border-white/5">
                  <div className="flex items-center gap-4 w-[40%]">
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px]">S&P</div>
                    <div className="text-sm font-bold text-white">SPX</div>
                    <div className="text-sm text-gray-400 truncate">S&P 500 Index</div>
                  </div>
                  <div className="w-[30%] flex gap-4 opacity-30 blur-sm">
                    <div className="h-3 w-16 bg-white rounded-sm"></div>
                    <div className="h-3 w-16 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-[10%] flex justify-end opacity-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 px-4">
                  <div className="flex items-center gap-4 w-[40%]">
                    <div className="w-6 h-6 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center font-bold text-[10px]">NDQ</div>
                    <div className="text-sm font-bold text-white">NDX</div>
                    <div className="text-sm text-gray-400 truncate">NASDAQ 100</div>
                  </div>
                  <div className="w-[30%] flex gap-4 opacity-30 blur-sm">
                    <div className="h-3 w-16 bg-white rounded-sm"></div>
                    <div className="h-3 w-16 bg-white rounded-sm"></div>
                  </div>
                  <div className="w-[10%] flex justify-end opacity-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent z-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
