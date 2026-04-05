import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

export default async function ProtectedAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session.userId) {
    redirect('/sign-in')
  }

  return <main className="min-h-screen bg-[#0a0a0a] text-white">{children}</main>
}
