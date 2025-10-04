import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../redux/slice/searchSlice';

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSearch=(e)=>{
    dispatch(setSearchQuery(e.target.value))
  }

  return (
    <div>
        <div className='py-10 flex items-center justify-center'>
            <input type='text' placeholder='Search Product'
            onChange={handleSearch}
            className='py-2 px-4 max-w-[350px] w-[650px] border border-gray-500 focus:outline-none text-gray-400 focus:border-blue-500 rounded-sm'
            />
        </div>
    </div>
  )
}

export default SearchBar