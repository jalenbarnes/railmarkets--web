import { FREE_DAILY_CARD_LIMIT, type AccessLevel } from '@/lib/entitlements'

export type ExecutionStatus = 'READY_NOW' | 'MONITOR' | 'READY_ON_PULLBACK' | 'CLOSED' | 'INVALIDATED'

export type FeedCardPreview = {
  ticker: string
  companyName: string
  executionStatus: ExecutionStatus
  thesisPreview: string | null
  isLocked: boolean
}

export type FeedMeta = {
  accessLevel: AccessLevel
  freeDailyLimit: number
  freeDailyUsed: number
  upgradeCtaLabel: string
}

export function createFeedMeta(accessLevel: AccessLevel, freeDailyUsed = 0): FeedMeta {
  return {
    accessLevel,
    freeDailyLimit: FREE_DAILY_CARD_LIMIT,
    freeDailyUsed,
    upgradeCtaLabel:
      accessLevel === 'FULL'
        ? 'Your plan includes full setup access'
        : 'Upgrade to Base for full execution plans',
  }
}
