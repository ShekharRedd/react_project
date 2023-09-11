import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Mhome = () => {
  return (
    <>
    <h1>Nare Kabey Restarent</h1>
    <ul>
        {/* <Login />     */}
        <Link to={'/'} >Menu Card</Link>
    </ul>
        
    </>
  )
}

export default Mhome
