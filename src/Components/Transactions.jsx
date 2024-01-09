import {search} from '../assets/Navbar';
import {Download, Ellipse, Sort, EllipseGreen} from '../assets/Transaction';
const Transactions = () => {
  return (
    <div className="flex flex-col gap-5 px-5 pb-10 -mt-10">
        <p className="text-xl font-medium">Transactions | This Month</p>
        <div className="inline-flex gap-4">
          <button className="bg-gray-300 text-gray-600 rounded-2xl px-4 py-2 text-sm ">Payouts (22)</button>
          <button className="bg-card-200 text-white rounded-2xl px-4 py-2 text-sm ">Refunds (4)</button>
        </div>

        <div className="flex justify-between">
          <div className='flex gap-2 items-center px-4 py-2 rounded-md bg-searchbg '>
              <img src={search} className='size-4 '/>
              <input type="text" placeholder='Order ID or transaction ID' className='bg-transparent outline-none'/>
          </div>
          <div className='flex gap-3'>
                <button className='flex gap-2 items-center rounded-md px-4 py-2 border border-gray-200 text-gray-600'>
                  Sort
                  <img src={Sort} className='size-3'/>
                </button>
                <button className='flex gap-2 items-center rounded-md px-4 py-2 border border-gray-200'>
                  <img src={Download} className='size-6'/>
                </button>
          </div>
        </div>

        <div className='flex flex-col gap-2 text-sm text-gray-700'>
          <div className='bg-gray-100 flex justify-between font-medium text-lg text-black'>
            <p className='px-4 py-2 w-1/5'>Order ID</p>
            <p className='px-4 py-2 w-1/5'>Status</p>
            <p className='px-4 py-2 w-1/5'>Transaction ID</p>
            <p className='px-4 py-2 w-1/5'>Refund Date</p>
            <p className='px-4 py-2 w-1/5'>Order Amount</p>
          </div>

          <div className=' flex justify-between '>
            <p className='px-4 py-2 text-card-200 w-1/5'>#281209</p>
            <div className='flex  items-center w-1/5'>
              <img src={EllipseGreen} className='size-3'/>
              <p className='px-4 py-2 '>Successful</p>
            </div>
            <p className='px-4 py-2 w-1/5'>131634495747</p>
            <p className='px-4 py-2 w-1/5'>Today, 08:45 PM</p>
            <p className='px-4 py-2 w-1/5'>₹1,125.00</p>
          </div>

          <hr className='border-[#E6E6E6] w-full '/>

          <div className=' flex justify-between '>
            <p className='px-4 py-2 text-card-200 w-1/5'>#281208</p>
            <div className='flex  items-center w-1/5'>
              <img src={Ellipse} className='size-3'/>
              <p className='px-4 py-2'>Processing</p>
            </div>
            <p className='px-4 py-2 w-1/5'>131634495747</p>
            <p className='px-4 py-2 w-1/5'>Yesterday, 3:00 PM</p>
            <p className='px-4 py-2 w-1/5'>₹1,125.00</p>
          </div>

          <hr className='border-[#E6E6E6] w-full '/>

          <div className=' flex justify-between '>
            <p className='px-4 py-2 text-card-200 w-1/5'>#281207</p>
            <div className='flex  items-center w-1/5'>
              <img src={EllipseGreen} className='size-3'/>
              <p className='px-4 py-2'>Successful</p>
            </div>
            <p className='px-4 py-2 w-1/5'>131634495747</p>
            <p className='px-4 py-2 w-1/5'>12 Jul 2023, 03:00 PM</p>
            <p className='px-4 py-2 w-1/5'>₹1,125.00</p>
          </div>

          <hr className='border-[#E6E6E6] w-full '/>

          <div className=' flex justify-between '>
            <p className='px-4 py-2 text-card-200 w-1/5'>#281206</p>
            <div className='flex  items-center w-1/5'>
              <img src={EllipseGreen} className='size-3'/>
              <p className='px-4 py-2'>Successful</p>
            </div>
            <p className='px-4 py-2 w-1/5'>131634495747</p>
            <p className='px-4 py-2 w-1/5'>12 Jul 2023, 03:00 PM</p>
            <p className='px-4 py-2 w-1/5'>₹1,125.00</p>
          </div>

        </div>
    </div>
  )
}

export default Transactions