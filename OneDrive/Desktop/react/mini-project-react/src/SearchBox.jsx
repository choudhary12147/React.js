import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';



export default function SearchBox({updateInfo}){


   // handle the change of city input

   let [city,setcity] =  useState("");

   let [error ,setError] = useState(false);

   let handleChange = (event)=>{

         setcity(event.target.value);
   }





      // api call and give the details of weather


      

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   
     const API_KEY = "82af70a49bf2a3501a3c9a11e4aa1fc2";


  

          let getweatherinfo = async () => {

         try {

              let response  =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
                    
              let jsonresponse = await response.json();

              console.log(jsonresponse);

                 let result = {

                          city:jsonresponse.name,
                          temp:jsonresponse.main.temp,
                          tempMin:jsonresponse.main.temp_min,
                          tempMax:jsonresponse.main.temp_max,
                          humidity:jsonresponse.main.humidity,
                          weather:jsonresponse.weather[0].description,
                          feel_like:jsonresponse.main.feels_like
                                        
                        
                 };

                 console.log(result);
                 
                   return result;   
                  } catch (error) {
                        throw error; }   
             
  }





      // handle submision of data

      let handlesubmit =  async (event)=>{
           
     
             try {

                  event.preventDefault();
                  
                  setcity("");

                  let newInfo = await getweatherinfo();
                  
                   updateInfo(newInfo); 

                  
             } catch (error) {
                    setError(true);
             }

        

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

                       {error && <p>no details for this  place on api </p>}

                </form>
                     
                </div>

           </>

     );

 

}