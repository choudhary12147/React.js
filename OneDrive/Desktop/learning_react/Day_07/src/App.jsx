import { useState } from "react";
import Product from "./Product";
import products from "./utility/data.js";



let App = ()=> {

   let [count , setcount] = useState(0);

   let handlecart = () =>{
        
        setcount(count++);
   }



   return(
     <>


<div className=" flex flex-wrap justify-between  space-x-40 gap-y-1   h-screen">
       
       
    <div className= " w-full h-4 bg-slate-100 py-6 mx-2">
          
           <span class="material-symbols-outlined">
              shopping_cart
                   </span>
          
              <span className=" bg-red-700 rounded-full px-2">{count}</span>
      
     
      </div>
          


       <Product products = {products} indx = {0} cart = {handlecart}  />
       <Product products = {products} indx = {1} />
       <Product products = {products} indx = {2}  />
       <Product products = {products} indx = {3}/>
       <Product products = {products}  indx={4}/>
       <Product products = {products}  indx={5}/>
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
