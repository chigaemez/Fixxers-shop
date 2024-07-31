import react, { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product/Product'
import Header from './components/Header'
import Cart from './components/cart/Cart'
import Product_detail from './components/Product/Product_detail'
import Checkout from './components/Checkout/Checkout'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Product_detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>


    </>
  )
}

export default App
