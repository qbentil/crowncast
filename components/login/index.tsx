import React from 'react'

const Login = ({user}: {user: "admin" | "organizer"}) => {
  return (
    <div className='w-full h-full bg-white flex items-center justify-center'>
        <h2 className='text-2xl font-bold text-gray-800'>Login as {user}</h2>
    </div>
  )
}

export default Login