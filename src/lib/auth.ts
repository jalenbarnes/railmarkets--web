import { auth, currentUser } from '@clerk/nextjs/server'
import { resolveOwnerAccess } from '@/lib/roles'

export async function getAuthContext() {
  const session = await auth()
  const user = session.userId ? await currentUser() : null
  const ownerAccess = resolveOwnerAccess(user?.emailAddresses?.[0]?.emailAddress)

  return {
    userId: session.userId,
    sessionId: session.sessionId,
    orgId: session.orgId ?? null,
    isAuthenticated: !!session.userId,
    email: user?.emailAddresses?.[0]?.emailAddress ?? null,
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
