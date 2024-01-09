import {Menu,Navbar, Overview, Transactions} from './Components'

const App = () => {
  return (
    <div className="flex flex-1 w-screen">
      <div className="bg-menu-200 w-1/6 h-screen">
        <Menu />
      </div>
      <div className='w-11/12 flex flex-col flex-1'>
          <Navbar />
          <hr className='border-[#E6E6E6] w-full border-1'/>
          <Overview />
          <Transactions/>

      </div>

    </div>
  )
}

export default App