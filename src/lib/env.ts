export const env = {
  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
  databaseUrl: process.env.DATABASE_URL,
}

export function getEnvStatus() {
  return {
    clerkConfigured: Boolean(env.clerkPublishableKey && env.clerkSecretKey),
    databaseConfigured: Boolean(env.databaseUrl),
  }
}
