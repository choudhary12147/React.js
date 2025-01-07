
import './App.css'


import products from './utility/data';

import Product from './Product';

function App() {
  
   return (

       
       <div className="container">
       
       <Product data ={products} indx = {0} />
       <Product data = {products} indx ={1} />
       <Product data = {products} indx = {2} />

       </div>  
              

   );
   
}

export default App
