 import axios from 'axios';
import React, { use, useState } from 'react'
import { jsxs } from 'react/jsx-runtime';


 const App = () => {


   const [formData,setFormData] = useState({
       title:"",
       body:"",
   });
  
   const [response , setResponse] = useState(null);


    let handleChange = (event)=>{
         
        setFormData({...formData,[event.target.name]:event.target.value});

    } 




    let handlsubmit = async (event)=>{
          event.preventDefault();
          console.log(formData);

    try {

     let res =  await axios.post("https://jsonplaceholder.typicode.com/posts",formData);   
     
      setResponse(res.data);
     
     setFormData({
          title:"",
          body:"",        
        });
        
    } catch (error) {
           console.log(error)
    }


    }





   return (
     <div className=' text-center ' >

     <form onSubmit={handlsubmit}>
       <h1>post data to dummy api</h1>
           <br>
           </br>
          <br></br>
         <label for = "title">title:</label>
         <input type='text' name='title' id='title' className=' border-2 rounded-2xl ml-1.5 pl-4'
            onChange={handleChange} value={formData.title}
          placeholder='enter the title'
         ></input>
   
             <br></br>
             <br></br>
            <label for = "body">body:</label>
            <input type='text' name='body' id='body' className=' border-2 rounded-2xl ml-1.5 pl-4'
            onChange={handleChange} value={formData.body}
          placeholder='enter the title'
         ></input>

          <br></br>
          <br></br>
           <button className=' bg-green-600 px-10 rounded-2xl'>submit</button>  

     </form>

       {response&&(
         <div>
         <h2>response:</h2>
         <p>{JSON.stringify(response)}</p>
         </div>
       
        )}
  
     </div>
   )
 }
 
 export default App
 