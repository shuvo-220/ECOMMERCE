import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/slice/AddToCartSlice';


const Navbar = () => {

  const [open, setOpen] = useState(false)

  const{cart} = useSelector(state=>state.addToCart)

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(clearCart())
    setOpen(false)
    navigate('/login')
  }

  return (
    <>
      <div className='py-5 md:px-20 sticky top-0 px-5 backdrop-blur-md shadow-md z-99'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Link to='/'>
            <span className='font-semibold text-xl tracking-widest text-neutral-700'>Online<span className='text-blue-500 font-bold'>Mart</span></span>
          </Link>

          {/* cart and profilr */}
          <div className='flex items-center gap-10'>
            <div className='relative'>
              <FaShoppingCart fontSize={25} className='cursor-pointer' onClick={()=>navigate('/cart')} />
            </div>
            <span className='absolute md:top-2 md:right-36 h-[23px] w-[23px] flex items-center justify-center bg-neutral-500 text-white rounded-full sm:right-21 sm:top-3 top-3 right-21'>{cart?.length || 0}</span>
            <div className='bg-gray-700 w-[35px] h-[35px] rounded-full flex items-center justify-center relative'>
              <span onClick={() => setOpen(!open)} className=' text-white text-lg cursor-pointer'>
                {user && user.image ? (
                  <img src={user.image} alt='Profile' className='w-full h-full rounded-full' />
                ) : user && user.name ? (
                  user.name[0]
                ) : (
                  'U' // fallback if no user info
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {open && <div className='absolute py-3 px-3 shadow-md bg-white rounded-sm md:right-10 md:top-15 right-4 top-15 z-999'>
        <div className='flex flex-col justify-center gap-2'>
          <Link to='/profile' onClick={() => setOpen(false)} className='text-neutral-500 hover:text-neutral-800 duration-300'>Profile</Link>
          <Link to='/myorder' onClick={()=>setOpen(false)} className='text-neutral-500 hover:text-neutral-800 duration-300'>My Orders</Link>
          {
            user ? <Link onClick={handleLogout} className='text-neutral-500 hover:text-neutral-800 duration-300'>Logout</Link>
            :<Link to='/login' onClick={()=>setOpen(false)} className='text-neutral-500 hover:text-neutral-800 duration-300'>Login</Link>
          }
        </div>
      </div>}
    </>
  )
}

export default Navbar