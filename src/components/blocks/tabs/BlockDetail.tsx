import { ROUTER } from '@/common/constants'
import { parseDecimals } from '@/common/utils/ParseDecimals'
import ListContent from '@/components/generals/ListContent'
import ListItem from '@/components/generals/ListItem'
import PageNavigation from '@/components/page/PageNavigation'
import Accordion from '@/components/ui/Accordion'
import Date from '@/components/ui/Date'
import { useBlocksDataContext } from '@/context/BlocksContext'

function BlockDetail() {
  const { block, navigation } = useBlocksDataContext();
  
  return (
    <div>
      <ListContent>
        <ListItem title="Block:" value={
          <div className='flex gap-2 items-center'>
            <div>{parseDecimals(block?.number)}</div>
            <PageNavigation
              route={ROUTER.BLOCKS.INDEX}
              navigation={navigation}
            />
          </div>
        } />
        <ListItem title="Timestamp:" value={<Date date={block?.timestamp} /> }
        />
        <ListItem title="Size:" value={block?.size} />
        <ListItem title="Transactions:" value={`${block?.transactions} in this block`} />
        <ListItem
          title="Hash:"
          type='tooltip' value={block?.miner}
          trim={0}
        />

        <hr className="border-gray-700 border-[1px] my-2" />

        <ListItem
          title="Hash:"
          type='tooltip' value={block?.hash}
          trim={0}
        />
        <ListItem title="Difficulty:" value={`${parseDecimals(block?.difficultyInGH)} GH`} />
        <ListItem title="Total Difficulty:" value={`${parseDecimals(block?.totalDifficultyInEH)} EH`} />

        <hr className="border-gray-700 border-[1px] my-2" />

        <ListItem title="Gas Used:" value={parseDecimals(block?.gasUsed)} />
        <ListItem title="Gas Limit:" value={parseDecimals(block?.gasLimit)} />
        <ListItem title="Minimum Gas Price:" value={parseDecimals(block?.minimumGasPrice)} />
      </ListContent>

      <Accordion title="More details" subtitle='Less details' styles={false} className='text-brand-green'>
        <ListContent className="mt-0 bg-secondary rounded-lg p-4">
          <ListItem
            title="Bitcoin Merged Mining Header"
            type='tooltip' value={block?.bitcoinMergedMiningHeader}
            trim={24}
          />
          <ListItem
            title="Bitcoin Merged Mining Coinbase Transaction"
            type='tooltip' value={block?.bitcoinMergedMiningCoinbaseTransaction}
            trim={24}
          />
          <ListItem
            title="Bitcoin Merged Mining Merkle Proof"
            type='tooltip'
            value={block?.bitcoinMergedMiningMerkleProof}
            trim={24}
          />
          <ListItem
            title="Hash For Merged Mining"
            type='tooltip'
            value={block?.hashForMergedMining}
            trim={24}
          />
          <hr className="border-gray-700 border-[1px] my-2" />
          <ListItem
            title="Parent Hash:"
            type='tooltip' value={block?.parentHash}
            trim={0}
          />
          <ListItem
            title="Sha3uncles:"
            type='tooltip' value={block?.sha3Uncles}
            trim={0}
          />
        </ListContent>
      </Accordion>
    </div>
  )
}

export default BlockDetail
