import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  const cart = JSON.parse(localStorage.getItem('cart'))

  const navigate = useNavigate();

  const totalItems = cart.reduce((a, c) => a + c.qty, 0);
  const totalPrice = cart.reduce((a, c) => a + c.qty * c.price, 0)

  const shippingPrice = 5
  const totalShippingPrice = cart.length === 0 ? 0 : (totalPrice >= 1000 ? 0 : shippingPrice)

  const[address, setAddress] = useState();
  const[phone, setPhone] = useState();
  const[postalCode, setPostalCode] = useState();
  const[district, setDistrict] = useState();
  const[division, setDivision] = useState();  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const customerInfo={
      address,phone,postalCode,district,division
    }
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
    navigate('/placeOrder')
  }

  return (
    <div className='px-20 py-10 h-screen'>
      <div className='flex gap-10 items-center justify-center'>
        <div className='flex-2'>
          <h2 className='py-5 text-gray-500 text-2xl'>Customer Info</h2>

          <form onSubmit={handleSubmit}>

            <div className='flex item-center gap-5'>
              <div className='border border-gray-300 '>
                <input type='text' className='py-1 px-2 focus:outline-none text-gray-500'
                  value={user.name} />
              </div>

              <div className='border border-gray-300'>
                <input type='email' className='py-1 px-2 focus:outline-none text-gray-500'
                  value={user.email} />
              </div>
            </div>

            <div className='max-w-md border mt-5 border-gray-300'>
              <input type='text' placeholder='Your Address'
                className='w-full py-1 px-2 focus:outline-none text-gray-500'
                onChange={(e)=>setAddress(e.target.value)}
                required
              />
            </div>

            <div className='flex item-center gap-5 mt-5'>
              <div className='border border-gray-300' >
                <input type='number' placeholder='Your Number'
                  className='py-1 px-2 focus:outline-none text-gray-500'
                  onChange={(e)=>setPhone(e.target.value)}
                  required />
              </div>

              <div className='border border-gray-300'>
                <input type='number' placeholder='Postal Code'
                  className='py-1 px-2 focus:outline-none text-gray-500'
                  onChange={(e)=>setPostalCode(e.target.value)} required />
              </div>
            </div>

            <div className='flex item-center gap-5 mt-5'>
              <div className='border border-gray-300' >
                <input type='text' placeholder='District'
                  className='py-1 px-2 focus:outline-none text-gray-500' 
                  onChange={(e)=>setDistrict(e.target.value)} required/>
              </div>

              <div className='border border-gray-300'>
                <input type='text' placeholder='Division'
                  className='py-1 px-2 focus:outline-none text-gray-500'
                  onChange={(e)=>setDivision(e.target.value)} required/>
              </div>
            </div>

            <div className='flex items-center w-full gap-55 mt-5'>
              <Link to='/cart' className='text-blue-500 underline'>Return To Cart</Link>
              <button className=' py-1 px-5 text-center bg-neutral-600 text-white hover:bg-neutral-950 duration-300 cursor-pointer' >Continue</button>
            </div>

          </form>
        </div>
        <div className='flex-1 bg-gray-50 py-5 px-3 rounded-sm max-h-max'>
          <h3 className='text-gray-500 text-2xl py-5'>Your cart</h3>
          <div>
            {
              cart.map((cart, index) => (
                <>
                  <div key={index} className='flex'>
                    <div className='flex items-center gap-5'>
                      <img src={cart.image} className='w-[35px] h-[35px]' />
                      <Link to={`/product/${cart._id}`} className='text-sm text-blue-500 underline'>{cart.name}</Link>
                      <span className='text-gray-500'>{cart.qty}</span>
                      <p className='text-gray-600 font-semibold'>${cart.price}</p>
                    </div>

                  </div>

                </>

              ))
            }

            <div className='flex flex-col'>
              <div className='flex items-center justify-between'><h3 className='text-gray-500'>Total Shipping Price : ${totalShippingPrice}</h3></div>
              <div><h3 className='text-gray-500'>Sub Total :  {totalPrice}</h3></div>
              <hr className='text-gray-500'/>
              <div><h3 className='text-gray-500 font-semibold py-1'>Total Price : ${totalShippingPrice + totalPrice}</h3></div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout