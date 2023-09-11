import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import Cart from './Cart';
const Sub_items = ({ cart_items,setCart_items,item_name, setItem_name, mapping }) => {
  const [check,setCheck] =useState(false)
  const Calculate = (id, item, price) => {
    if(!check){
    const newItems = [id,price,item]
    setCart_items((pre)=>[...pre,newItems])
    setCheck(true)
    }
    if(check){
      const newItems=[id,price,item]
      const remove_item=cart_items.filter((pre)=>pre[0]!==id ? pre : null)
      setCart_items(remove_item)
      setCheck(false)
    }
  };

  console.log(cart_items)
  return (
    
    <li>
        
      Select Order to Add Cart
      <ul>
        {mapping.map((subItem) => (
          <li key={subItem[0]}>
            <input
              type='checkbox'
              checked={check}
              onChange={(e) => Calculate(subItem[0], item_name, subItem[2])}
            />
            {subItem[1]} {subItem[2]}
          </li>
        ))}
      </ul>
      
      
    </li>
  );
};

export default Sub_items;




