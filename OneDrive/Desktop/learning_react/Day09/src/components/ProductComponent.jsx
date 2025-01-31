import React from 'react'
import products from '../utility/data';

import ProductTemp from './ProductTemp';

const ProductComponent = () => {



  return (
    <div>
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">
        Responsive Product Card Grid
      </h1>
      <h1 className="text-3xl">Tailwind CSS</h1>
    </div>
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map((product, index) => (
                
          <ProductTemp product={product} index = {index}/>
      
      ))}

    </section>
  </div>
  )
}

export default ProductComponent;
