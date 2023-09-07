import React from 'react'

const Login = () => {
  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()}
      >
        <label >UserName</label>
        <input
        type='text'
        
        /> <br></br>
        <label>Password</label>
        <input 
         type='password'
        />
      </form>
    </>
  )
}

export default Login
