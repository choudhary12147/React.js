

import { useState } from 'react';

export default function Comment() {      
    
     let [formdata , setformdata] = useState({
            username:"",
            remarks:"",
            rating:5
     })

     let inputchangehandle = (event)=> {
        

         setformdata((currdata)=>{
          currdata[event.target.name] = event.target.value;
        
         return{...currdata};
        })
     }
    
    
    return(
        <>
            <h4>comments</h4>

            <form>
                <input placeholder="username" type="text" 
                value={formdata.username}  
                onChange={inputchangehandle}
                name="username"
                ></input>
                 <br></br>
                 <textarea value={formdata.remarks}  onChange={inputchangehandle}
                 name="remarks" 
                 >Remarks</textarea>
                 <br></br>
                 <input placeholder="rating" type="number" min={1} max={10} value={formdata.rating}
                  onChange={inputchangehandle}
                  name="rating"
                 ></input>
                 <br></br>
                 <button>Add comment</button>
            </form>     

        </>
    );

}