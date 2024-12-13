import { ROUTER } from '@/common/constants';
import { AddressIcon } from '@/common/icons';
import { IAddresses } from '@/common/interfaces/Addresses';
import ToolTip from '@/components/control/ToolTip';
import Link from 'next/link';
import React from 'react';

type props = {
  addresses: IAddresses[] | undefined
}

function AddressesTable({ addresses }: props) {
  return (
    <div>
      <div className='flex overflow-scroll md:overflow-hidden md:w-full'>
      <div className='w-[700px] md:w-[100%]'>
        <table className='w-[700px] md:w-[100%] mt-10 px-3 table-fixed'>
          <thead className='px-3 bg-zinc-800'>
            <tr className='text-white-400 font-medium h-13 bg-secondary px-3 text-center'>
              <th className='w-24'></th>
              <th>Address</th>
              <th className='px-2 text-center'>Balance</th>
              <th>Type</th>
              <th>Updated at block</th>
              <th>Rns</th>
            </tr>
          </thead>
          <tbody>
            {
              addresses?.map((a) => (
                <tr key={a.id} className='h-13 shadow-line text-white-400 hover:bg-secondary px-3'>
                  <td className='w-24'>
                    <div className='flex justify-start items-center'>
                      <div className='w-10 h-10 rounded-full bg-[#252525] ml-4 flex justify-center items-center'>
                        <AddressIcon />
                      </div>
                    </div>
                  </td>
                  <td className=''>
                    <Link href={`${ROUTER.ADDRESSES}/${a.address}`}>
                      <ToolTip text={a.address} />
                    </Link>
                  </td>
                  <td className='text-center'>{ a.balance }</td>
                  <td className='text-center'>{ a.type }</td>
                  <td className='text-center'>{ a.blockNumber }</td>
                  <td className='text-center'></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          addresses?.length === 0 && (
            <div className='w-full flex justify-center mt-10'>
            <span className='text-6xl italic text-zinc-800'>No Addresses</span>
            </div>
          )
        }
      </div>
    </div>
    </div>
  )
}

export default AddressesTable
