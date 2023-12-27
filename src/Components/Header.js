import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      console.log("Sign out ho gya bhai tu to!!");
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='flex justify-between w-screen absolute px-16 py-1 bg-gradient-to-b from-black z-10'>
      <img className='w-48' 
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='StreamWise-logo'/>
      <div className=' p-4 text-white {
        
      }'>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header;
