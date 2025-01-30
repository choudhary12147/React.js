import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route ,Routes, Router } from 'react-router'
import Allproduct from './pages/Allproduct'
import ProductDetails from './pages/ProductDetails'


let  App = () => {
   
  return (
      <BrowserRouter>
         <Routes>
          <Route path="/" element = {<Homepage/>} ></Route>
          <Route path='/all-products' element = {<Allproduct/>}></Route>
          <Route path='/product-detail'element ={<ProductDetails/>}></Route> 
         </Routes> 
      </BrowserRouter>
  )
}

export default App
