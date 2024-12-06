import { useState } from "react";


function Counter() {

       function init() {

              console.log("execute init");
               return Math.floor(Math.random()*10);
       }
    

       let arr = useState(init);

         let [count , setcount] = arr;   // destructure of array
           
         console.log(count);

          function inccount() {
               setcount(count+1);
                console.log(count); // this is execute before the rerender the componenet    
          }
  


       return(
              <div>
              
              <h3> count = {count} </h3>
              <button onClick={inccount}> Increase count</button>

              </div>
         
       );

}

export default Counter;