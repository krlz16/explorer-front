import { ROUTER } from "@/common/constants";

export const ADDRESSES_BTN_TABS = [
  { label: 'General', tab: 'general' },
  { label: 'Code', tab: 'code' }
]

export const ADDRESSES_URL_TABS = [
  { url: ROUTER.TXS.ADDRESS, label: 'Transactions', tab: 'txs' },
  { url: ROUTER.ITXS.ADDRESS, label: 'Internal Transactions', tab: 'itxs' },
  { url: ROUTER.ADDRESSES.TOKENS, label: 'Tokens', tab: 'tokens' },
  { url: ROUTER.EVENTS.ADDRESS, label: 'Events', tab: 'events' },
  { url: ROUTER.ADDRESSES.TTRANSFER, label: 'Tokens Transfers', tab: 'ttransfer' },
  { url: ROUTER.ADDRESSES.BALANCES, label: 'Balances', tab: 'balances' },
]