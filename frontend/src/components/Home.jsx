import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import Products from './Products'

const Home = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

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