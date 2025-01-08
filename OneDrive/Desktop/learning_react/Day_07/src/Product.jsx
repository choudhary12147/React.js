import { useState } from "react";

export default function Product({products , indx , cart}) {


    let [count,setcount] = useState(0);


    
   let handleInc = ()=>{
          setcount(count++);
           

   }

   let handleDec = ()=>{
          setcount(count--);
   }

  


     return(
          <div className=" w-40  bg-gray-200  h-max  rounded-xl">
              <h1 className=" text-wrap text-center"> {products[indx].name} </h1>
               <img src= {products[indx].image}></img>

               <p></p>
               <h2> ${products[0].price} </h2>

                <div className=" ml-2  mb-2 mt-2">
                
                       <button  onClick={handleInc} className=" text-xl font-semibold mr-1" >+</button>
                    <span>{count}</span>
                    <button onClick={handleDec} className=" text-xl font-semibold ml-1" >-</button>

                </div> 

                <button className=" bg-lime-600 rounded-md px-8 ml-2 mb-1 " onClick={cart}>add to card</button>

          </div>
     );
}