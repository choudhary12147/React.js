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


             <h2 className=" text-center">{data[indx].name}</h2>
           
               <img src= {data[indx].image} alt={data[indx].name}></img>

         
          <div  className=" flex mt-5 mb-3">
             
                 <button className=" bg-lime-700 px-2 py-1  rounded-md"> Add</button>

                  
                 <div className=" ml-8" >
                    <button className=" border px-2 mr-1"  onClick={handleIncclick}>+</button>
                      
                      <span>{count}</span>

                   <button className=" border px-2 ml-1" onClick={handleDecClick} >-</button>
                 </div>

          </div>
        
        </div>

      );



}