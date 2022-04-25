import React from 'react';
import ProductItem from './productItem';

function Products (props){

return(
    <ul>
        {props.products.map(products => { 
             return <ProductItem products={products} key={products.id} />
    })}
    
    </ul>
  )

}

export default Products
