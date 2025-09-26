import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [open, setOpen] = useState(false)


  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''

  return (
    <>
      <div className='py-5 md:px-20 sticky top-0 px-5 backdrop-blur-md shadow-md'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <span className='font-semibold text-xl tracking-widest text-neutral-900 uppercase'>ecommerce</span>
          </div>

          {/* cart and profilr */}
          <div className='flex items-center gap-10'>
            <div className='relative'>
              <FaShoppingCart fontSize={25} className='cursor-pointer' />
            </div>
            <span className='absolute md:top-2 md:right-36 h-[23px] w-[23px] flex items-center justify-center bg-neutral-500 text-white rounded-full sm:right-21 sm:top-3 top-3 right-21'>0</span>
            <div className='bg-gray-700 w-[35px] h-[35px] rounded-full flex items-center justify-center relative'>
              <span onClick={()=>setOpen(!open)} className=' text-white text-lg cursor-pointer'>{user.image ? <img src={user.image} /> : user.name[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {open && <div className='absolute py-3 px-3 shadow-md bg-white rounded-sm md:right-10 md:top-15 right-4 top-15'>
        <div className='flex flex-col justify-center gap-2'>
          <Link className='text-neutral-500 hover:text-neutral-800 duration-300'>Profile</Link>
          <Link className='text-neutral-500 hover:text-neutral-800 duration-300'>My Orders</Link>
          <Link className='text-neutral-500 hover:text-neutral-800 duration-300'>Logout</Link>
        </div>
      </div>}
    </>
  )
}

export default Navbar