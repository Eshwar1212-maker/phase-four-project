import React from 'react'

export const Tracks = () => {
  return (
    <div className='py-[30px] m-auto border-double border-4 border-slate-800 w-fit rounded-2xl w-[200px] h-[250px]'>
        <div className='flex gap-7 flex-col'>
            <h1 className='underline text-4xl'>Track name</h1>
            <p className='text-xl'>Some random large description</p>
            <p className='text-4xl'>0$</p>
        </div>
    </div>
  )
}
