import Product from "./Product";
import Navbar from "./Navbar.jsx";


import products from "./utility/data.js";


let App = ()=> {

   return(
     <>




<div className=" flex flex-wrap justify-between  space-x-40 gap-y-1   h-screen">
       
         <Navbar/>
       <Product products = {products} indx = {0}/>
       <Product products = {products} indx = {1}/>
       <Product products = {products} indx = {2}/>
       <Product products = {products} indx = {3}/>
       <Product products={products} indx={4}/>
       <Product products={products} indx={5}/>
       <Product products = {products} indx = {6}/>
       <Product products = {products} indx = {7}/>
       <Product products = {products} indx = {8}/>
       <Product products = {products} indx = {10}/>
       <Product products = {products} indx = {11}/>
       <Product products = {products} indx = {12}/>

    </div>


     </>
        
  

   );

}

export default App;
