import React from 'react';
import { Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
// import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import api from './Data/datapost'
// import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import Mhome from './Mhome';

const Mapp = () => {
    const [menu,setMenu] =useState([])
    
    const [items,setItems] =useState([])
    useEffect(()=>{
        const fetch_data=async ()=>{
        try{
        const response= await api.get('/array')
        setMenu(response.data['categorys'])

        } 
        catch (err){

            console.log(err.stack)
        }
        }
        fetch_data()
        
    },[])
      useEffect(() => {
        const processData = () => {
          const ls = menu.reduce((acc, item) => {
            // console.log("Single items",item)
            // console.log(item["menu-items"])
            const aw = item["menu-items"].map((aws) => {
              const price_item =aws["sub-items"].map((sub_item)=>{
                return [sub_item["id"],sub_item["name"],sub_item["price"]]
              })
              return [aws.name, aws.description,price_item];
              
            });

            return [...acc, ...aw];
          }, []);
          setItems(ls);
        };
    
        processData();
      }, [menu]);
    
      // console.log("gi", items);
      const [cart_items,setCart_items] =useState([])

      // const newItems = [{
      //   "id": 1,
      //   "title": "1st post",
      //   "datetime": "July 16, 2021 11:47:39 AM",
      //   "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      // },
      // {
      //   "id": 2,
      //   "title": "Second post",
      //   "datetime": "July 16, 2021 11:47:48 AM",
      //   "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
      // }];
      // console.log(newItems)
  
      // setCart_items(newItems)
      // // setCart_items((pre)=>[...pre , newItems])
      // console.log("husd",cart_items)

    return (
        <div>
          <Routes>
                <Route  path='/login' element={<Login />}/>  
                {/* <Route  path='/' element={<Mhome />} /> */}
                <Route path='/' 
                    element={<Menu 
                      items={items}
                      setItems={setItems}
                      cart_items={cart_items}
                      setCart_items={setCart_items}
                />} />
                <Route path='/cart' element={<Cart 
                      cart_items={cart_items}
                      
                        />} />
          </Routes>

        </div>
      );
}

export default Mapp
