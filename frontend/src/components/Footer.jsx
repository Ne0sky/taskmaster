import React from 'react';
import {Link} from 'react-router-dom'
import { FaInstagram, FaTwitter,FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-zinc-950 text-white font-primary py-12 w-screen '>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
            <p>
              Phone: <a href='tel:+1234567890' className='text-white'>+91 70446 67525</a>
            </p>
            <p>
              Email: <a href='mailto:info@example.com' className='text-white'>mail@example.com</a>
            </p>
            <p>
              Address: 123 Street, LA, USA
            </p>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
            <ul className='space-y-2'>

            <li key='home' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300   py-2 hover:text-indigo-700'>
            <Link to='/'>home</Link>
            </li>

            <li key='about' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
            <Link to='/about'>about</Link>
            </li>

            <li key='tasks' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
            <Link to='/tasks'>tasks</Link>
            </li>

            <li key='login' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
               <Link to='/login'>login</Link>
               </li>

               <li key='signup' className='text-white text-lg font-primary px-4 h-full  transition-all duration-300    py-2 hover:text-indigo-700'>
               <Link to='/signup'>signup</Link>
               </li>
              
              
            </ul>
          </div>
          <div>
            <h2 className='text-xl font-semibold mb-4'>Connect With Us</h2>
            <div className='flex space-x-4'>
              <a href='#' className='text-white hover:text-indigo-500'>
                <FaInstagram/>
              </a>
              <a href='#' className='text-white hover:text-indigo-500'>
                <FaTwitter/>
              </a>
              <a href='#' className='text-white hover:text-indigo-500'>
                <FaFacebookF/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






