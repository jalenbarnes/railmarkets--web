import Link from 'next/link'
import { getAuthContext } from '@/lib/auth'
import { getEnvStatus } from '@/lib/env'
import { getUpgradeTarget } from '@/lib/entitlements'

const mockEntitlement = {
  tierCode: 'FREE',
  billingState: 'ACTIVE',
} as const

export default async function AccountPage() {
  const { userId, sessionId, role, email, featureBypass } = await getAuthContext()
  const envStatus = getEnvStatus()
  const upgradeTarget = getUpgradeTarget({ ...mockEntitlement, featureBypass })

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Account</h1>
        <p className="mt-2 text-sm text-gray-400">
          Protected account shell is active. Upgrade path foundation is now in place.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:col-span-2">
          <div className="text-sm text-gray-400">Clerk User ID</div>
          <div className="mt-2 break-all font-mono text-sm text-white">{userId}</div>
          <div className="mt-4 text-sm text-gray-400">Session ID</div>
          <div className="mt-2 break-all font-mono text-sm text-white">{sessionId}</div>
          <div className="mt-4 text-sm text-gray-400">Email</div>
          <div className="mt-2 break-all font-mono text-sm text-white">{email ?? 'Unavailable'}</div>
          <div className="mt-4 text-sm text-gray-400">Resolved Role</div>
          <div className="mt-2 text-sm font-semibold text-white">{role}</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Current Tier</div>
          <div className="mt-2 text-xl font-semibold text-white">{featureBypass ? 'OWNER ACCESS' : 'FREE'}</div>
          <div className="mt-4 text-sm text-gray-400">Next Best Upgrade</div>
          <div className="mt-2 text-lg font-medium text-[#d95e14]">{featureBypass ? 'BYPASS ACTIVE' : upgradeTarget}</div>
          {featureBypass ? (
            <div className="mt-5 rounded-md border border-[#d95e14]/30 bg-[#d95e14]/10 px-4 py-3 text-sm text-[#f4a261]">
              Platform owner access is active for this account.
            </div>
          ) : (
            <Link
              href="/pricing"
              className="mt-5 inline-flex rounded-md bg-[#d95e14] px-4 py-2 text-sm font-medium text-white hover:bg-[#b84f0f] transition-colors"
            >
              Upgrade Account
            </Link>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm text-gray-400">Environment Status</div>
        <ul className="mt-3 space-y-2 text-sm text-white">
          <li>Clerk configured: {envStatus.clerkConfigured ? 'Yes' : 'No'}</li>
          <li>Database configured: {envStatus.databaseConfigured ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </section>
  )
}
