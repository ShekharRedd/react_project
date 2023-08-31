import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Post from './Post';  // use useNav
import { Routes,Route,Link} from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Page from './Page';
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
  return (
    <div>
    <Router>
      <p>hello world</p>
      <Nav />
      <Routes>
        <Route  path='/' element={<Home posts={posts} />} />
        <Route  path='/post' element={<Post />} />
        <Route path='/post/:id' element={<Page posts={posts}/>}></Route>
      </Routes>
      <Footer />
    
    </Router>
    </div>
  );
};

export default App;
