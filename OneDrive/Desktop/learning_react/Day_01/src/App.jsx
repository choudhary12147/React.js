import './App.css';

import Product from './Product';

import products from './utility/data.js';

 function  App(){

  
 
        return(
          <>
          <div className=" flex space-x-2">
          <Product products = {products} idx = {0}/>
            <Product  products={products} idx={1}/>
            <Product products={products} idx={2}/>

          </div>
      
            
              
          </>
        );

 }

 export default App;