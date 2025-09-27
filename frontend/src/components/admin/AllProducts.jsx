import React, { useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/slice/getProductSlice';

const AllProducts = () => {

  const{isLoading, products, error} = useSelector(state=>state.products)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])

  console.log(products)

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
            {isLoading && <p>Loading...</p>}
            {error && error.message}
            {products.map((product, index)=>(
               <tr key={index}>
              <td className='px-6 py-4 flex items-center justify-center'><img
              className='w-[35px] h-[35px] rounded-sm'
               src={product.image} /></td>
              <td className='px-6 py-4 font-medium text-gray-800'>{product.name}</td>
              <td className='px-6 py-4 font-medium text-gray-800'>${product.price}</td>
              <td className='px-6 py-4 font-medium text-gray-800'>{product.category}</td>
              <td className='px-6 py-4 font-medium text-gray-800'>{product.stock}</td>
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
            ))}
           
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllProducts