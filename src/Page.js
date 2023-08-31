import React from 'react'
import { useParams  } from 'react-router';
import { Link } from 'react-router-dom';
const Page = ({posts}) => {
    const { id } =useParams();
    const post=posts.find(post=>(post.id).toString()==='7');
  return (
    <div>
      {post && 
        <>
        <h2>{post.title}</h2>
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
