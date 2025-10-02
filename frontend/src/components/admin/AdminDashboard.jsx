import React, { useEffect } from 'react'
import { FaChartLine } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/slice/userSlice';
import { getProduct } from '../../redux/slice/getProductSlice';

const AdminDashboard = () => {

  const{products} = useSelector(state=>state.products)
  const{users} = useSelector(state=>state.users)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getProduct())
  },dispatch)

  return (
    <div>
        <h1 className='text-xl text-neutral-700 py-3'>Dashboard Analytics</h1>

        <div className='flex item-center gap-5'>

          <div className='py-2 px-4 shadow-md flex-1 bg-white rounded-sm'>
            <h3 className='text-lg font-semibold text-neutral-500'>Total Sale</h3>
            <div className='flex items-center justify-between py-2'>
              <FaChartLine fontSize={25} className='text-green-500' />
              <span className='font-semibold text-gray-600 text-lg mr-5'>$544</span>
            </div>
          </div>

          <div className='py-2 px-4 shadow-md flex-1 bg-white rounded-sm'>
            <h3 className='text-lg font-semibold text-neutral-500'>Total Orders</h3>
            <div className='flex items-center justify-between  py-2'>
              <BiSolidShoppingBags fontSize={25} className='text-purple-500' />
              <span className='font-semibold text-gray-600 text-lg mr-5'>12</span>
            </div>
          </div>

          <div className='py-2 px-4 shadow-md flex-1 bg-white rounded-sm'>
            <h3 className='text-lg font-semibold text-neutral-500'>Total Products</h3>
            <div className='flex items-center justify-between  py-2'>
              <AiFillProduct fontSize={25} className='text-orange-500' />
              <span className='font-semibold text-gray-600 text-lg mr-5'>{products.length}</span>
            </div>
          </div>

          <div className='py-2 px-4 shadow-md flex-1 bg-white rounded-sm'>
            <h3 className='text-lg font-semibold text-neutral-500'>Total Users</h3>
            <div className='flex items-center justify-between  py-2'>
              <FaUsers fontSize={25} className='text-gray-600' />
              <span className='font-semibold text-gray-600 text-lg mr-5'>{users.length}</span>
            </div>
          </div>

        </div>

        {/* cart bar */}
        <div className='pt-5'>
          <h2>Chart Bar WIll Be Here...</h2>
        </div>

    </div>
  )
}

export default AdminDashboard