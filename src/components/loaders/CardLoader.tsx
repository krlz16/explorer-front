import React from 'react'

type props = {
  value?: number
}

function CardLoader({ value = 5 }: props) {
  const array = [];
  for (let i = 0; i < value; i++) {
    array.push(i);
  }
  return (
    <div className='w-full'>
      {
        array.map((i) =>(
          <div key={i} className='w-full h-25 animate-pulse my-4 p-6 flex items-center justify-between'>
            <div className='flex justify-between w-full'>
              <div className='flex gap-4'>
                <div>
                  <div className='w-8 h-8 bg-zinc-800 rounded-full'></div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='w-40 h-3 bg-zinc-800 rounded-xl'></div>
                  <div className='w-8 h-2 bg-zinc-800 rounded-xl'></div>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex gap-2'>
                  <div className='w-10 h-3 bg-zinc-800 rounded-xl'></div>
                  <div className='w-14 h-3 bg-zinc-800 rounded-xl'></div>
                </div>
                <div className='flex gap-2'>
                  <div className='w-8 h-3 bg-zinc-800 rounded-xl'></div>
                  <div className='w-14 h-3 bg-zinc-800 rounded-xl'></div>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='w-32 h-3 bg-zinc-800 rounded-xl'></div>
                <div className='w-8 h-3 bg-zinc-800 rounded-xl'></div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CardLoader
