import React from 'react'
import { Link } from 'react-router'

function LoginPage() {
  return (
    <div className='w-full h-screen bg-pink-950 grid place-content-center'>
      <div>
        <h1>Login</h1>
        <form>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button>LOGIN</button>
        </form>
        <Link to='/register'>REGISTER</Link>
      </div>
    </div>
  )
}

export default LoginPage