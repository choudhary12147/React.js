import { useState } from "react";



function Activity() {
    
     
       let [isLiked,setIsLiked] = useState(false);

        function toggleLike() {
                 setIsLiked(!isLiked);
        }

          return(
               <div >
                      
                      <button onClick={toggleLike}>

                      {
                        isLiked ? <i class="fa-solid fa-heart"></i>: <i class="fa-regular fa-heart"></i>  
                        
                        }
                      

                      </button>
               </div>
          );

}

export default Activity;