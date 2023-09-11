import React from 'react'
import Sub_items from './Sub_items'

const Cart = ({cart_items,setCart_items}) => {
    console.log("cart items are",cart_items)


    const remove_item =(id)=>{
      console.log("remove_itmes")
      const new_items=cart_items.filter((pre)=>pre !==id ? pre : null)
      setCart_items(new_items) 
    }
  return (
    <main>
      <p>Welcome to Cart</p>
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
