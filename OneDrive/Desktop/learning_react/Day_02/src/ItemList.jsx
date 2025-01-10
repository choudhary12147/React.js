
import List from "./List";

import { items } from "./utility/data.js";

export default function ItemList() {
    
          return(<>
            <div className=" h-[40px] pt-1  text-white text-center bg-slate-700 mx-[2%]  rounded-sm ">List Mapping project</div>
              <List items = {items}/>
          </>
                
              );      

}