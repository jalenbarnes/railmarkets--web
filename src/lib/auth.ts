import { auth } from '@clerk/nextjs/server'

export async function getAuthContext() {
  const session = await auth()

  return {
    userId: session.userId,
    sessionId: session.sessionId,
    orgId: session.orgId ?? null,
    isAuthenticated: !!session.userId,
  }
}

export async function requireAuth() {
  const session = await auth()

  if (!session.userId) {
    throw new Error('UNAUTHORIZED')
  }

  return session
}
