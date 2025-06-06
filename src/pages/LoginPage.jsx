import { ScanFace } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLogin } from '../validator/schemaInput'
import { toast } from 'react-toastify'
import useAuthStore from '../stores/authStore'


const initialInput = {
  username: "",
  password: "",
}

function LoginPage() {

  const navigate = useNavigate()
  const actionLogin = useAuthStore( state => state.actionLogin)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading }
  } = useForm({
    defaultValues: initialInput,
    shouldFocusError: true,
    resolver: yupResolver(schemaLogin)

  })

  const onSubmit = async (data) => {
    try {
      await actionLogin(data)
      reset();
      navigate('/todo')
      toast.success("LOGIN SUCCESS")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-screen h-screen bg-pink-950 grid place-items-center'>
      <div className="p-12 bg-pink-200 rounded-2xl w-2/5 shadow-xl">
        <h1 className='text-2xl mb-4'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
            <input
              {...register("username")}
              className="px-4 py-2 bg-gray-300 outline-0 text-center rounded-2xl w-full"
              type='text'
              placeholder='username' />
          </div>
          {errors.username && <p className='text-red-500 text-center'>{errors.username?.message}</p>}
          <div>
            <input
              {...register("password")}
              className="px-4 py-2 bg-gray-300 outline-0 text-center rounded-2xl w-full"
              type='password'
              placeholder='password' />
          </div>
          {errors.password && <p className='text-red-500 text-center'>{errors.password?.message}</p>}
          <button disabled={isLoading} className='flex items-center justify-center gap-1 bg-pink-400 text-white py-2 rounded-xl cursor-pointer hover:bg-pink-700 duration-300'>
            {isLoading ? (<>
              <ScanFace className='w-6 h-6' />
              <span>LOGIN</span>
            </>
            ) : (
              <>
                <ScanFace className='w-6 h-6' />
                <span>LOGIN</span>
              </>
            )}

          </button>
        </form>
        <Link className='text-xs p-1 text-center text-gray-600 mt-4 inline-block' to='/register'>REGISTER</Link>
      </div>
    </div>
  )
}

export default LoginPage