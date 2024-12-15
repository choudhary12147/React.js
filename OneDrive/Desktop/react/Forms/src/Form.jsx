import { useState } from "react";

export default function Form() {

     let [fullname ,setfullname] = useState("sunil");


       let handleNameChange = (event) =>{
               setfullname(event.target.value);
       }


     
          return (
            <>
                <form>

                    <input placeholder="write somethings"  value={fullname} onChange={handleNameChange} >

                    </input>

                    <button>
                        submit
                    </button>


                </form>
            </>
          );

}