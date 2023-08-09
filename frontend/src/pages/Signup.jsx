import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await signup (email, password)
    }

  return (
    <form className='signup w-[100%] h-screen  flex flex-col justify-center items-center text-white font-primary' onSubmit={handleSubmit}>
        <div className='text-2xl md:text-4xl  font-medium mb-4 font-primary text-transparent bg-gradient-to-r bg-clip-text from-indigo-600 to-rose-500'>Taskmaster</div>
        <div className='max-w-500 bg-zinc-950 p-4 rounded-lg flex flex-col justify-center'>
        <h3 className='text-2xl font-semibold my-8  text-center  py-2'>Sign up</h3>

        <div className='my-4'>
        <label>Email</label>
        <input type="email"
        className='block w-[300px] py-2 px-4 my-2 rounded-lg bg-zinc-800'
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        />
        </div>

        <div className='my-4'>
        <label>Password</label>
        <input type="password"
        className='block w-[300px] py-2 px-4 my-2 rounded-lg bg-zinc-800'
        onChange={(e)=>setPassword(e.target.value)} 
        value={password}
        />
        </div>

        <button className=' my-4 rounded-md hover:bg-indigo-800 bg-indigo-600 px-4 py-2 ' disabled={isLoading}>Signup</button>
        {error && <div className='px-2 py-2 bg-[#432c2c] border border-rose-700 text-center'>{error}</div>}
        </div>
    </form>
  )
}

export default Signup