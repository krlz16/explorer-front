import { ROUTER } from "@/common/constants";
import { AddressIcon, BlockIcon, TokenIcon, TxIcon } from "@/common/icons";
import { IBlocks } from "@/common/interfaces/Blocks";
import DataList from "@/components/generals/DataList";
import { INavigation } from "@/common/interfaces/IResponse";
import PageNavigation from "../page/PageNavigation";
import PageHeader from "../page/PageHeader";
import { BLOCKS_BTN_TABS } from "./tabs/BlocksTabs";

type props = {
  block: IBlocks | undefined
  navigation: INavigation | undefined
}
export default function BlockContentPage({ block, navigation }: props) {
  const items = [
    { label: 'Block', value: block?.number },
    { label: 'Txs', value: `${block?.transactions} in this block` },
    { label: 'Hash', value: block?.hash },
    { label: 'Miner', value: block?.miner },
    { label: 'Size', value: block?.size },
    { label: 'Timestamp', value: block?.miner },
    { label: "Date", value: block?.number },
    { label: "Parent Hash", value: block?.parentHash },
    { label: "Difficulty", value: block?.difficulty },
    // { label: "Total Difficulty", value: block?.totalDifficulty },
    // { label: "Gas Limit", value: block?.gasLimit },
    // { label: "Gas Used", value: block?.gasUsed },
    // { label: "Minimum Gas Price", value: block?.minimumGasPrice },
    // { label: "Tx Density", value: block?.difficulty },
    // { label: "Block Hashrate", value: block?.receiptsRoot },
    // { label: "Extra Data", value: block?.stateRoot },
    // { label: "Sha3uncles", value: block?.sha3Uncles },
    // { label: "Uncle Count", value: block?.uncles },
    // { label: "Uncles", value: block?.uncles },
  ];

  const items2 = [
    { label: <BlockIcon />, value: block?.bitcoinMergedMiningHeader },
    { label: <TxIcon />, value: block?.bitcoinMergedMiningCoinbaseTransaction },
    { label: <TokenIcon />, value: block?.bitcoinMergedMiningHeader },
    { label: <AddressIcon />, value: block?.bitcoinMergedMiningMerkleProof },
    { label: "Label", value: block?.number },
  ];

  return (
    <PageHeader
      breadcrumb={{ name: 'Blocks', path: ROUTER.BLOCKS.INDEX }}
      icon={<BlockIcon className="w-6 h-6" />}
      title={`${block?.number} Block`}
      titleColor="brand-green"
      themeBtn="bg-brand-green text-black"
      buttons={BLOCKS_BTN_TABS}
      navigationsBtns={
        <PageNavigation
          navigation={navigation}
          route={ROUTER.BLOCKS.INDEX}
        />
      }
      tabContents={[
        {
          tab: 'block',
          content: (
            <DataList
              items={items}
            />
          )
        },
        {
          tab: 'mining',
          content: (
            <DataList
              items={items2}
            />
          )
        }
      ]}
    >
    </PageHeader>
  )
}
