import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/slice/getAllOrders';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom'
import { deleteOrder } from '../../redux/slice/deleteSlice';
import { orderStatus } from '../../redux/slice/updateOrder';

const Orders = () => {

  const { isLoading, orders, error } = useSelector(state => state.orders);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      dispatch(deleteOrder(id)).then(() => {
        dispatch(getAllOrders()); // refresh the list
      });
    }
  };


  return (
    <div>
      <h1 className='text-2xl font-semibold py-2 text-gray-700'>All Orders</h1>

      <div className='overflow-x-auto rounded-sm'>
        <table className='w-full text-sm text-center text-gray-600'>
          <thead className='text-xs text-gray-600 bg-gray-200'>
            <tr>
              <th className='px-6 py-3'>Image</th>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Price</th>
              <th className='px-6 py-3'>Qty</th>
              <th className='px-6 py-3'>Status</th>
              <th className='px-6 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>

            {orders?.map((order, orderIndex) =>
              order.items?.map((item, index) => (
                <tr key={index}>
                  <td className='px-6 py-4 flex items-center justify-center'><img
                    className='w-[35px] h-[35px] rounded-sm'
                    src={item.image}
                  /></td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{item.name}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>${item.price}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>{item.qty}</td>
                  <td className='px-6 py-4 font-medium text-gray-800'>
                    <div>
                      <select value={order.orderStatus}
                        onChange={(e) => dispatch(orderStatus({ id: order._id, status: e.target.value }))
                          .then(() => dispatch(getAllOrders()))}
                        className={`${order.orderStatus === "Delivered" ? "text-green-600 font-semibold" : ""}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center justify-center gap-5'>
                      <Link to={`/admin/orders/${order._id}`}>
                        <FaRegEdit fontSize={22} className='text-green-500 cursor-pointer' />
                      </Link>
                      <button onClick={() => handleDelete(order._id)}>
                        <MdDeleteOutline fontSize={22} className='text-red-500' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Orders