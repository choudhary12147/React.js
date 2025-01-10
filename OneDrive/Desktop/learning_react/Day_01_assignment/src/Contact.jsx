

export default function Contact({contacts,idx}) {
            
     return(<>

           <div className=' bg-slate-600 w-40  h-60 rounded-lg'>
               
               <h2>{contacts[idx].name}</h2>
                <h3>{contacts[idx].phone}</h3>
                <h3>{contacts[idx].email}</h3>
                <div>
                   <img src="" alt="photo" ></img>
                </div>
            </div>

     </>); 
    
}