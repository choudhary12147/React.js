
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './InfoBox.css';

export default function InfoBox({info}) {

    const INI_URL = "https://images.unsplash.com/photo-1527666466760-f6a7a2b31176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhemV8ZW58MHx8MHx8fDA%3D";
      
     const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     const HOT_URL = "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"; 
    
    return(


        <div className="InfoBox">


            <h1>{info.city} weather</h1>


         <div className='box'>

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {(info.humidity >60)?RAIN_URL:(info.temp > 18)?HOT_URL:COLD_URL }
        title="green iguana"
      />


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
                <span>Temperature :{info.temp} &deg;C</span> 
                <br></br>
                <span>Humidity    :{info.humidity} </span>
                 <br></br>
                <span>Min Temp    :{info.tempMin}  </span>     
                  <br></br>
                <span>Max Temp    :{info.tempMax}  </span>
                 <br></br>
               <span>feels like    :{info.feel_like} </span>
                <br></br>
                <span> weather : {info.weather}  </span>
        </Typography>
      </CardContent>

    </Card>
         </div>

        </div>
    );
}