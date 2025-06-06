import { ScanFace } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const initialInput = {
  username: "",
  password: "",
}

function LoginPage() {

  const { register, handleSubmit, reset, formState: { errors, isLoading } } = useForm({
    defaultValues: initialInput,
    shouldFocusError: true,
    
  })

  return (
    <div className='w-screen h-screen bg-pink-950 grid place-items-center'>
      <div className="p-12 bg-pink-200 rounded-2xl w-2/5 shadow-xl">
        <h1 className='text-2xl mb-4'>Login</h1>
        <form className='flex flex-col gap-4'>
          <input className="px-4 py-2 bg-gray-300 outline-0 text-center rounded-2xl" type='text' placeholder='username' />
          <input className="px-4 py-2 bg-gray-300 outline-0 text-center rounded-2xl" type='password' placeholder='password' />
          <button className='flex items-center justify-center gap-1 bg-pink-400 text-white py-2 rounded-xl cursor-pointer hover:bg-pink-700 duration-300'>
            <ScanFace className='w-6 h-6' />
            <span>LOGIN</span>
          </button>
        </form>
        <Link to='/register'>REGISTER</Link>
      </div>
    </div>
  )
}

export default LoginPage