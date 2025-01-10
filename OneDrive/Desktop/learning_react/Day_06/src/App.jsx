
import products from './utility/data.js';

import Product from './Product';

function App() {
  
   return (

       
       <div className='grid grid-cols-3 grid-rows-2'>
       
       <Product data ={products} indx = {0} />
       <Product data = {products} indx ={1} />
       <Product data = {products} indx = {2} />
       <Product data = {products} indx = {3}/>
       <Product data = {products} indx={4}/>
        <Product data = {products} indx={5}/>

       </div>  
              

   );
   
}

export default App;
