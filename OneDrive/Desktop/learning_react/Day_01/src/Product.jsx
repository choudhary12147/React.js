


export default function Product({products , idx}) {
    

            return(
                  
                <div className=" w-[250px] bg-zinc-200  rounded-md py-2 h-[300px]">
                
                <h2 className=" mb-3 text-lg font-semibold"> {products[idx].name}</h2>

                
                  <img className=" px-2  rounded-xl" src= {products[idx].image} alt='' >

                  </img>


                 <p className=" my-3 text-left ml-4"> Price :{products[idx].price} $</p>

                  
                  <div className=" ml-0">
                      
                      <button className=" bg-green-700  rounded-md ml-0 px-4">Add to cart</button>

                      <button className=" bg-red-700 rounded-md ml-8 px-4"> Remove </button>

                  </div>
                  </div>

            );

}