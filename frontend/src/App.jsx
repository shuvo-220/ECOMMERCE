import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/user/Register'
import Login from './components/user/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Admin from './components/admin/Admin'
import AdminDashboard from './components/admin/AdminDashboard'
import AddProduct from './components/admin/AddProduct'
import AllProducts from './components/admin/AllProducts'
import Orders from './components/admin/Orders'
import AllUsers from './components/admin/AllUsers'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* admin route */}
        <Route path='/admin' element={<Admin />} >
          <Route index element={<AdminDashboard />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='allproduct' element={<AllProducts />} />
          <Route path='orders' element={<Orders />} />
          <Route path='users' element={<AllUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App