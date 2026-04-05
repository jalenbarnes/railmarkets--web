import { getAuthContext } from '@/lib/auth'
import { createFeedMeta } from '@/lib/feed-contract'
import { getAccessLevel } from '@/lib/entitlements'

const mockEntitlement = {
  tierCode: 'FREE',
  billingState: 'ACTIVE',
} as const

const mockCards = [
  {
    ticker: 'SPX',
    companyName: 'S&P 500 Index',
    executionStatus: 'READY_NOW',
    thesisPreview: 'Momentum remains constructive above intraday support.',
  },
  {
    ticker: 'NDX',
    companyName: 'NASDAQ 100',
    executionStatus: 'READY_ON_PULLBACK',
    thesisPreview: 'Watch for retrace into defined support before entry.',
  },
  {
    ticker: 'DJI',
    companyName: 'Dow Jones Industrial',
    executionStatus: 'MONITOR',
    thesisPreview: 'Macro sentiment is mixed. Wait for stronger confirmation.',
  },
]

export default async function FeedPage() {
  const { userId } = await getAuthContext()
  const accessLevel = getAccessLevel(mockEntitlement)
  const feedMeta = createFeedMeta(accessLevel, 2)

  return (
    <section className="space-y-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Live Feed</h1>
          <p className="mt-2 text-sm text-gray-400">
            Product gating foundation is active. Free users see previews, paid users unlock full execution plans.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur-xl">
          <div className="text-gray-400">Signed in Clerk User ID</div>
          <div className="mt-1 max-w-xs break-all font-mono text-xs text-white">{userId}</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Access Level</div>
          <div className="mt-2 text-xl font-semibold text-white">{feedMeta.accessLevel}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Free Daily Usage</div>
          <div className="mt-2 text-xl font-semibold text-white">
            {feedMeta.freeDailyUsed} / {feedMeta.freeDailyLimit}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Upgrade Path</div>
          <div className="mt-2 text-sm font-medium text-[#d95e14]">{feedMeta.upgradeCtaLabel}</div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Execution Plans</h2>
            <p className="mt-1 text-sm text-gray-400">
              Free-tier view shows status and thesis preview. Execution details remain locked.
            </p>
          </div>
          <button className="rounded-md bg-[#d95e14] px-4 py-2 text-sm font-medium text-white hover:bg-[#b84f0f] transition-colors">
            Upgrade to Base
          </button>
        </div>

        <div className="space-y-3">
          {mockCards.map((card) => (
            <div
              key={card.ticker}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/20 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-white">{card.ticker} · {card.companyName}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{card.executionStatus}</div>
                <p className="mt-3 max-w-xl text-sm text-gray-300">{card.thesisPreview}</p>
              </div>
              <div className="min-w-[220px] rounded-lg border border-dashed border-white/10 bg-white/5 p-4 text-sm text-gray-400">
                <div className="font-medium text-white/80">Execution details locked</div>
                <div className="mt-2">Entry, stop, and targets unlock on Base.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
