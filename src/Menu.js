import React, { useState } from 'react'
import Sub_items from './Sub_items'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Menu = ({cart_items, setCart_items,items,setItems}) => {
  const [check,setCheck]=useState(false)
  const [item_name ,setItem_name] =useState([])
  
  const Change_button=()=>{
    setCheck(!check)
  }
const [cart_list,setCart_list]=useState([])

  return (
    <>
    <Link to={'/cart'} 
    >Cart Items</Link>
      <main>
       {
        items.map((menu_item,index)=>
        <ul>
        <li>Item Name: {menu_item[0]}</li>
        <li>descrition : {menu_item[1]}</li>

       {<Sub_items 
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


//         {/* <select>
//           {menu_item[2].length >3 ?
//           menu_item[2].map((list_item)=>{
//             <input type='checkbox'
//             value={list_item}
//             />
//           })
          
//            :
//           <option >{menu_item[2]}</option>  
//         }
//         </select> */}


// import React, { useState } from 'react';
// import Sub_items from './Sub_items';

// const Menu = ({ items, setItems }) => {
//   const [check, setCheck] = useState(false);

//   const Change_button = () => {
//     setCheck(!check);
//   };

//   const [mapping, setMapping] = useState(0);

//   return (
//     <>
//       <main>
//         {items.map((menu_item) => (
//           <ul key={menu_item[0]}>
//             <li>Item Name: {menu_item[0]}</li>
//             <li>Description: {menu_item[1]}</li>
//             <Sub_items subItems={menu_item[2]} />
//           </ul>
//         ))}
//       </main>
//     </>
//   );
// };

// export default Menu;
