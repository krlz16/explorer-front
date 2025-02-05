'use client'
import React from 'react'

const error = () => {
  const reload = () => {
    window.location.reload()
  }
  return (
    <div className='w-full h-full flex justify-center'>
      <div className='flex flex-col mt-20'>
        <div className='text-lg mb-4'>An error has occurred</div>
        <button
          className='btn px-4 py-2 bg-brand-orange rounded-xl text-black flex justify-center items-center gap-2'
          onClick={reload}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default error
