import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route ,Routes, Router } from 'react-router'
import Allproduct from './pages/Allproduct'
import ProductDetails from './pages/ProductDetails'
import ScrollToTop from './validations/ScrollToTop'


let  App = () => {
   
  return (
      <BrowserRouter>
     
     <ScrollToTop/>
         <Routes>   
         <Route path="/" element = {<Homepage/>} ></Route>
          <Route path='/all-products' element = {<Allproduct/>}></Route>
          <Route path='/product-detail/:id'element ={<ProductDetails/>}></Route> 
          </Routes> 
         
          
        
      </BrowserRouter>
  )
}

export default App
