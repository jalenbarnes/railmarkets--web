import { getAuthContext } from '@/lib/auth'
import { getEnvStatus } from '@/lib/env'

export default async function AccountPage() {
  const { userId, sessionId } = await getAuthContext()
  const envStatus = getEnvStatus()

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Account</h1>
        <p className="mt-2 text-sm text-gray-400">
          Protected account shell is active. User sync and persistence come next.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Clerk User ID</div>
          <div className="mt-2 break-all font-mono text-sm text-white">{userId}</div>
          <div className="mt-4 text-sm text-gray-400">Session ID</div>
          <div className="mt-2 break-all font-mono text-sm text-white">{sessionId}</div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="text-sm text-gray-400">Environment Status</div>
          <ul className="mt-3 space-y-2 text-sm text-white">
            <li>Clerk configured: {envStatus.clerkConfigured ? 'Yes' : 'No'}</li>
            <li>Database configured: {envStatus.databaseConfigured ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
