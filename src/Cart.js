import React, { useEffect } from 'react'
import { useState } from 'react'

const Cart = ({cart_items,setCart_items}) => {
  const [total_sum,setTotal_sum] =useState(0)
    
    const remove_item =(id) =>{
      const new_items=cart_items.filter((pre)=>pre[0]!==id ? pre : null)
      setCart_items(new_items)
    }
    useEffect(() => {
      const count = cart_items.reduce((total, cartItem) => {
        return total + Number.parseInt(cartItem[1]);
      }, 0);
      setTotal_sum(count);
    }, [cart_items]);
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