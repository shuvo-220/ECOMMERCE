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
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
       
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />

        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

        {/* admin route */}
        <Route path='/admin' element={<ProtectedRoute role='admin'><Admin /></ProtectedRoute>} >
          <Route index element={<AdminDashboard />} />
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='allproduct' element={<AllProducts />} />
          <Route path='orders' element={<Orders />} />
          <Route path='users' element={<AllUsers />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App