import Down from '../assets/Down.png';
import right from '../assets/right.png';
import RightBlue from '../assets/RightBlue.png';
import { Help } from '../assets/Navbar';
const Overview = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 px-6 py-4 font-inter">
      <div className="flex justify-between items-baseline ">
          <p className="text-semibold text-xl">
            Overview
          </p>
          <div className="flex border border-[#E6E6E6] items-center rounded-sm px-4 py-2 gap-2">
              <img src={Down} className='size-4'/>
              <p className='text-slate-600'>Last Month</p>
          </div>
      </div>
      <div className='flex gap-6 justify-between items-baseline '>
        <div className='flex flex-col text-slate-100 bg-card-200 rounded-md w-1/3 gap-4 drop-shadow-md'>
          <div className='flex gap-2 p-4 pb-2'>
            <p className='text-xs '>Next Payout</p>
            <img src={Help} className='size-4 invert brightness-0'/>
          </div>
          <div className='flex justify-between items-center flex-1 px-4'>
            <p className='text-2xl font-bold'>₹2312.23</p>
            <div className='flex gap-2 items-center cursor-pointer'>
              <p className='text-md text-slate-300 underline'>23 orders</p>
              <img src={right} className='size-4 invert brightness-0'/>
            </div>
          </div>
          <div className='flex justify-between bg-card-100 rounded-md mb-auto px-4 py-2'>
              <p className='text-slate-300'> Next payout date:</p>
              <p>Today,04:00PM</p>
          </div>
        </div>

        <div className='flex flex-1 flex-col text-slate-800 bg-gray-100 gap-4 rounded-md w-1/3 drop-shadow-md pb-14'>
            <div className='flex gap-2 p-4 pb-2'>
              <p className='text-xs '>Amount Pending</p>
              <img src={Help} className='size-4 '/>
            </div>
            <div className='flex justify-between items-center flex-1 px-4'>
            <p className='text-2xl font-bold '>₹92,312.20</p>
            <div className='flex gap-2 items-center cursor-pointer'>
              <p className='text-md text-[#146EB4] underline'>13 orders</p>
              <img src={RightBlue} className='size-4'/>
            </div>

            </div>
        </div>

        <div className='flex flex-1 flex-col text-slate-800 bg-gray-100 gap-4 rounded-md w-1/3 drop-shadow-md pb-14'>
            <div className='flex gap-2 p-4 pb-2'>
              <p className='text-xs '>Amount Processed</p>
              <img src={Help} className='size-4 '/>
            </div>
            <div className='flex justify-between items-center flex-1 px-4'>
            <p className='text-2xl font-bold '>₹23,92,312.19</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Overview