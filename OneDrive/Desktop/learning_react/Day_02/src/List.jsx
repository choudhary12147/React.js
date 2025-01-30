


export default function List({items}){
     
    return (
        <div className = ' flex justify-around flex-wrap'>

              {items.map((item)=>( <div className=' bg-slate-500 mt-4 rounded-md w-[200px] h-[250px]'>

                   <img src= {item.image}  className=' rounded-md  absolute w-[200px]'></img> 
                    

                   <h1 className=' relative top-[5px] bg-black left-[50px] pl-2 rounded-md text-md  font-extrabold text-white'>{item.name}</h1>

                     <div className=' relative top-[120px] text-white ml-2'>
                      
                      <h2 className="" > Item : &nbsp; {item.category}</h2>
                      <p> { item.description} </p>

                      <button className=" bg-green-500 rounded-md mt-2 px-[80px]">Buy</button>
                     </div>

                   </div>))}
              </div>
     );
}