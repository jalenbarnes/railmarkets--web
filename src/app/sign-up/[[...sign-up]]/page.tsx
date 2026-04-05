import { SignUp } from '@clerk/nextjs'
import { getEnvStatus } from '@/lib/env'

export default function SignUpPage() {
  const envStatus = getEnvStatus()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid gap-6 lg:grid-cols-[1fr_420px] items-start">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Create your RailMarkets account</h1>
          <p className="mt-3 max-w-xl text-sm text-gray-400">
            Start with the free tier and unlock deeper execution plans when ready.
          </p>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-gray-300">
            <div className="font-medium text-white">Environment diagnostics</div>
            <ul className="mt-3 space-y-2">
              <li>Clerk configured: {envStatus.clerkConfigured ? 'Yes' : 'No'}</li>
              <li>Database configured: {envStatus.databaseConfigured ? 'Yes' : 'No'}</li>
            </ul>
            {!envStatus.clerkConfigured ? (
              <p className="mt-4 text-xs text-[#f59e0b]">
                Clerk env vars are not fully available at runtime. The sign-up form cannot render until they are active in deployment.
              </p>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl min-h-[520px] flex items-center justify-center">
          <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl="/app/feed" />
        </div>
      </div>
    </main>
  )
}
