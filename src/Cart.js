import React, { useEffect } from 'react'
import { useState } from 'react'
import Sub_items from './Sub_items'

const Cart = ({cart_items,setCart_items}) => {
  const [total_sum,setTotal_sum] =useState(0)
    console.log("cart items are",cart_items)
    const remove_item =(id)=>{
      console.log("remove_itmes")
      console.log(typeof cart_items)
      console.log(id)
      const new_items=cart_items.filter((pre)=>pre[0]!==id ? pre : null)
      setCart_items(new_items)
    }
    useEffect(()=>{
      let c=0
      const count=cart_items.map((pre)=>{
        c=c+Number.parseInt(pre[1])
      })
      console.log("total sum is ",setTotal_sum(c))      
    },[cart_items])
  return (
    <main>
      <p>Welcome to Cart</p>
      <p>Total amount : {total_sum}</p>
      <ul>
          {cart_items.map((cartItem, index) => (
            <li key={index}>
              <p>ID: {cartItem[0]}</p>
              <p>Price: {cartItem[1]}</p>
              <p>Item: {cartItem[2]}</p>
              <button type="button" onClick={(e)=>remove_item(cartItem[0])}>Delete Item</button>
            </li>
          ))}
        </ul>
        
    </main>
  )
}

export default Cart
