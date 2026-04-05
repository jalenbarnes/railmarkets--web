export type UserRole = 'OWNER' | 'ADMIN' | 'USER'

export type OwnerAccessContext = {
  role: UserRole
  featureBypass: boolean
}

const OWNER_EMAILS = ['agentbarnes032@gmail.com']

export function resolveOwnerAccess(email?: string | null): OwnerAccessContext {
  if (email && OWNER_EMAILS.includes(email.toLowerCase())) {
    return {
      role: 'OWNER',
      featureBypass: true,
    }
  }

  return {
    role: 'USER',
    featureBypass: false,
  }
}

export function isAdminLike(role: UserRole) {
  return role === 'OWNER' || role === 'ADMIN'
}
