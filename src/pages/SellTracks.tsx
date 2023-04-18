import React from 'react'

export const SellTracks = () => {
  return (
    <div>
      <div className='text-center py-[200px]'>
        <h1 className='text-2xl'>Sell tracks</h1>
        <p>Create a post demonstrating your skillset, to add to our tracks!</p>
        <form className='rounded-2xl items-center flex w-[700px] m-auto border-double border-4 border-slate-800'>
        <input placeholder='Description...'  className='text-3xl rounded-xl h-[100px] w-5/6'/>
        <button className='w-1/6 bg-white text-xl border-slate-500 border-2 h-[100px] rounded-2xl hover:bg-slate-200'>Upload Music</button>
        <button className='w-1/6 bg-white text-xl border-slate-500 border-2 h-[100px] rounded-2xl hover:bg-slate-200'>Post</button>
        </form>
      </div>
    </div>
  )
}
