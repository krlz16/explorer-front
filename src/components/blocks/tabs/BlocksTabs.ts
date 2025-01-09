import { ROUTER } from "@/common/constants";

export const BLOCKS_BTN_TABS = [
  { label: 'Block', tab: 'block' },
  { label: 'Mining', tab: 'mining' }
]

export const BLOCKS_URL_TABS = [
  { url: ROUTER.TXS.BLOCK, label: 'Transactions', tab: 'txs' },
  { url: ROUTER.ITXS.BLOCK, label: 'Internal Transactions', tab: 'itxs' }
]