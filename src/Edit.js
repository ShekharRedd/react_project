import React, { useEffect } from 'react'

import { useParams } from 'react-router'
const Edit = ({posts,editTitle,setEditTitle,editBody,setEditBody, HandleEdit}) => {
    const { id } =useParams();
    const post=posts.find(post=>(post.id).toString() === id);

    useEffect(()=>{
        if(post){

        setEditTitle(post.title)            
        setEditBody(post.body)
        
        }
    },[post,setEditBody,setEditTitle])

  return (
    <main>Edit The Page
        <>
        <form onSubmit={(e)=>e.preventDefault()}>
          <h1>Title</h1>
          <input
            type='text'
            placeholder='Title'
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
          />
          <h1>Body</h1>
          <input 
          type='text' 
          placeholder='body'
          value={editBody}
          onChange={(e)=>setEditBody(e.target.value)}
          />
          <button onClick={()=>HandleEdit(post.id)}>Submit</button>
        </form>
        
        
        </>

    </main>        
  )
}

export default Edit
