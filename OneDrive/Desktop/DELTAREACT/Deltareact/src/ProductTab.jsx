
import Product from "./Product";



function Producttab() {


      let option = ["hi-tech","durable"];
    
    // const option = [<li>"hi-tech"</li> , <li>"durable"</li>];

    // another way



    let option1 = { a:"amit " , b: "hi-tech"};
     
     return (
       <>
         <Product  title = "phone"  price = {30000}  feature = {option} feature1 = {option1} />
         <Product  title = "laptop" price = {60000}   />
         <Product  title = "pen"  price = {9000}  />

       </>     
     );

}
export default Producttab;