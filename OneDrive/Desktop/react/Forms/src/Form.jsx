import { useState } from "react";

export default function Form() {

     let [formdata ,setformdata]  = useState({
             username:"",
             fullname:"",
             password:""   

     });



     let inputchangehandle = (event)=>{
         
           setformdata( (currdata)=>{
                   
              currdata[event.target.name] = event.target.value;

              return {...currdata};

           })

     }



    //    let handleNameChange = (event) =>{
    //            setfullname(event.target.value);
    //    }


    //    let [username,setusername] = useState("@sunil34");

    //    function handleUsername(event) {
    //                setusername(event.target.value);
    //    }

    function handlesubmit(event) {
              event.preventDefault()
    }

     
          return (
            <>
                <form onSubmit={handlesubmit}>

                <label htmlFor="fullname">Fullname:</label>

                    <input
                     id="fullname" 
                     placeholder="fullname"
                       value={formdata.fullname} 
                       onChange={inputchangehandle} 
                       name="fullname"
                       >

                    </input>

                    {/* <button>
                        submit
                    </button> */}

                     <br></br>


                    <label htmlFor="username">Username:</label>

                    <input id="username" placeholder="username"  
                        value={formdata.username} 
                        onChange={inputchangehandle}
                        name="username" 
                        >

                    </input>

                   <br></br>
                     <label>
                        password:
                     </label>

                   <input
                     type="password"
                     id="password"
                     name="password" 
                     value={formdata.password}
                     onChange={inputchangehandle}
                    >

                   </input>

                     <br></br>
                    <button>
                        submit
                    </button>


                </form>
            </>
          );

}