import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
export default function SearchBox(){

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   
     const API_KEY = ""

      let [city,setcity] =  useState("");

      let handleChange = (event)=>{

            setcity(event.target.value);
      }

      let handlesubmit = (event)=>{
            event.preventDefault();
            console.log(city);
            setcity("");

      }
       
     return (
           <>
                     


                <div className='searchbox'>

                <form onSubmit={handlesubmit}>
                      
                <h3>search for the weather </h3>
                     
                     <TextField id="outlined-basic" label="Outlined" variant="outlined"  value={city}

                        onChange={handleChange}
                     />
                       <br></br>
                       <br></br>
                       <Button variant="contained" type='submit'> Search  </Button>  

                </form>
                     
                </div>

           </>

     );

 

}