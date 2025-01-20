import { ROUTER } from "@/common/constants";

export const BLOCKS_BTN_TABS = [
  { label: 'Overview', tab: 'overview' },
  { label: 'Transactions', tab: 'txs' },
  { label: 'Internal Transactions', tab: 'itxs' }
]

export const BLOCKS_URL_TABS = [
  { url: ROUTER.BLOCKS.INDEX, label: 'Overview', tab: '' },
  { url: ROUTER.TXS.BLOCK, label: 'Transactions', tab: 'txs' },
  { url: ROUTER.ITXS.BLOCK, label: 'Internal Transactions', tab: 'itxs' }
]