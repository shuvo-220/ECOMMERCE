import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slice/categorySlice';

const Category = () => {

    const{products} = useSelector(state=>state.products);
  
    const dispatch = useDispatch();

    const[categoris, setCategories] = useState([])

    const selectedCategory = useSelector(state=>state.category.category)
    console.log(selectedCategory)

    useEffect(()=>{
         const uniqueCategories = [...new Set(products.map((item)=>item.category))];
         setCategories(uniqueCategories)
    },[products])

  return (
    <div className='flex flex-col items-start'>
        <button onClick={()=>dispatch(setCategory('all'))} 
        className={` ${selectedCategory === 'all' ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>All</button>
        {
            categoris.map((item, index)=>(
                <button onClick={()=>dispatch(setCategory(item))} key={index}
                className={` ${selectedCategory === item ? 'text-blue-500 font-bold' : 'text-gray-700'}`}
                >{item}</button>
            ))
        }
    </div>
  )
}

export default Category