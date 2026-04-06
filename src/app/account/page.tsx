import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getAuthContext } from '@/lib/auth'

export default async function AccountPage() {
  const { isAuthenticated, role, email, featureBypass, userId, sessionId } = await getAuthContext()

  if (!isAuthenticated) {
    redirect('/sign-in?redirect_url=/account')
  }

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Account</h1>
          <p className="mt-2 text-sm text-gray-400">
            Watchlist, settings, and upgrade controls live here.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
            <div className="text-sm text-gray-400">My Watchlist</div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white">SPX · S&P 500 Index</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white">NDX · NASDAQ 100</div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white">DJI · Dow Jones Industrial</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-sm text-gray-400">Account Settings</div>
            <div className="mt-4 text-lg font-semibold text-white">{featureBypass ? 'Owner Access' : 'Free Tier'}</div>
            <p className="mt-2 text-sm text-gray-400">
              {featureBypass
                ? 'Platform owner bypass is active for this account.'
                : 'Upgrade when you are ready to unlock full execution plans.'}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <button className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                Edit Personal Settings
              </button>
              {featureBypass ? (
                <div className="rounded-md border border-[#d95e14]/30 bg-[#d95e14]/10 px-4 py-3 text-sm text-[#f4a261]">
                  OWNER · FULL ACCESS
                </div>
              ) : (
                <Link
                  href="/sign-up"
                  className="rounded-md bg-[#d95e14] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#b84f0f] transition-colors"
                >
                  Upgrade Account
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Auth Context</div>
          <ul className="mt-3 space-y-2 text-sm text-white">
            <li>Role: {role}</li>
            <li>Email: {email ?? 'Unavailable'}</li>
            <li>User ID: {userId ?? 'Unavailable'}</li>
            <li>Session ID: {sessionId ?? 'Unavailable'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
