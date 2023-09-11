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
      <Link to={'/login'}>Click Login</Link>

      <Link to={'/menupage'}>Menu List</Link>
      <Link to={'/checkstatus'}>Status Order</Link>
    </ul>

  )
}

export default Home
