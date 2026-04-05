import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in to RailMarkets</h1>
          <p className="mt-2 text-sm text-gray-400">
            Access your live feed, watchlist, and account settings.
          </p>
        </div>
        <div className="flex justify-center">
          <SignIn />
        </div>
      </div>
    </main>
  )
}
