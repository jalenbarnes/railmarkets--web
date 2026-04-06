import { redirect } from 'next/navigation'
import { getAuthContext } from '@/lib/auth'

const marketOpportunities = [
  {
    ticker: 'SPX',
    name: 'S&P 500 Index',
    status: 'READY NOW',
    accent: 'bg-white text-black',
    sparkClass: 'stroke-[#10b981]',
    path: 'M0 25 L20 20 L40 28 L60 15 L80 20 L100 5',
  },
  {
    ticker: 'NDX',
    name: 'NASDAQ 100',
    status: 'READY ON PULLBACK',
    accent: 'bg-[#0ea5e9] text-white',
    sparkClass: 'stroke-[#10b981]',
    path: 'M0 20 L20 25 L40 15 L60 22 L80 10 L100 8',
  },
  {
    ticker: 'DJI',
    name: 'Dow Jones Industrial',
    status: 'MONITOR',
    accent: 'bg-[#3b82f6] text-white',
    sparkClass: 'stroke-[#ef4444]',
    path: 'M0 10 L20 15 L40 8 L60 25 L80 20 L100 28',
  },
]

const executionPlans = [
  {
    ticker: 'SPX',
    name: 'S&P 500 Index',
    entry: '5,214.50',
    status: 'READY NOW',
    thesis: 'Momentum remains constructive above intraday support.',
    accent: 'bg-white text-black',
  },
  {
    ticker: 'NDX',
    name: 'NASDAQ 100',
    entry: '18,142.25',
    status: 'READY ON PULLBACK',
    thesis: 'Watch for retrace into defined support before entry.',
    accent: 'bg-[#0ea5e9] text-white',
  },
  {
    ticker: 'DJI',
    name: 'Dow Jones Industrial',
    entry: '39,108.00',
    status: 'MONITOR',
    thesis: 'Macro sentiment is mixed. Wait for stronger confirmation.',
    accent: 'bg-[#3b82f6] text-white',
  },
]

function statusBadge(status: string) {
  if (status === 'READY NOW') {
    return 'bg-[rgba(16,185,129,0.1)] text-[#10b981] border border-[rgba(16,185,129,0.2)]'
  }

  if (status === 'READY ON PULLBACK') {
    return 'bg-[rgba(245,158,11,0.1)] text-[#f59e0b] border border-[rgba(245,158,11,0.2)]'
  }

  return 'bg-white/5 text-gray-300 border border-white/10'
}

export default async function FeedPage() {
  const { isAuthenticated, role, featureBypass, email } = await getAuthContext()

  if (!isAuthenticated) {
    redirect('/sign-in?redirect_url=/feed')
  }

  const isFreePreview = !featureBypass

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">Live Feed</h1>
            <p className="mt-2 max-w-2xl text-sm text-gray-400">
              Real-time market setups organized by opportunity quality and execution readiness.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur-xl">
            <div className="text-gray-400">Access</div>
            <div className="mt-1 text-white font-medium">{featureBypass ? 'OWNER FULL ACCESS' : 'FREE PREVIEW'}</div>
            <div className="mt-3 text-gray-400">Role</div>
            <div className="mt-1 text-white font-medium">{role}</div>
            <div className="mt-3 text-gray-400">Email</div>
            <div className="mt-1 break-all text-xs text-gray-300">{email ?? 'Unavailable'}</div>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#111214]/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Market Opportunities</h2>
              <div className="text-xs uppercase tracking-[0.18em] text-gray-500">US Session</div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {marketOpportunities.map((item) => (
                <div
                  key={item.ticker}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold ${item.accent}`}>
                        {item.ticker}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{item.ticker}</div>
                        <div className="text-xs text-gray-400">{item.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 h-14 w-full">
                    <svg
                      viewBox="0 0 100 30"
                      className={`h-full w-full fill-none stroke-[1.8] ${item.sparkClass}`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={item.path} />
                    </svg>
                  </div>

                  <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${statusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Execution Plans</h2>
                <p className="mt-1 text-sm text-gray-400">
                  {isFreePreview
                    ? 'Free-tier view shows entry and status. Full execution logic stays locked.'
                    : 'Owner access is active. Full execution logic is visible for validation.'}
                </p>
              </div>
              {isFreePreview ? (
                <button className="rounded-md bg-[#d95e14] px-4 py-2 text-sm font-medium text-white hover:bg-[#b84f0f] transition-colors">
                  Upgrade for detailed execution plans
                </button>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="grid grid-cols-12 gap-4 border-b border-white/5 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500">
                <div className="col-span-4">Instrument</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Entry</div>
                <div className="col-span-2">Plan</div>
                <div className="col-span-2">Targets</div>
              </div>

              {executionPlans.map((plan) => (
                <div
                  key={plan.ticker}
                  className="grid grid-cols-12 gap-4 border-b border-white/5 px-4 py-4 last:border-b-0"
                >
                  <div className="col-span-12 flex items-start gap-3 md:col-span-4">
                    <div className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold ${plan.accent}`}>
                      {plan.ticker}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{plan.ticker}</div>
                      <div className="text-xs text-gray-400">{plan.name}</div>
                      <p className="mt-2 max-w-md text-sm text-gray-300">{plan.thesis}</p>
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${statusBadge(plan.status)}`}>
                      {plan.status}
                    </span>
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <div className="text-sm font-semibold text-white">{plan.entry}</div>
                    <div className="mt-1 text-xs text-gray-500">Visible on Free</div>
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-gray-400">
                      {isFreePreview ? 'Locked on Free' : 'Execution logic visible to owner'}
                    </div>
                  </div>

                  <div className="col-span-6 md:col-span-2">
                    <div className="rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-gray-400">
                      {isFreePreview ? 'Upgrade to unlock' : 'Targets visible to owner'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
