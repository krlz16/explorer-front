import { ROUTER } from "@/common/constants";

export const BLOCKS_BTN_TABS = [
  { label: 'Block', tab: 'block' },
  { label: 'Mining', tab: 'mining' }
]

export const BLOCKS_URL_TABS = [
  { url: ROUTER.BLOCKS.TXS, label: 'Transactions', tab: 'txs' },
  { url: ROUTER.BLOCKS.ITXS, label: 'Internal Transactions', tab: 'itxs' }
]