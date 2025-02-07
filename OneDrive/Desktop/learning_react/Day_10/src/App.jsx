import React, { useState } from 'react'

const App = () => {
     
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const HandleChange = (e) => {

    console.log(e.target.name);
    console.log(e.target.value);
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    setformdata({
      name: "",
      email: "",
      message: "",
    });
    console.log(formdata);
  };
        
       
  return (
         <div className=' flex justify-center pt-[200px]'>
                   
                   <div className=' bg-black text-amber-50  w-[350px]  border-amber-50  rounded-2xl pl-16 pt-5 pb-16'>
           <form onSubmit={HandleSubmit}>

             <label for = "username" className=' pl-1.5'>username</label>   <br></br> 
               <input id='username' onChange={HandleChange} className='  
                  border-2 rounded-2xl pl-1.5 
               ' placeholder='enter the username' type='text'></input> 
                <br></br>
                <br></br>

              <label for = "password" className=' pl-1.5'>password</label>     <br></br> 
                <input id='password' onChange={HandleChange} className='
                  border-2 rounded-2xl pl-1.5
                '             
                 placeholder='enter the password' type='password'></input> 
                        <br></br>
                         <br></br>  
                           

                   <button onClick={handleform} className=' bg-red-800 mt-4  px-16 ml-1 rounded-2xl py-2  pb-2.5  '>sign in </button>

           </form>
    </div>
 
         </div>
  )
}

export default App
