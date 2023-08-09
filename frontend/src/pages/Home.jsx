import React from 'react'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
    <div className="min-h-screen flex flex-col md:flex-row lg:flex-row justify-around items-center px-4 md:px-24">

      <div className="h-full mt-40 md:mt-0 md:min-h-screen flex flex-col justify-center w-full md:w-1/2 ">
        <div className='flex items-center'><p className=' text-gray-300 uppercase font-primary font-bold text-md my-6 md:text-2xl'>Efficiency, Collaboration, Empowerment</p>
        <div className=' bg-gray-400 w-[6rem] hidden md:flex h-[2px]'></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl  font-medium mb-10 font-primary text-transparent bg-gradient-to-r bg-clip-text from-indigo-600 to-rose-500">Welcome to Taskmaster</h1>
        <p className="text-lg md:text-xl text-white mb-8 font-secondary">
        TaskMaster is your ultimate task management solution designed to streamline your workflow, 
        enhance collaboration, and help you achieve your goals with ease. TaskMaster offers a range of powerful features 
        tailored to your needs.
        </p>
        <button className=" shadow-xl shadow-[#00000096] border border-[#7484ff7d] bg-[#3b37ff3f]  w-[15rem] text-white py-3 px-6 rounded-md text-lg md:text-xl hover:bg-indigo-800 transition duration-300">
          Get Started
        </button>
        <div className='flex py-8 '>
        <div className='text-white font-primary  px-2 rounded-md w-[15rem] my-8'>
          <p className='text-2xl font-medium'>195k users</p>
          <p className='text-md text-gray-200'>Empowering over 195,000 users worldwide to conquer tasks and achieve their goals.</p>
        </div>
        <div className='text-white font-primary  px-2 rounded-md w-[15rem] my-8'>
          <p className='text-2xl font-medium'>50+ Countries</p>
          <p className='text-md text-gray-200'>TaskMaster bridges geographic gaps, enabling efficient teamwork and task management worldwide.</p>
        </div>
        </div>
      </div>

      <div className='flex justify-center items-center md:ml-8 lg:ml-8'> {/* Use margin classes to adjust spacing */}
        <img src="../src/assets/hero-img.png" className='overflow-hidden max-h-[40rem] w-auto' alt="hero image" />
      </div>

      
    </div>
    <Footer/>
    </div>
  )
}



export default Home