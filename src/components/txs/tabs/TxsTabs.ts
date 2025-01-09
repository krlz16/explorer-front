import { ROUTER } from "@/common/constants"

export const TXS_BTN_TABS = [
  { label: 'Transaction', tab: 'tx' },
  { label: 'Logs', tab: `logs` },
  { label: 'Token transfer', tab: 'ttranfers' },
]

export const TXS_URL_TABS = [
  { url: ROUTER.ITXS.BLOCK, label: 'Internal Transactions', tab: 'itxs' }
]