
import './Product.css'





function Product({title , price , feature}) {

    // let list = feature.map((fe)=> <li>{fe}</li>);
   
    //  let isdiscount =  price>3000 ? "5%": "";
   
     

        return (
            <div className='product'>
                    <h3> {title} </h3>
                     <h5>{title} price {price} </h5>
                     {/* <p> feature : {list} </p> */}

                 

                      {/* <p> discount : {isdiscount}</p> */}

               {/* { price>300? <p>discount : 5%</p>: null  } */}

               { price>300 &&<p>discount : 5%</p> }

                </div>
    
          )


        
     
            
    

}





/** another way */

// function Product(props) {

    
//        return (
//            <div className='product'>
//                <h3> {props.title} </h3>
//                 <h5>product description</h5>
//            </div>
//        );

// }

export default Product;