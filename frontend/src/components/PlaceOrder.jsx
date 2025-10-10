import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createOrder } from '../redux/slice/orderSlice';
import { clearCart } from '../redux/slice/AddToCartSlice';

const PlaceOrder = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();


  const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
  const cart = JSON.parse(localStorage.getItem('cart'));
  const user = JSON.parse(localStorage.getItem('user'))

  const totalPrice = cart.reduce((a, c) => a + c.qty * c.price, 0)

  const shippingPrice = 5
  const totalShippingPrice = cart.length === 0 ? 0 : (totalPrice >= 1000 ? 0 : shippingPrice)

  const totalProductPrice = totalShippingPrice + totalPrice

   const orderData = {
      address: customerInfo?.address,
      phone: customerInfo?.phone,
      postalCode: customerInfo?.postalCode,
      district: customerInfo?.district,
      division: customerInfo?.division,
      items: cart.map(item => ({
        name: item.name,
        qty: item.qty,
        image: item.image,
        price: item.price,
        product: item._id
      })),
      user: user?._id,
      itemsPrice: totalPrice,              
      shippingPrice: totalShippingPrice,   
      totalPrice: totalProductPrice
    }

 const handleOrderClick = async () => {
  try {
    await dispatch(createOrder(orderData)).unwrap();
    dispatch(clearCart());
    localStorage.removeItem("cart");
    localStorage.removeItem("customerInfo");

    navigate("/myorder");
  } catch (err) {
    console.error("Order failed:", err);
  }
};

useEffect(()=>{
  window.scrollTo(0,0)
})

  return (
    <div className='py-5 px-20 h-screen'>
      <div className='flex lg:flex-row md:flex-col items-center justify-between'>

        <div className='flex-1 items-center justify-center'>
          <div className='py-5'>
            <h2 className='text-2xl text-gray-900 mt-3'>My Info:</h2>
            <p className='text-sm text-gray-700 mt-2 ml-3'>Customer Name : {user.name}</p>
            <p className='text-sm text-gray-700 ml-3'>Email : {user.email}</p>
          </div>

          <div>
            <h2 className='text-2xl text-gray-900 mt-3'>Address:</h2>
            <h2 className='text-sm text-gray-700 mt-1 ml-3'>Home Address : {customerInfo.address}</h2>
            <h2 className='text-sm text-gray-700 mt-1 ml-3'>Phone Number : {customerInfo.number}</h2>
            <h2 className='text-sm text-gray-700 mt-1 ml-3'>Postal Code : {customerInfo.postalCode}</h2>
            <h2 className='text-sm text-gray-700 mt-1 ml-3'>District : {customerInfo.district}</h2>
            <h2 className='text-sm text-gray-700 mt-1 ml-3'>Division : {customerInfo.division}</h2>
          </div>

          <button onClick={handleOrderClick} className='bg-neutral-700 text-center text-white py-1 w-full mt-5 cursor-pointer hover:bg-neutral-950 duration-300'>Place Order</button>

        </div>

        <div className='flex-1 items-center justify-center ml-10'>
          <h1 className='text-2xl text-gray-700 mb-5'>My Cart </h1>

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
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center justify-between'><h3 className='text-gray-500'>Total Shipping Price : ${totalShippingPrice}</h3></div>
            <div><h3 className='text-gray-500'>Sub Total :  {totalPrice}</h3></div>
            <hr className='text-gray-500' />
            <div><h3 className='text-gray-500 font-semibold py-1'>Total Price : ${totalProductPrice}</h3></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder