import React from 'react'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div className=" text-white font-primary  flex flex-col mt-24 items-center overflow-x-hidden">

          
          <div className='hero text   flex flex-col md:flex-row items-center max-w-[70%] py-2'>
            <div><h2 className='text-6xl  font-semibold text-indigo-500 py-8'>Our Mission</h2>
            <p className='border-l-2 rounded-xl px-4 py-4 border-indigo-700 font-primary '>At TaskMaster, our mission is to revolutionize the way you approach tasks. 
                We believe that effective task management is the foundation of productivity 
                and success. With TaskMaster, you can take charge of your tasks, set priorities, 
                and track progress with ease.</p>
                <button className="shadow-xl my-8 shadow-[#00000096] border border-[#7484ff7d] bg-[#3b37ff3f]  w-[15rem] text-white py-3 px-6 rounded-md text-lg md:text-xl hover:bg-indigo-800 transition duration-300">
          Join Now
        </button></div>
                <div>
                    <img src="assets/about.png" className='overflow-hidden max-h-[120rem] w-auto' alt="about img" />
                </div>
          </div>

          <div className='features flex flex-col w-full  lg:max-w-[70%]  my-16 items-center'>
            <div>
                <p className='text-3xl font-primary font-semibold'>Key Features</p>
            </div>
            <div className='flex flex-col lg:flex-row my-2 items-center justify-center gap-16 p-8'>

            <div className='p-8 my-4 rounded-xl bg-[#212121] w-[20rem] h-[30rem]'>
                <img src="assets/simple.png" className='overflow-hidden my-4  ' alt="" />
                <h3 className='text-2xl font-semibold'>Simplicity and Efficiency</h3>
            <p className='text-md text-zinc-400 py-4'> Our user-friendly interface ensures that managing tasks is straightforward and efficient.
                 Spend less time organizing and more time doing.</p>
            </div>

            <div className='p-8 my-4 rounded-xl bg-[#212121] w-[20rem] h-[30rem] '>
            <img src="assets/complete.png" className='overflow-hidden my-4  ' alt="" />
                <h3 className='text-2xl font-semibold'>Completion Tracking</h3>
            <p className='text-md text-zinc-400 py-4'> Mark tasks as completed and experience a sense of accomplishment. 
            Visualize your progress as you check off each task.</p>
            </div>

            <div className='p-8 my-4 rounded-xl bg-[#212121] w-[20rem] h-[30rem]'>
            <img src="assets/custom.png" className='overflow-hidden my-4 ' alt="" />
                <h3 className='text-2xl font-semibold'>Custom Labels</h3>
            <p className='text-md text-zinc-400 py-4'> Personalize tasks with labels and categories that make sense to you.
             Organize your tasks in a way that fits your workflow.</p>
            </div>
            
          </div>
          </div>

          <Footer/>
         
          </div>
      )
}

export default About