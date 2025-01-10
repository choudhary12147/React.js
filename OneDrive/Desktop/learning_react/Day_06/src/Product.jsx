import { useState } from "react";

export default function Product({data, indx}) {

         let [count,setCount] = useState(0);

  function handleIncclick(event) {
              
       event.preventDefault();

          setCount(count++);

  }

  function handleDecClick(event) {
          event.preventDefault();
            
          if(count <= 0){
            alert("no item for remove");
            return;
          }
          setCount(count--);

  } 

            
      return (
           
        <div className=" bg-white px-2">


             <h1  className=" text-center">{data[indx].name}</h1>
           
               <img src= {data[indx].image} alt={data[indx].name}></img>
                   
               <p className="mt-4">{data[indx].price}</p>
         
         
          <div  className=" flex mt-5 mb-3">
             
                 <button className=" bg-lime-700 px-1 py-0  rounded-md"> Add</button>

                  
                 <div className=" ml-2 " >
                        
                    <button className=" mr-2  font-bold"  onClick={handleIncclick}>+</button>
                      
                    
                      <span>{count}</span>

                   <button className=" ml-2 font-bold" onClick={handleDecClick} >-</button>
                 </div>

          </div>


        
        </div>

      );



}