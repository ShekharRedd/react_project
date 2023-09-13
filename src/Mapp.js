import React from 'react';
import { Routes,Route} from 'react-router-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import Cart from './Cart';


const Mapp = () => {
    const [menu,setMenu] =useState([])
    
    
    useEffect(()=>{
        setMenu([
          {
             "id":"26576",
             "name":"Appeteasers",
             "position":"0",
             "menu-items":[
                {
                   "id":"94298",
                   "name":"3 Chicken Wings",
                   "position":1,
                   "description":"Tender sfhj, Spicy and Juicy. Original or Peri-Crusted",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224471",
                         "name":"3 Chicken Wings",
                         "position":1,
                         "price":"250.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94301",
                   "name":"Chicken Livers and Portuguese Roll",
                   "position":2,
                   "description":"Chicken Livers Topped with PERi-PERi Sauce, Served with A Roll To Soak Up The Sauce",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224474",
                         "name":"Chicken Livers and Portuguese Roll",
                         "position":1,
                         "price":"250.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94304",
                   "name":"Spicy Mixed Olives (V)",
                   "position":3,
                   "description":"Co-Starring Garlic, Pepper and Chili",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224477",
                         "name":"Spicy Mixed Olives (V)",
                         "position":1,
                         "price":"215.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94307",
                   "name":"Hummus with PERI-PERI Drizzle (V)",
                   "position":4,
                   "description":"Pour Smoky PERi-PERi Oil Over Creamy Hummus and Dig in with Strips Of Warm Pita",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224480",
                         "name":"Hummus with PERI-PERI Drizzle (V)",
                         "position":1,
                         "price":"215.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94310",
                   "name":"Red Pepper Dip (V)",
                   "position":5,
                   "description":"Dive Into Temping Roasted Red Pepper and Chili Spice Dip with Warm Pita Strips",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224483",
                         "name":"Red Pepper Dip (V)",
                         "position":1,
                         "price":"205.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94313",
                   "name":"Appeteaser Platter",
                   "position":6,
                   "description":"Choose any Three Appeteasers",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224486",
                         "name":"Appeteaser Platter",
                         "position":1,
                         "price":"615.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                },
                {
                   "id":"94316",
                   "name":"All Together Now (V)",
                   "position":7,
                   "description":"Spicy Mixed Olives, Red Pepper Dip, Hummus with PERi-PERi Drizzle and Warm Pita Strips",
                   "images":[
      
                   ],
                   "sub-items":[
                      {
                         "id":"224489",
                         "name":"All Together Now (V)",
                         "position":1,
                         "price":"520.00",
                         "consumable":"1:1",
                         "cuisine_name":"Indian",
                         "category_name":"Appeteasers",
                         "discount":{
                            "type":"",
                            "amount":"0.00"
                         },
                         "tags":[
      
                         ]
                      }
                   ]
                }
             ]
          }
      ]
      )
              
    },[])
    const [items,setItems] =useState([])    
      useEffect(() => {
        const processData = () => {
          const ls = menu.reduce((acc, item) => {
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
   
      
      const [cart_items,setCart_items] =useState([])

      
    return (
        <div>
          <Routes>

                <Route path='/' 
                    element={<Menu 
                      items={items}
                      setItems={setItems}
                      cart_items={cart_items}
                      setCart_items={setCart_items}
                />} />
                     <Route path='/cart' element={<Cart 
                      cart_items={cart_items}
                      setCart_items={setCart_items}
                        />} />                
          </Routes>

        </div>
      );
}

export default Mapp
