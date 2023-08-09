import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import {useLogout} from '../hooks/useLogout'
import { FaThinkPeaks } from "react-icons/fa";
import { useAuthContext } from '../hooks/useAuthContext';


const Navbar = () => {

  const {user} = useAuthContext()

  const { logout } = useLogout()
  
  const handleClick = () =>{
    logout()
  }

  

  return (
    <header className={` bg-[#00000084] backdrop-filter backdrop-blur-xl border-b border-zinc-600   py-4   fixed top-0 left-0 px-8 z-50 w-screen flex items-center justify-between transition-all duration-300`}>

      
      {/* logo */}
      <h1 className='  text-xl text-white md:text-2xl lg:text-2xl font-primary pl-4 md:pl-16 font-semibold   '>
        <a href='/' className='flex items-center gap-2'><FaThinkPeaks  className='font-bold'/><h1>TaskMaster</h1></a>
      </h1>

      {/* nav - initially hidden, shown on desktop */}
      
      <ul className='hidden md:flex md:items-center pr-16 h-full '>
        
          
            <li key='home' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300   py-2 hover:text-indigo-700'>
            <Link to='/'>home</Link>
            </li>

            <li key='about' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
            <Link to='/about'>about</Link>
            </li>

            <li key='tasks' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
            <Link to='/tasks'>tasks</Link>
            </li>
          
            {user && (<div>
            <span className='text-white text-lg font-primary px-4 h-full border-r-2 border-white py-2'>{user.email}</span>
          <button onClick={handleClick} className='border font-primary border-rose-600 px-2 py-2 rounded-full mx-2 text-white'>Logout</button>
            </div>)}

            {!user && (
              <>
               <li key='login' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
               <Link to='/login'>login</Link>
               </li>
               <li key='signup' className='text-white border border-indigo-700 rounded-full hover:bg-indigo-700 hover:text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 cursor-pointer'>
               <Link to='/signup'>signup</Link>
               </li>
               </>
            )}
          
        
      </ul>
        

      {/* nav menu button - shown by default, hidden on desktop */}

      <MobileNav/>
      
    </header>
  );
};

export default Navbar;

