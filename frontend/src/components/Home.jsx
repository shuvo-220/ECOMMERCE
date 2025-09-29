import React from 'react'
import SearchBar from './SearchBar'
import Products from './Products'

const Home = () => {
  return (
    <div className=''>
      <div className='mx-10'>
      <SearchBar />
      <Products />
    </div>
    </div>
  )
}

export default Home