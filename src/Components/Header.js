import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector((store)=>store.user);
  const handleSignOut= ()=>{
    signOut(auth).then(() => {
      console.log("Sign out ho gya bhai tu to!!");
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, userName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]);
  return (
    <div className='flex justify-between w-screen absolute px-16 py-1 bg-gradient-to-b from-black z-10'>
      <img className='w-48' 
      src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='StreamWise-logo'/>
      { user && (
      
      <div className=' p-4 text-white flex '>
        <img src={user.photoURL} className=' w-10 h-10 mx-2 my-1 p-1' alt='user_png'/>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header;
