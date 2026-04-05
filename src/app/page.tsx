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

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
          <Link href="/signup" className="bg-[#d95e14] hover:bg-[#b84f0f] text-white px-6 py-2 rounded-md transition-colors shadow-[0_4px_14px_0_rgba(217,94,20,0.39)]">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center mt-16 md:mt-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide uppercase leading-tight">
          INSTITUTIONAL GRADE <br /> MARKET INTELLIGENCE
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
          Leverage Advanced Data, Trading Technology, and <br className="hidden md:block" /> Actionable Insights for Capital Markets.
        </p>
        <Link href="/signup" className="mt-10 bg-[#d95e14] hover:bg-[#b84f0f] text-white px-10 py-3.5 rounded-md font-medium transition-colors shadow-[0_4px_20px_0_rgba(217,94,20,0.4)]">
          Get Started
        </Link>
      </main>

      {/* Dashboard Mockup Sheet */}
      <div className="relative z-20 w-full max-w-5xl mx-auto mt-20 px-4 md:px-8 flex-1 flex flex-col">
        <div className="w-full flex-1 bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-t-xl overflow-hidden flex flex-col shadow-2xl min-h-[400px]">
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/20">
            <div className="flex items-center gap-4">
              <div className="w-10 flex justify-center">
                <svg width="10" height="14" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L10 10L2 18" stroke="#d95e14" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300">Dashboard</span>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
            </div>
          </div>

          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-14 border-r border-white/5 bg-black/20 flex flex-col items-center py-4 gap-6 text-gray-600">
              <svg width="18" height="18" fill="none" stroke="#d95e14" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 relative">
              <h2 className="text-sm font-semibold text-gray-200 mb-6">Trade setups</h2>
              
              <div className="space-y-1 relative z-10">
                {/* Row 1: AAPL */}
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 w-[20%]">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs"></div>
                    <div>
                      <div className="text-sm font-semibold text-white">AAPL</div>
                      <div className="text-xs text-gray-500">Stocks</div>
                    </div>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-12 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-8 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[20%] h-8 pr-4">
                    <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#10b981] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 15 L20 10 L40 18 L60 5 L80 10 L100 2" /></svg>
                  </div>
                  <div className="w-[15%] flex justify-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10">READY NOW</span>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-16 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-12 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[15%] text-right text-xs font-medium text-[#d95e14] cursor-pointer hover:text-[#b84f0f] transition-colors">
                    Get Started
                  </div>
                </div>

                {/* Row 2: TSSH */}
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 w-[20%]">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs"></div>
                    <div>
                      <div className="text-sm font-semibold text-white">TSSH</div>
                      <div className="text-xs text-gray-500">Brand</div>
                    </div>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-12 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-8 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[20%] h-8 pr-4">
                    <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#ef4444] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 5 L20 12 L40 8 L60 18 L80 12 L100 20" /></svg>
                  </div>
                  <div className="w-[15%] flex justify-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10">READY NOW</span>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-16 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-12 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[15%] text-right text-xs font-medium text-[#d95e14] cursor-pointer hover:text-[#b84f0f] transition-colors">
                    Get Started
                  </div>
                </div>

                {/* Row 3: TSLA */}
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <div className="flex items-center gap-3 w-[20%]">
                    <div className="w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center font-bold text-xs">T</div>
                    <div>
                      <div className="text-sm font-semibold text-white">TSLA</div>
                      <div className="text-xs text-gray-500">TSLA</div>
                    </div>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-12 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-8 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[20%] h-8 pr-4">
                    <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#ef4444] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 8 L20 10 L40 18 L60 12 L80 16 L100 8" /></svg>
                  </div>
                  <div className="w-[15%] flex justify-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10">READY NOW</span>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-16 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-12 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[15%] text-right text-xs font-medium text-[#d95e14] cursor-pointer hover:text-[#b84f0f] transition-colors">
                    Get Started
                  </div>
                </div>
                
                {/* Row 4: BTCSSD */}
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3 w-[20%]">
                    <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-white flex items-center justify-center font-bold text-xs">B</div>
                    <div>
                      <div className="text-sm font-semibold text-white">BTCSSD</div>
                      <div className="text-xs text-gray-500">Crypto</div>
                    </div>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-12 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-8 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[20%] h-8 pr-4">
                    <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#10b981] fill-none stroke-[1.5]" strokeLinecap="round" strokeLinejoin="round"><path d="M0 12 L20 15 L40 5 L60 8 L80 2 L100 10" /></svg>
                  </div>
                  <div className="w-[15%] flex justify-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-[#10b981] border border-[#10b981]/30 bg-[#10b981]/10">READY NOW</span>
                  </div>
                  <div className="w-[15%]">
                    <div className="h-2 w-16 bg-white/10 rounded-sm mb-1.5"></div>
                    <div className="h-2 w-12 bg-white/5 rounded-sm"></div>
                  </div>
                  <div className="w-[15%] text-right text-xs font-medium text-[#d95e14] cursor-pointer hover:text-[#b84f0f] transition-colors">
                    Get Started
                  </div>
                </div>
              </div>

              {/* Fade out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
