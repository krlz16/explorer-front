import React from 'react'

function TableLoader() {
  return (
    <div className="animate-pulse w-full">
      <div className='w-[30%] h-6 bg-c-gray1 rounded-xl'></div>
      <table className='w-full'>
        <thead>
          <tr className='w-full flex'>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
            <th className='h-[30px] flex-1 bg-zinc-700 mb-6 rounded'></th>
          </tr>
        </thead>
        <tbody>
          {
            [1,2,3,4,5].map((e) => (
              <tr key={e} className='h-[52px] flex border-b-[1px] border-b-secondary text-sm text-center'>
                <td className='h-3 flex-1 bg-zinc-700 mb-6 rounded'></td>
                <td className='h-3 flex-1 bg-zinc-700 mb-6 rounded'></td>
                <td className='h-3 flex-1 bg-zinc-700 mb-6 rounded'></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TableLoader
