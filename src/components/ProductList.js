import React from 'react'
import Product from './Product'

export default function ProductList(props) {
    // console.log(props);
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
        return <Product product={product} key={i} incrementQunatity={props.incrementQunatity} index={i} decrementQunatity={props.decrementQunatity} removeItem={props.removeItem}/>
    })
    : <h1>No Products Exists in the Carts</h1>
  )
}
