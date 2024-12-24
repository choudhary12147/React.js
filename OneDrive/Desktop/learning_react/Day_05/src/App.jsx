
import './App.css'

import newdata from './utility/data.js';

import Product from './Product.jsx';

const App =()=>{

  return(<>

        <div className=" bg-slate-800 text-left p-10 rounded-xl">


            <h1 className=" text-blue-600 text-4xl mb-10 text-center"> Product Review</h1>


             <Product  newdata = {newdata}  indx = {0}/>
             <Product newdata = {newdata} indx = {1}/>
             <Product newdata = {newdata} indx = {2}/>
             <Product newdata = {newdata} indx = {3}/>
             <Product newdata = {newdata} indx = {4}/> 


        </div>

  </>);

}

export default App;