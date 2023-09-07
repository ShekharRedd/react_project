import React from 'react';
import Home from './Home';
import Nav from './Nav';
import Post from './Post';  // use useNav
import { Routes,Route,Link} from 'react-router-dom';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Page from './Page';

import Edit from './Edit';

import api from './Data/datapost'
import { useNavigate } from 'react-router-dom';

const App = () => {

  const [posts, setPosts] = useState([
    {
      "id": 1,
      "title": "1st post",
      "datetime": "July 16, 2021 11:47:39 AM",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 2,
      "title": "Second post",
      "datetime": "July 16, 2021 11:47:48 AM",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. two"
    },
    {
      "id": 3,
      "title": "Number Three",
      "datetime": "July 16, 2021 11:48:01 AM",
      "body": "Third post... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "id": 4,
      "title": "Testing a 4th post",
      "datetime": "August 02, 2021 11:46:27 AM",
      "body": "Some more testing paragraphs!"
    }
  ])
  console.log("before connected")
  // useEffect(()=>{
  //   const fetch_data=async ()=>{
  //     try{
  //     const response= await api.get('/posts')
  //     console.log(response)
  //     setPosts(response.data)
  //     } 
  //   catch (err){

  //       console.log(err.stack)
  //   }
  //   }
  //   fetch_data()
  //   console.log("ram")
  // },[])
  console.log("after connected")
  const [postTitle,setPostTitle] =useState('')
  const [bodyTitle, setBodyTitle] = useState('')
  const navigate = useNavigate(); 


  const HandleSubmit =async (e)=>{
    e.preventDefault()
    const idd=posts.length ? posts[posts.length-1].id +1 : 1

    const newPost = {id:idd ,title: postTitle, datetime:"July 01, 2021 11:17:36 AM",body: bodyTitle}
    try{
    const re=await api.post('/posts',newPost)
    const res=[...posts,re.data]
    setPosts(res)
    setBodyTitle('')
    setPostTitle('')
    console.log(res)
    navigate('/')
    }
    catch(err){
      console.log(err.stack)
    }
  }
  
  const HandleDelete=async (id)=>{
    try{
      await api.delete(`/posts/${id}`)
      const res=posts.filter(post=>post.id !==id)
      console.log(res)
      setPosts(res)
      navigate('/')
    }catch(err){
      console.log(err.stack)
    }
  }

  const [editTitle,setEditTitle] =useState('')
  const [editBody,setEditBody] =useState('')

  const HandleEdit=async (id)=>{
    try {
        const data=posts[0].id
        const res={id,title:editTitle, datetime: "July 16, 2021 11:47:39 AM", body:editBody}
        const updated= await api.put(`/posts/${id}`,res)
        const newEdit=posts.map((post)=>post.id===id ? {...updated.data} : post)
        setEditBody('')
        setEditTitle('')
        setPosts(newEdit)
        console.log("haa")
        navigate('/')
    } catch (error) {
    }
  }
  return (
    <div>
    
      <p>hello world</p>

      <Nav />
      <Routes>
      <Route  path='/login' element={<Login />}
      />  
        <Route  path='/' element={<Home posts={posts} />} />
        <Route  path='/post' element={<Post 

              setPostTitle={setPostTitle} 
              setBodyTitle={setBodyTitle}
              HandleSubmit={HandleSubmit}
              />}
          />
        <Route path='/post/:id' element={<Page 
        posts={posts}
        HandleDelete={HandleDelete}
        HandleEdit={HandleEdit}
        />} />
        <Route path='/post/edit/:id' element={<Edit 
        posts={posts}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editBody={editBody}
        setEditBody={setEditBody}
        HandleEdit={HandleEdit}
        />} />
      </Routes>
      <Footer />
      
      
    </div>
  );
};

export default App;
