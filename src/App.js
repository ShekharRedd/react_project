import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Post from './Post';  // use useNav
import { Routes,Route,Link} from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Page from './Page';


import { useNavigate } from 'react-router-dom';

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const [postTitle,setPostTitle] =useState('')
  const [bodyTitle, setBodyTitle] = useState('')
  const navigate = useNavigate(); 

  const HandleSubmit =()=>{
    const idd=posts.length ? posts[posts.length-1].id +1 : 1
    console.log(idd)
    console.log(typeof idd)
    console.log(typeof posts[3].id)
    console.log(posts[3].id)
    const newPost = {id:idd ,title: postTitle, datetime:"July 01, 2021 11:17:36 AM",body: bodyTitle}
    const res=[...posts ,newPost]
    
    setPosts(res)
console.log(res)
    navigate('/')
  }
  return (
    <div>
    
      <p>hello world</p>
      <Nav />
      <Routes>
        <Route  path='/' element={<Home posts={posts} />} />
        <Route  path='/post' element={<Post 

              setPostTitle={setPostTitle} 
              setBodyTitle={setBodyTitle}
              HandleSubmit={HandleSubmit}
              />}
          />
        <Route path='/post/:id' element={<Page posts={posts}/>}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
};

export default App;
