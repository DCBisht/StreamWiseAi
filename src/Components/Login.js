import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
      </div>
      <form className=' bg-opacity-80 absolute rounded-lg p-14 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className=' font-bold text-3xl p-2 mb-6'> Sign In</h1>
        <input type='text' placeholder='Email address' className='rounded-lg p-2 m-2 w-full'/>
        <input type='password' placeholder='Password' className='rounded-lg p-2 m-2 w-full'/>
        <button className='rounded-lg p-2 m-2 mb-10 bg-red-700 w-full'>Sign In</button>
      </form>
    </div>
  )
}

export default Login
