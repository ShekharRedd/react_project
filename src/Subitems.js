
import React, { useState } from 'react';

const Subitems = ({ cart_items,setCart_items,item_name, setItem_name, mapping }) => {
  
  const [checkedItems, setCheckedItems] = useState({});

  
  const Calculate = (id, item, price) => {
    const newCheckedItems = { ...checkedItems };
    
    newCheckedItems[id] = !newCheckedItems[id];

    setCheckedItems(newCheckedItems);
  
    if (newCheckedItems[id]) {
      const newItems = [id, price, item];
      setCart_items((prev) => [...prev, newItems]);
    } else {
      const remove_item = cart_items.filter((pre) => pre[0] !== id);
      setCart_items(remove_item);
    }
  };
 
  
  return (
    <li> 
      Select Order to Add Cart
      
        {mapping.map((subItem,index) => (
         <ul key={index}>
          
          <li >
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
export default Subitems;




