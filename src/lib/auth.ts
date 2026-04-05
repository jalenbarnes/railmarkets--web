import { auth, currentUser } from '@clerk/nextjs/server'
import { resolveOwnerAccess } from '@/lib/roles'

export async function getAuthContext() {
  const session = await auth()

  let email: string | null = null

  if (session.userId) {
    try {
      const user = await currentUser()
      email = user?.emailAddresses?.[0]?.emailAddress ?? null
    } catch {
      email = null
    }
  }

  const ownerAccess = resolveOwnerAccess(email)

  return {
    userId: session.userId,
    sessionId: session.sessionId,
    orgId: session.orgId ?? null,
    isAuthenticated: !!session.userId,
    email,
    role: ownerAccess.role,
    featureBypass: ownerAccess.featureBypass,
  }
}

export async function requireAuth() {
  const session = await auth()

  if (!session.userId) {
    throw new Error('UNAUTHORIZED')
  }

  return session
}
