


export default function Product({products , idx}) {
    

            return(
                  
                <div className=' w-40  bg-slate-500  rounded-xl' >
                
                <h2> {products[idx].name}</h2>

                
                  <img className=' rounded-xl  mt-2 mb-2 h-40 w-full'  src= {products[idx].image} alt='' >

                  </img>


                 <p>{products[idx].disc}</p>

                  
                  <div className=' flex space-x-6 mt-2'>
                      
                      <button className=' bg-lime-700  rounded-xl  ml-2 mb-2  px-2 py-2 text-white'>Add </button>

                      <button className=' bg-red-800  rounded-xl   mb-2 px-2 py-2 text-white' >Remove </button>

                  </div>

                

                  </div>

            );


}