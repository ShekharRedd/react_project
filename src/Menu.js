import React, { useState } from 'react'
import Subitems from './Subitems'
import { Link } from 'react-router-dom'

const Menu = ({cart_items, setCart_items,items,setItems}) => {
  
  const [item_name,setItem_name]=useState([])
  console.log(item_name)
  return (
    <>
    <Link to={'/cart'} 
    >Cart Items</Link>
      <main>
       {
        items.map((menu_item,index)=>
        <ul key={index}>
        <p>Item Name: {menu_item[0]}</p>
        

       {<Subitems 
            item_name={menu_item[0]}
            setItem_name={setItem_name}
            mapping={menu_item[2]}
            cart_items={cart_items}
            setCart_items={setCart_items}            
       />}
      </ul>)
       }
      </main>
    </>
  )
}

export default Menu

