import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getAuthContext } from '@/lib/auth'

export default async function ProtectedAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, email } = await getAuthContext()

  if (!isAuthenticated) {
    redirect('/sign-in?redirect_url=/app/feed')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold tracking-wide text-white">
              RailMarkets
            </Link>
            <nav className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/app/feed" className="hover:text-white transition-colors">Live Feed</Link>
              <Link href="/app/account" className="hover:text-white transition-colors">Account</Link>
            </nav>
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            {email ?? 'Authenticated'}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10">{children}</main>
    </div>
  )
}
