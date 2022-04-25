import React from 'react';
import ProductItem from './productItem';

const styles = {
  ul: {
    marginTop: '1rem',
    listStyle:'circle',
    fontStyle: 'italic'    
  }
}

function Products (props){

return(
    <ul style={styles.ul}>
        {props.products.map(products => { 
             return <ProductItem products={products} key={products.id} />
    })}
    
    </ul>
  )

}

export default Products
