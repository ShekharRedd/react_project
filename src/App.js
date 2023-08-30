import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Post from './Post';
import {Routes,Route,Link} from 'react-router-dom';

import { useState, useEffect } from 'react';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <p>hello world</p>
      <Nav />
      <Routes>
        <Route  path='/' element={<Home />} />

        <Route  path='/post' element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
