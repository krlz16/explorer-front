import { TokenIcon } from '@/common/icons';
import { ITokens } from '@/common/interfaces/Tokens';
import ToolTip from '@/components/control/ToolTip';
import React from 'react';

type props = {
  tokens: ITokens[] | undefined
}

function TokensTable({ tokens }: props) {
  return (
    <div>
      <div className='flex overflow-scroll md:overflow-hidden md:w-full'>
      <div className='w-[700px] md:w-[100%]'>
        <table className='w-[700px] md:w-[100%] mt-10 px-3 table-fixed'>
          <thead className='px-3 bg-zinc-800'>
            <tr className='text-white2 text-sm font-medium h-[52px] bg-secondary px-3 text-center'>
              <th className='w-24'></th>
              <th>Name</th>
              <th>Balance</th>
              <th>Address</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {
              tokens?.map((tk, i) => (
                <tr key={i} className='h-[52px] border-b-[1px] border-b-zinc-800 hover:bg-zinc-800 text-sm px-3'>
                  <td className='w-24'>
                    <div className='flex justify-start items-center'>
                      <div className='w-10 h-10 rounded-full bg-[#252525] ml-4 flex justify-center items-center'>
                        <TokenIcon />
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>{ tk.addressInfo.name }</td>
                  <td className='text-center'>{ tk.balance }</td>
                  <td className='text-center'>
                    {<ToolTip text={ tk.address } />}
                  </td>
                  <td className='text-center'>{ tk.blockNumber }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          tokens?.length === 0 && (
            <div className='w-full flex justify-center mt-10'>
            <span className='text-6xl italic text-zinc-800'>No Txs</span>
            </div>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default TokensTable
