import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className='py-10 flex items-center justify-center'>
            <input type='text' placeholder='Search Product'
            className='py-2 px-4 max-w-[350px] w-[650px] border border-gray-500 focus:outline-none text-gray-400 focus:border-blue-500 rounded-sm'
            />
        </div>
    </div>
  )
}

export default SearchBar