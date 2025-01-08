import Product from "./Product";

import products from "./utility/data.js";


let App = ()=> {

   return(
        
    <div className=" flex flex-wrap  justify-evenly gap-y-1   h-screen">
       
       <Product products = {products} indx = {0}/>
       <Product products = {products} indx = {1}/>
       <Product products = {products} indx = {2}/>
       <Product products = {products} indx = {3}/>
       <Product products={products} indx={4}/>
       <Product products={products} indx={5}/>

    </div>

   );

}

export default App;
