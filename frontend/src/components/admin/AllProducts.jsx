import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllProducts = () => {
  return (
    <div>
      <h1 className='text-2xl font-semibold py-2 text-gray-700'>All Products</h1>

      <div className='overflow-x-auto rounded-sm'>
        <table className='w-full text-sm text-center text-gray-600'>
          <thead className='text-xs text-gray-600 bg-gray-200'>
            <tr>
              <th className='px-6 py-3'>Image</th>
              <th className='px-6 py-3'>Name</th>
              <th className='px-6 py-3'>Price</th>
              <th className='px-6 py-3'>Category</th>
              <th className='px-6 py-3'>Stock</th>
              <th className='px-6 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-6 py-4 flex items-center justify-center'><img
              className='w-[25px] h-[25px] rounded-sm'
               src='https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg' /></td>
              <td className='px-6 py-4 font-medium text-gray-800'>Product 1</td>
              <td className='px-6 py-4 font-medium text-gray-800'>$23</td>
              <td className='px-6 py-4 font-medium text-gray-800'>Electronics</td>
              <td className='px-6 py-4 font-medium text-gray-800'>5</td>
              <td>
                <div className='flex items-center justify-center gap-3'>
                  <button>
                    <FaEdit fontSize={20} className='cursor-pointer text-green-500' />
                  </button>
                  <button>
                    <MdDelete fontSize={20} className='cursor-pointer text-red-500' />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllProducts