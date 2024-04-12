import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Product from './pages/Product'
import { Cart } from './pages/Cart'
import Register from './pages/Register'
import Show from './components/context/Show'
import TestCart from './redux/TestCart'

const MyRoutes = () => {
  return (
    <Router>
<Routes>
   <Route path='' element={<Layout/>}>
   <Route index element={<HomePage/>}/>
   <Route path='login' element={<Login/>}/>
   <Route path='signup' element={<Register/>}/>
   <Route path='productdetails/:product_id' element={<ProductDetails/>}/>
   <Route path='products'element={<Product/>}/>
   <Route path='cart' element={<Cart/>}/>
   <Route path='Show' element={<Show/>}/>
   <Route path='redux/cart' element={<TestCart/>}/>
   </Route>
</Routes>
    </Router>
  )
}

export default MyRoutes