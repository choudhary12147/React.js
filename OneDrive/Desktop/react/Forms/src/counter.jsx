import { useEffect, useState } from "react";




export default function  Counter() {

       let [countx,setcount] = useState(0);

       function incx() {
           setcount(countx =>countx+1);
       }

       let [county,setcounty] = useState(0);

       function incy() {
           setcounty(county => county+1)
       }
    
  useEffect( function print() {
    console.log("this is side effect");  // if any change in state of component and the re-render the useeffect re-render
  },[countx]) 

    return(
        <>

         <div>
          <h2> countx = {countx}</h2>
           
        <br>

        </br>

           <button  onClick={incx}>1+</button>
         </div>

         <div>
          <h2> county = {county}</h2>
           
        <br>

        </br>

           <button  onClick={incy}>1+</button>
         </div>

        </>
    );

}