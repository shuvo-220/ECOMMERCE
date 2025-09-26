import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Link, Outlet } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaBorderAll } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";


const Admin = () => {
  return (
    <div className="flex h-screen">
        {/* admin layout */}
        <div className='w-64 bg-grey-500 text-black p-5'>
            <h2 className='py-3 text-xl font-bold'>Admin Dashboard</h2>
            <nav className='flex flex-col gap-4'>
              
                    
                    <Link to='/admin' className='flex items-center gap-2 font-semibold text-neutral-600'>
                     <RiDashboardHorizontalFill fontSize={22} />
                     Dashboard
                     </Link>
                    
                    <Link to='/admin/addproduct' className='flex items-center gap-2 font-semibold text-neutral-600'>
                    <IoMdAddCircle fontSize={22} />
                    Add Product
                    </Link>
                    
                    <Link to='/admin/allproduct' className='flex items-center gap-2 font-semibold text-neutral-600'>
                     <AiFillProduct fontSize={22} />
                     All Products
                     </Link>
                    
                    <Link to='/admin/orders' className='flex items-center gap-2 font-semibold text-neutral-600'> 
                    <FaBorderAll fontSize={22} />
                    Orders
                    </Link>
                   
                    <Link to='/admin/users' className='flex items-center gap-2 font-semibold text-neutral-600'>
                    <FaUsers fontSize={22} />
                    All Users
                    </Link>
               
            </nav>
        </div>
        <div className='flex-1 bg-gray-100 p-6 overflow-y-auto'>
            <Outlet />
        </div>
    </div>
  )
}

export default Admin