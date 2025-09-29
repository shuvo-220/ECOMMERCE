import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slice/addProductSlice'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

  const[name, setName] = useState()
  const[description, setDescription] = useState()
  const[price, setPrice] = useState()
  const[stock, setStock] = useState()
  const[category, setCategory] = useState()
  const[image, setImage] = useState()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('stock', stock)
    formData.append('category', category)
    formData.append('image', image)

    dispatch(addProduct(formData))
    navigate('/admin/allproduct')
  }

  return (
    <div className='flex items-center justify-center mt-10'>
      <div>
        <h1 className='py-3 text-center text-2xl '>Add New Product</h1>
        <form onSubmit={handleSubmit}>

          <div className='py-2'>
            <input type='text' 
            placeholder='Product Name' 
            onChange={(e)=>setName(e.target.value)}
            className='py-1 px-2 border-b border-neutral-500 w-[350px] focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='py-2'>
            <input type='text' 
            placeholder='Product Description' 
            onChange={(e)=>setDescription(e.target.value)}
            className='py-1 px-2 border-b border-neutral-500 w-[350px] focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='py-2'>
            <input type='Number' 
            placeholder='Product Price' 
            onChange={(e)=>setPrice(e.target.value)}
            className='py-1 px-2 border-b border-neutral-500 w-[350px] focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='py-2'>
            <input type='Number' 
            placeholder='Product Stock' 
            onChange={(e)=>setStock(e.target.value)}
            className='py-1 px-2 border-b border-neutral-500 w-[350px] focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='py-3'>
            <input type='text' 
            placeholder='Product Category' 
            onChange={(e)=>setCategory(e.target.value)}
            className='py-1 px-2 border-b border-neutral-500 w-[350px] focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='py-2 border border-dashed w-[350px] px-4 bg-neutral-200 rounded-sm mb-5'>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])} />
          </div>

          <button className='bg-neutral-700 text-white py-2 text-center w-[350px] rounded-sm cursor-pointer hover:bg-neutral-950 duration-300'>Add New Product</button>

        </form>
      </div>
    </div>
  )
}

export default AddProduct