  export default function Product({newdata , indx}) {
  
          return (<div className="  text-yellow-50 border-slate-50  m-5">
                 
                 <h1>{newdata[indx].productName}</h1>

             
            
              <ol className=" text-white mt-6  mb-28">

                  {newdata[indx].productReview.map((el)=>(<li> <span>*</span>  {el} </li>))}  

                </ol>
             

          </div>);

  }

