import { ROUTER } from '@/common/constants';
import { TxIcon } from '@/common/icons';
import { IInternalTxs } from '@/common/interfaces/Txs';
import ToolTip from '@/components/control/ToolTip';
import Link from 'next/link';
import React from 'react';

type props = {
  itxs: IInternalTxs[] | undefined
}

function InternalTxsTable({ itxs }: props) {
  return (
    <div>
      <div className='flex overflow-scroll md:overflow-hidden md:w-full'>
      <div className='w-[700px] md:w-[100%]'>
        <table className='w-[700px] md:w-[100%] mt-10 px-3 table-fixed'>
          <thead className='px-3 bg-zinc-800'>
            <tr className='text-white2 text-sm font-medium h-[52px] bg-secondary px-3 text-center'>
              <th className='w-24'></th>
              <th>from</th>
              <th>to</th>
              <th>type</th>
              <th>Timestamp</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {
              itxs?.map((itx, i) => (
                <tr key={i} className='h-[52px] border-b-[1px] text-white-400 border-b-zinc-800 hover:bg-secondary px-3'>
                  <td className='w-24'>
                    <div className='flex justify-start items-center'>
                      <div className='w-10 h-10 rounded-full bg-[#252525] ml-4 flex justify-center items-center'>
                        <TxIcon />
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>
                    <Link href={`${ROUTER.TXS}/${itx.from}`}>
                      <ToolTip text={ itx.from } />
                    </Link>
                  </td>
                  <td className='text-center'>
                    <Link href={`${ROUTER.TXS}/${itx.to}`}>
                      <ToolTip text={ itx.to } />
                    </Link>
                  </td>
                  <td className='text-center'>{ itx.type }</td>
                  <td className='text-center'>{ itx.timestamp } </td>
                  <td className='text-center'>{ itx.value } </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          itxs?.length === 0 && (
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

export default InternalTxsTable
