import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrder } from '../redux/slice/myOrder'

const MyOrder = () => {

  const { isLoading, order, error } = useSelector(state => state.userOrder)
  console.log(order)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserOrder())
  }, [dispatch])

  return (
    <div className='py-10 px-20 max-h-max'>
      <div className='overflow-x-auto rounded-sm'>

        <h1 className='text-gray-800 text-2xl py-5'>My-Orders</h1>

        <table className='w-full text-sm text-center text-gray-600'>
          <thead className='text-xs text-gray-600 bg-gray-200'>
            <tr>
              <th className='px-6 py-3'>Image</th>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Price</th>
              <th className='px-6 py-3'>Qty</th>
              <th className='px-6 py-3'>Status</th>
            </tr>
          </thead>
          <tbody>
            {order && order.map((singleOrder) => (
              singleOrder.items.map((item) => (
                <tr key={item._id}>
                  <td className='px-6 py-4 font-medium text-gray-800'>
                    <img src={item.image} className='w-[45px] h-[45px]' alt={item.name} />
                  </td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{item.name}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>${item.price}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{item.qty}</td>
                  <td className={`px-6 py-4 font-medium ${singleOrder.orderStatus === 'Delivered'
                      ? 'text-green-500'
                      : singleOrder.orderStatus === 'Processing'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}>{singleOrder.orderStatus}</td>
                </tr>
              ))
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrder