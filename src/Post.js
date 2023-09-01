import React from 'react'
import { Link } from 'react-router-dom'

// import {useNavigate} from "react-router-dom"


const Post = ({setPostTitle , setBodyTitle, HandleSubmit}) => {
// const navigate = useNavigate();

  return (
    <main>
        <form>
          <h1>Title</h1>
          <input
            type='text'
            placeholder='Title'
            onChange={(e)=>setPostTitle(e.target.value)}
          />
          <h1>Body</h1>
          <input 
          type='text' 
          placeholder='body'
          onChange={(e)=>setBodyTitle(e.target.value)}
          />
          <button onClick={HandleSubmit}>Submit</button>
        </form>
    </main>
  )
}

export default Post
