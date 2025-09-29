import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { decreaseQty, increaseQty, removeCart } from '../redux/slice/AddToCartSlice';

const Cart = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.addToCart);

  const totalItems = cart.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cart.reduce((a, c) => a + c.qty * c.price, 0)

  const shippingPrice = 5
  const totalShippingPrice = cart.length === 0 ? 0 :( totalPrice>=1000 ? 0: shippingPrice)

  const user = localStorage.getItem('user')

  const handleCheckout=()=>{
    if(!user){
      navigate('/login', {state : {from:'/checkout'}})
    }else{
      navigate('/checkout')
    }
  }

  return (
    <div className='px-20 py-8 h-[80vh]'>
      <h1 className='text-2xl text-gray-700 mb-5 '>Cart Details</h1>

      <div className='flex items-center justify-between ml-10 lg:flex-row md:flex-col'>

        <div>
          {cart.length === 0 ? <p>Your Cart is Empty <span onClick={() => navigate('/')} className='cursor-pointer text-blue-500 underline'>Go To Shopping</span></p> : <div>
            {cart.map((cart, index) => (
              <div key={index} className='flex items-center justify-between gap-15'>
                <div>
                  <img src={cart.image} className='w-[80px] h-[80px] object-cover overflow-hidden' />
                </div>
                <div>
                  <p className='text-gray-500 '>{cart.name}</p>
                </div>

                <div className='flex items-center justify-center'> <p className='font-semibold text-neutral-700'>${cart.price}</p></div>
                <div className='flex items-center justify-between gap-8'>
                  <button onClick={()=>dispatch(decreaseQty(cart._id))} disabled={cart.qty === 1} className='bg-gray-50 border border-gray-300 py-1 px-3 rounded-sm font-bold text-gray-500 cursor-pointer'>-</button>
                  <span>{cart.qty}</span>
                  <button onClick={()=>dispatch(increaseQty(cart._id))} className='bg-gray-50 border border-gray-300 py-1 px-3 rounded-sm font-bold text-gray-500 cursor-pointer'>+</button>
                </div>

                <div>
                    <MdDelete onClick={()=>dispatch(removeCart(cart._id))} fontSize={25} className='text-red-500 cursor-pointer' />
                </div>

              </div>
            ))}
          </div>}
        </div>

        <div className='border border-neutral-300 shadow-md p-5 bg-gray-50 rounded-sm fixed top-40 right-10'>
          <div>
            <h3 className='text-gray-700 text-md'>Total Items : {totalItems}</h3>
            <p className='text-gray-700 text-md py-1'>Shipping Price :${totalShippingPrice} </p>
            <p className='text-gray-700 text-md'>Sub-Total : ${totalPrice}</p>
            <hr className='py-1' />
            <p className='text-gray-700 text-lg py-0.5 font-semibold'>Total Price : ${totalPrice + totalShippingPrice}</p>
          </div>
          <button onClick={handleCheckout} className='bg-neutral-700 text-white py-1 w-full rounded-sm hover:bg-neutral-950 duration-300'>Check Out</button>
        </div>
      </div>

    </div>
  )
}

export default Cart