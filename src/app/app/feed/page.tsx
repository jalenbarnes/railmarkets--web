import { getAuthContext } from '@/lib/auth'

export default async function FeedPage() {
  const { userId } = await getAuthContext()

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Live Feed</h1>
        <p className="mt-2 text-sm text-gray-400">
          Authenticated app shell is active. Feed wiring comes next.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="text-sm text-gray-400">Signed in Clerk User ID</div>
        <div className="mt-2 break-all font-mono text-sm text-white">{userId}</div>
      </div>
    </section>
  )
}
