import {Menu, Help, search, down} from '../assets/Navbar';

const Navbar = () => {
  return (
    <div className="flex px-6 py-6  justify-between">
        <div className='flex gap-4 items-center '>
            <p className="text-2xl font-medium">Payouts</p>
            <div className="flex gap-2 place-items-center cursor-pointer">
                <img src={Help} className='w-3 h-3 '/>
                <p className='text-sm text-slate-600 '>How it works</p>
            </div>
        </div>

        <div className='flex gap-2 items-center px-4 py-2 rounded-md bg-searchbg w-1/3'>
            <img src={search} className='size-4 '/>
            <input type="text" placeholder='Search features, tutorials,etc' className='bg-transparent outline-none'/>
        </div>

        <div className='flex gap-4 items-center'>
            <button>
            <img src={Menu} className='size-8'/>
            </button>
            <button>
                <img src ={down} className='rounded-full bg-[#E6E6E6] p-3'/>
            </button>

        </div>
    </div>
  )
}

export default Navbar