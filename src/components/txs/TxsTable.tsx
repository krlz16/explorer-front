import { ROUTER } from '@/common/constants';
import { TxIcon } from '@/common/icons';
import { ITxs } from '@/common/interfaces/Txs';
import ToolTip from '@/components/control/ToolTip';
import Link from 'next/link';
import React from 'react';

type props = {
  txs: ITxs[] | undefined
}

function TxsTable({ txs }: props) {
  return (
    <div>
      <div className='flex overflow-scroll md:overflow-hidden md:w-full'>
      <div className='w-[700px] md:w-[100%]'>
        <table className='w-[700px] md:w-[100%] mt-10 px-3 table-fixed'>
          <thead className='px-3 bg-zinc-800'>
            <tr className='text-white2 text-sm font-medium h-[52px] bg-secondary px-3 text-center'>
              <th className='w-24'></th>
              <th>Hash</th>
              <th>Block</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>GasUsed</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              txs?.map((tx, i) => (
                <tr key={i} className='h-[52px] border-b-[1px] text-white-400 border-b-zinc-800 hover:bg-secondary px-3'>
                  <td className='w-24'>
                    <div className='flex justify-start items-center'>
                      <div className='w-10 h-10 rounded-full bg-[#252525] ml-4 flex justify-center items-center'>
                        <TxIcon />
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>
                    <Link href={`${ROUTER.TXS}/${tx.hash}`}>
                      <ToolTip text={ tx.hash } />
                    </Link>
                  </td>
                  <td className='text-center'>{ tx.blockNumber }</td>
                  <td className='text-center'>
                    <ToolTip text={ tx.from } />
                  </td>
                  <td className='text-center'>
                    <ToolTip text={ tx.to } />
                  </td>
                  <td className='text-center'>{ tx.gasUsed }</td>
                  <td className='text-center'>{ tx.gasUsed }</td>
                  <td className='text-center'>{ tx.txType }</td>
                  <td className='text-center'></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          txs?.length === 0 && (
            <div className='w-full flex justify-center mt-10'>
              <span className='text-6xl italic text-gray-700'>No Txs</span>
            </div>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default TxsTable
