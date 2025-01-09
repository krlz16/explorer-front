import { IBlocks } from '@/common/interfaces/Blocks'
import ToolTip from '@/components/ui/ToolTip'
import ListContent from '@/components/generals/ListContent';
import ListItem from '@/components/generals/ListItem';
import React from 'react'

function Mining({ block }: { block: IBlocks | undefined }) {
  return (
    <ListContent>
      <ListItem 
        title='Bitcoin Merged Mining Header'
        value={
          <ToolTip text={block?.bitcoinMergedMiningHeader} trim={24} />
        }
      />
      <ListItem 
        title='Bitcoin Merged Mining Coinbase Transaction'
        value={
          <ToolTip text={block?.bitcoinMergedMiningCoinbaseTransaction} trim={24} />
        }
      />
      <ListItem 
        title='Bitcoin Merged Mining Merkle Proof'
        value={
          <ToolTip text={block?.bitcoinMergedMiningHeader} trim={24} />
        }
      />
      <ListItem 
        title='Hash For Merged Mining'
        value={
          <ToolTip text={block?.bitcoinMergedMiningMerkleProof} trim={24} />
        }
      />
    </ListContent>
  )
}

export default Mining
