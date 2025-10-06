import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { orderDetailss } from '../../redux/slice/orderDetails';

const OrderDetails = () => {

    const params = useParams()
    const { id } = params;

    const { isLoading, orderDetails, error } = useSelector(state => state.orderDetails)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(orderDetailss(id))
    }, [dispatch, id])

    // console.log(orderDetails.address)
    // console.log(orderDetails.user.name)

    if (!orderDetails) return null;

    return (
        <div className='py-5'>
            <h1 className='text-2xl text-gray-800 mb-5 font-semibold'>Order Details of #{id}</h1>

            <div>

                <div>
                    <h3 className='text-xl text-gry-600'>Customer Info:</h3>
                    <p className='text-md text-gray-500'>Address: {orderDetails.address}</p>
                   { orderDetails.user &&<>
                    <p className='text-md text-gray-500'>Customer:{orderDetails.user.name}</p>
                    <p className='text-md text-gray-500'>Email:{orderDetails.user.email}</p></>}
                    <p className='text-md text-gray-500'>Phone:{orderDetails.phone}</p>
                    <p className='text-md text-gray-500'>Status:{orderDetails.orderStatus}</p>
                    <p className='text-md text-gray-500 font-semibold'>Shipping Price:${orderDetails.shippingPrice}</p>
                    <p className='text-md text-gray-500 font-semibold'>Total Price: ${orderDetails.totalPrice}</p>
                </div>


                <div>
                    {
                        orderDetails.items?.map((item, index)=>(
                            <div key={index} className='flex items-center pt-5 gap-5'>
                                <div>
                                    <img src={item.image} className='w-[50px] h-[50px]' />
                                </div>
                                <div className='flex items-center justify-center gap-5'>
                                    <p className='text-md text-gray-500 font-semibold'>{item.qty}</p>
                                    <p className='text-md text-gray-500 font-semibold'>${item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <Link to='/admin/orders' className='mt-5 text-blue-500 underline'>Back To Orders Page</Link>


            </div>

        </div>
    )
}

export default OrderDetails