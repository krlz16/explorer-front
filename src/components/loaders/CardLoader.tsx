import React from 'react'

function CardLoader() {
  return (
    <>
    {
      [0,1,2,3,4,5,6,7,8,9].map((i) =>(
        <div key={i} className='w-full animate-pulse my-4 py-2'>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <div className='w-7 h-7 bg-zinc-800 rounded-full'></div>
              <div className='flex flex-col gap-3'>
                <div className='w-40 h-2 bg-zinc-800 rounded-xl'></div>
                <div className='w-8 h-2 bg-zinc-800 rounded-xl'></div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='w-32 h-2 bg-zinc-800 rounded-xl'></div>
              <div className='w-8 h-2 bg-zinc-800 rounded-xl'></div>
            </div>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default CardLoader
