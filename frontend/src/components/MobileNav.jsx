import React, { useEffect, useState } from 'react';
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
import { useAuthContext } from '../hooks/useAuthContext';
import {Link} from 'react-router-dom';
import {useLogout} from '../hooks/useLogout'
import {motion} from 'framer-motion';

const menuVariants = {
    hidden:{
        x:'100%'
    },
    show:{
        x:0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
};

const MobileNav = () => {
    const {user} = useAuthContext()
    const { logout } = useLogout()
  
  const handleClick = () =>{
    logout()
  }
    const [openMenu, setOpenMenu] = useState(false);
    

    
       
  return (
    <nav className=' md:hidden'>
        <div onClick={()=>setOpenMenu(true)} className={'text-indigo-500 text-3xl cursor-pointer'}>
           <CgMenuRight/>
        </div>

        {/* Menu */}
        <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show': ''}
        className='bg-gradient-to-b from-black to-zinc-900 shadow- w-full absolute
        top-0 right-0 max-w-xs h-screen z-20 text-white'>
            
            <div onClick={()=>{setOpenMenu(false)}} className='text-4xl absolute z-30 left-4 top-14
             cursor-pointer text-white'><IoMdClose/></div>
            {/* menu list */}
            <ul className='h-full flex flex-col justify-center
            items-center gap-y-8  font-primary first-letter:first
            font-medium text-2xl '>
                <li key='home' className=' text-base  py-4   transition-all duration-300    hover:text-indigo-700'>
            <Link to='/'>home</Link>
            </li>

            <li key='about' className=' text-base  py-4   transition-all duration-300    hover:text-indigo-700'>
            <Link to='/about'>about</Link>
            </li>

            <li key='tasks' className=' text-base  py-4   transition-all duration-300     hover:text-indigo-700'>
            <Link to='/tasks'>tasks</Link>
            </li>
          
            {user && (<div className='flex-col flex md:flex-row'>
            <span className=' text-base  py-4  border-r-2 border-hidden md: border-white '>{user.email}</span>
          <button onClick={handleClick} className='border text-base border-rose-600 px-2  rounded-full mx-2 '>Logout</button>
            </div>)}

            {!user && (
              <>
               <li key='login' className=' text-base py-4  transition-all duration-300    hover:text-indigo-700'>
               <Link to='/login'>login</Link>
               </li>
               <li key='signup' className=' text-base py-4  transition-all duration-300   hover:text-indigo-700'>
               <Link to='/signup'>signup</Link>
               </li>
               </>
            )}
            </ul>
        </motion.div>
    </nav>
  )
}

export default MobileNav