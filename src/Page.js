import React from 'react'
import { useParams  } from 'react-router';
import { Link } from 'react-router-dom';
const Page = ({posts,HandleDelete ,HandleEdit}) => {
    const { id } =useParams();
    const post=posts.find(post=>(post.id).toString() === id);
  return (
    <div>
      {post && 
        <>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
        <button onClick={()=>HandleDelete(post.id)}>Delete</button>
        <Link to={`/post/edit/${post.id}`}><button>Edit </button></Link>
        </>
      }
      {!post && 

      <>
      <h1>Visit to Home page</h1>
      <Link to='/' >Visit</Link>
      </>
      }
    </div>
  )
}

export default Page
