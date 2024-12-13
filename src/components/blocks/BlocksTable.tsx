import { ROUTER } from '@/common/constants';
import { BlockIcon } from '@/common/icons';
import { IBlocks } from '@/common/interfaces/Blocks';
import ToolTip from '@/components/control/ToolTip';
import Link from 'next/link';
import React from 'react';

type props = {
  blocks: IBlocks[] | undefined
}

function BlocksTable({ blocks }: props) {
  return (
    <div>
      <div className='flex overflow-scroll md:overflow-hidden md:w-full'>
      <div className='w-[700px] md:w-[100%]'>
        <table className='w-[700px] md:w-[100%] mt-10 px-3 table-fixed'>
          <thead className='px-3 bg-zinc-800'>
            <tr className='text-white-400 font-medium h-13 bg-secondary px-3 text-center'>
              <th className='w-24'></th>
              <th className='px-2 text-left'>Number</th>
              <th className='w-10'>Txs</th>
              <th>Hash</th>
              <th>Miner</th>
              <th>Size</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {
              blocks?.map((b) => (
                <tr key={b.id} className='h-13 shadow-line text-white-400 hover:bg-secondary px-3'>
                  <td className='w-24'>
                    <div className='flex justify-start items-center'>
                      <div className='w-10 h-10 rounded-full bg-[#252525] ml-4 flex justify-center items-center'>
                        <BlockIcon />
                      </div>
                    </div>
                  </td>
                  <td>
                    <Link href={`${ROUTER.BLOCKS.INDEX}/${b.number}`}>
                      { b.number }
                    </Link>
                  </td>
                  <td className='text-center w-10'>{ b.transactions }</td>
                  <td className='text-center'>
                    <ToolTip text={b.hash} />
                  </td>
                  <td className='text-center'>
                    <ToolTip text={b.miner} />
                  </td>
                  <td className='text-center'>{ b.size }</td>
                  <td className='text-center'>{ b.timestamp }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          blocks?.length === 0 && (
            <div className='w-full flex justify-center mt-10'>
            <span className='text-6xl italic text-zinc-800'>No Blocks</span>
            </div>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default BlocksTable
