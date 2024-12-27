 
 import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";

import { useState } from "react";

 export default function WeatherApp() {

    const [weather , setweather] = useState(
        {
            city:"jaipur",
            feel_like:24.84,
            temp:25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"haze"
            
   }
    );

        let updateInfo = (newInfo) =>{
            setweather(newInfo);
        };

      
    return (<div>
          
          <h1 style={{textAlign:"center"}}>Weather App by Sunil</h1>

          <SearchBox updateInfo ={updateInfo} />
          <InfoBox info = {weather}/>
           
    </div>)
     
 }