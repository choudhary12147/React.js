import { useEffect, useState } from "react";


 export default function Comment(){

    const [data , setdata] =  useState(null);




     useEffect(()=>{

        const FetchData = async () =>{
          
              try {
                 const response = await fetch("https://jsonplaceholder.org/posts"); 

                  const data = response.json();

                  // setdata(data);

             } catch (error) {
                 console.log(error);
             }

           setdata(data);
        }

     },[])

     return (

           <>

                

           </>         

          );

 }

