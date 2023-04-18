import {AiOutlineSearch} from 'react-icons/ai'
import { Tracks } from '../components/Tracks'


export const BuyTracks = () => {
  return (
    <div>
      <div className='text-center py-[200px]'>
      <h1 className='text-2xl'>Find Beats to purchase</h1>
      <div className='rounded-2xl items-center flex w-[700px] m-auto border-double border-4 border-slate-800'>
      <input placeholder='Description...'  className='text-3xl rounded-xl h-[70px] w-5/6'/>
        <button className='w-1/6 bg-white text-xl border-slate-500 border-2 h-[70px] rounded-2xl hover:bg-slate-200'><AiOutlineSearch size={35}/></button>
      </div>
      <Tracks />
      </div>
    
    </div>
  )
}
