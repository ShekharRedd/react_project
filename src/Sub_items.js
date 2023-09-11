import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import Cart from './Cart';
const Sub_items = ({ cart_items,setCart_items,item_name, setItem_name, mapping }) => {
  const [check,setCheck] =useState(false)
  

  // const Calculate = (id, item, price) => {


  //   if(!check){
  //   const newItems = [id,price,item]
  //   setCart_items((pre)=>[...pre,newItems])
  //   setCheck(true)
  //   }
  //   if(check){
  //     const newItems=[id,price,item]
  //     const remove_item=cart_items.filter((pre)=>pre[0]!==id ? pre : null)
  //     setCart_items(remove_item)
  //     setCheck(false)
  //   }
  // };


  const [checkedItems, setCheckedItems] = useState({});

  const Calculate = (id, item, price) => {
    // Toggle the checked state for the clicked item
    // console.log(checkedItems)
    const newCheckedItems = { ...checkedItems };
    console.log("hihih",newCheckedItems)
    newCheckedItems[id] = !newCheckedItems[id];
    console.log(newCheckedItems[id])

    // Update the checked state
    setCheckedItems(newCheckedItems);
    
    // Depending on the checked state, add or remove the item from the cart
    if (newCheckedItems[id]) {
      const newItems = [id, price, item];
      setCart_items((prev) => [...prev, newItems]);
    } else {
      const remove_item = cart_items.filter((pre) => pre[0] !== id);
      setCart_items(remove_item);
    }
  };
  console.log(checkedItems)
  // console.log(cart_items)
  // console.log("ghisdfsf",mapping)
  return (
    <li> 
      Select Order to Add Cart
      
        {mapping.map((subItem,index) => (
         <ul>
          
          <li key={index}>
            <input
              type='checkbox'
              checked={checkedItems[subItem[0]] || false}
              onChange={(e) => Calculate(subItem[0], item_name, subItem[2])}
            />
            {subItem[1]} {subItem[2]}
            {checkedItems[0] && <p>Added one Item add</p>}
          </li>
          </ul>
        ))}
      
    </li>
  );
};
export default Sub_items;




