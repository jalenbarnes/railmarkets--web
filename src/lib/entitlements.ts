export type TierCode = 'FREE' | 'BASE' | 'MID' | 'TOP'
export type BillingState = 'ACTIVE' | 'GRACE' | 'PAST_DUE' | 'CANCELED' | 'EXPIRED' | 'INCOMPLETE'
export type AccessLevel = 'FREE_PREVIEW' | 'FULL'

export type EntitlementSnapshot = {
  tierCode: TierCode
  billingState: BillingState
}

export const FREE_DAILY_CARD_LIMIT = 5

export function hasPaidAccess(snapshot: EntitlementSnapshot) {
  return (
    ['BASE', 'MID', 'TOP'].includes(snapshot.tierCode) &&
    ['ACTIVE', 'GRACE'].includes(snapshot.billingState)
  )
}

export function getAccessLevel(snapshot: EntitlementSnapshot): AccessLevel {
  return hasPaidAccess(snapshot) ? 'FULL' : 'FREE_PREVIEW'
}

export function getUpgradeTarget(snapshot: EntitlementSnapshot): TierCode {
  if (snapshot.tierCode === 'FREE') return 'BASE'
  if (snapshot.tierCode === 'BASE') return 'MID'
  if (snapshot.tierCode === 'MID') return 'TOP'
  return 'TOP'
}
