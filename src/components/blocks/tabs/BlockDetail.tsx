import { IBlocks } from '@/common/interfaces/Blocks'
import { parseDecimals } from '@/common/utils/ParseDecimals'
import { parseDate } from '@/common/utils/Time'
import ListContent from '@/components/generals/ListContent'
import ListItem from '@/components/generals/ListItem'
import React from 'react'

function BlockDetail({ block }: { block: IBlocks | undefined }) {
  const { formattedDate, timeAgo } = parseDate(block?.timestamp);
  return (
    <ListContent className=''>
      <ListItem title='Block' value={block?.number} />
      <ListItem title='Txs' value={block?.transactions} />
      <ListItem title='Hash' value={block?.hash} />
      <ListItem title='Miner' value={block?.miner} />
      <ListItem title='Size' value={block?.size} />
      <ListItem title='Timestamp' value={`${timeAgo} | ${formattedDate}`} />
      <ListItem title='Parent Hash' value={block?.parentHash} />
      <ListItem title='Difficulty' value={`${block?.difficultyInGH.toFixed(2)} MH`} />
      <ListItem title='Total Difficulty' value={`${block?.totalDifficultyInEH.toFixed(2)} EH`} />
      <ListItem title='Gas Limit' value={parseDecimals(block?.gasLimit)} />
      <ListItem title='Gas Used' value={parseDecimals(block?.gasUsed)} />
      <ListItem title='Minimun Gas Price' value={`${block?.minimumGasPrice} Gwei`} />
      <ListItem title='Time' value={block?.time} />
      <ListItem title='Tx Density' value={`${block?.txDensity.toFixed(2)} txs/s`} />
      <ListItem title='Hash Rate' value={`${block?.blockHashrateInMHs.toFixed(2)} MHs`} />
      <ListItem title='Extra Data' value={block?.extraData} />
      <ListItem title='Sha3uncles' value={block?.sha3Uncles} />
      <ListItem title='Uncle Count' value={block?.uncles.length} />
      <ListItem title='Uncles' value={block?.uncles} />
    </ListContent>
  )
}

export default BlockDetail
