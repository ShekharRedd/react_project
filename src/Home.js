import React from 'react'
import { Link } from 'react-router-dom'
const Home = ({posts}) => {
  return (
    <ul>
      {posts.map((items)=>
      <li key={items.id}>
        <Link to={`/post/${items.id}`}>
        {items.title}
        </Link>
        {items.datetime}
        {items.body}
      </li>
      )}
    </ul>
  )
}

export default Home
