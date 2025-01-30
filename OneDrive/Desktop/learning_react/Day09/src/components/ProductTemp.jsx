import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

const ProductTemp = ({product}) => {

  let [counts, setCounts] = useState(0);
  
  // Handle Increment
   
   let handleIncrement = ()=>{
      
    setCounts(
      counts<=5?counts++:counts
    )
        
   }

   let handleDecrement = ()=>{
         setCounts(counts>0?counts--:counts)
   }



  return (


    <div
    key={product.id}
    className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
  >
     <Link to={"/product-detail"}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-80 w-72 object-cover rounded-t-xl"
      />
   </Link>
    <div className="px-4 py-3 w-72">
      <span className="text-gray-400 mr-3 uppercase text-xs">
        {product.brand}
      </span>
      <p className="text-lg font-bold text-black truncate block capitalize">
        {product.name}
      </p>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-black my-3">
          ${product.price}
        </p>
        <del>
          <p className="text-sm text-gray-600 ml-2">
            ${product.originalPrice}
          </p>
        </del>
      </div>
      <div className="gap-2 flex items-center">
        <button
          className="font-bold text-xl"
          onClick={ handleIncrement}
        >
          +
        </button>
        <span className="relative">{counts}</span>
        <button
          className="font-bold text-xl"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="mt-4">
        <button className="bg-orange-500 text-white rounded-full p-3 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  </div>

  )
}

export default ProductTemp;
