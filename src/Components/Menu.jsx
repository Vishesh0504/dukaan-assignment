import {Analytics,
    Customers,
    Appearance,
    Delivery,
    Discounts,
    Home,
    Marketing,
    Orders,
    Payments,
    Products,
    Plugin,
Wallet} from '../assets/Menu';
import nishayan from '../assets/nishayan.png';
import Down from '../assets/Down.png';
const Menu = () => {
  return (
    <div className='flex flex-col flex-1 px-2 py-4 h-screen justify-between'>
        <div className='flex gap-4 items-center mb-7 mr-2'>
            <img className='size-14 rounded-lg' src={nishayan} alt='logo'/>
            <div className = ' text-white font-inter'>
                <p className='font-bold text-base'>Nishayan</p>
                <a className='text-slate-400 underline text-sm' href=''>Visit Store</a>
            </div>

            <button className='ml-auto'>
                <img src={Down} alt='down' className='w-5 h-5 brightness-0 invert'/>
            </button>
        </div>

        <div className='flex flex-1 flex-col gap-2 ml-4 '>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Home} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Home</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Orders} alt='home' className='size-5 invert brightness-0 '/>
                <p className='text-slate-300 font-bold text-base'>Orders</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Products} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Products</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Delivery} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Delivery</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Marketing} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Marketing</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Analytics} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Analytics</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Payments} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Payouts</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Discounts} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Discounts</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Customers} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Audience</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Appearance} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Appearance</p>
            </button>
            <button className='flex gap-3 items-center hover:bg-menu-100 px-4 py-2 rounded-md'>
                <img src={Plugin} alt='home' className='size-5 invert brightness-0'/>
                <p className='text-slate-300 font-bold text-base'>Plugin</p>
            </button>

        </div>
        <div className=' flex items-center px-4 py-2 gap-4 rounded-md bg-menu-100 mb-auto'>
            <img src={Wallet} alt='wallet' className='size-6 invert brightness-0'/>
            <div className='flex flex-col flex-1 '>
                <p className='font-sm text-slate-400'>
                    Available credits
                </p>
                <p className='font-base text-slate-200'>
                    222.10
                </p>
            </div>
        </div>
    </div>
  )
}

export default Menu