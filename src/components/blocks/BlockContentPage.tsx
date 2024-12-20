import { ROUTER } from "@/common/constants";
import { IBlocks } from "@/common/interfaces/Blocks";
import DataList from "@/components/generals/DataList";
import { INavigation } from "@/common/interfaces/IResponse";
import PageNavigation from "../page/PageNavigation";
import PageHeader from "../page/PageHeader";
import { BLOCKS_BTN_TABS } from "./tabs/BlocksTabs";
import { BlockIcon } from "@/common/icons";
import { parseDecimals } from "@/common/utils/ParseDecimals";
import { parseDate } from "@/common/utils/Time";
import ToolTip from "../control/ToolTip";

type props = {
  block: IBlocks | undefined
  navigation: INavigation | undefined
}
export default function BlockContentPage({ block, navigation }: props) {
  const { timeAgo, formattedDate } = parseDate(block?.timestamp);
  const items = [
    { label: 'Block', value: parseDecimals(block?.number) },
    { label: 'Txs', value: `${block?.transactions} in this block` },
    { label: 'Hash', value: block?.hash },
    { label: 'Miner', value: block?.miner },
    { label: 'Size', value: block?.size },
    { label: 'Timestamp', value: timeAgo },
    { label: "Date", value: formattedDate},
    { label: "Parent Hash", value: block?.parentHash },
    { label: "Difficulty", value: `${block?.difficultyInGH.toFixed(2)} GH` },
    { label: "Total Difficulty", value: `${block?.totalDifficultyInEH.toFixed(2)} EH` },
    { label: "Gas Limit", value: parseDecimals(block?.gasLimit) },
    { label: "Gas Used", value: parseDecimals(block?.gasUsed) },
    { label: "Minimum Gas Price", value: `${block?.minimumGasPrice} Gwei` },
    { label: "Tx Density", value: `${block?.txDensity.toFixed(3)} txs/s` },
    { label: "Block Hashrate", value: `${block?.blockHashrateInMHs.toFixed(2)} MHs` },
    { label: "Extra Data", value: block?.stateRoot },
    { label: "Sha3uncles", value: block?.sha3Uncles },
    { label: "Uncle Count", value: JSON.parse(block?.uncles || '').length || 0 },
    { label: "Uncles", value: <div>{JSON.parse(block?.uncles || '').map((b: string, i:number) => <div key={i}>{b}</div>)}</div> },
  ];

  const items2 = [
    { label: 'Bitcoin Merged Mining Header', value: <ToolTip text={block?.bitcoinMergedMiningHeader} trim={24} /> },
    { label: 'Bitcoin Merged Mining Coinbase Transaction', value: <ToolTip text={block?.bitcoinMergedMiningCoinbaseTransaction} trim={24} /> },
    { label: 'Bitcoin Merged Mining Merkle Proof', value: <ToolTip text={block?.bitcoinMergedMiningHeader} trim={24} /> },
    { label: 'Hash For Merged Mining', value: <ToolTip text={block?.bitcoinMergedMiningMerkleProof} trim={24} /> },
  ];

  return (
    <PageHeader
      breadcrumb={{ name: 'Blocks', path: ROUTER.BLOCKS.INDEX }}
      icon={<BlockIcon className="w-6 h-6" />}
      title={`${parseDecimals(block?.number)} Block`}
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
