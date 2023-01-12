import React from 'react'
import img1 from '../assets/img1.jpg'
import {RxDoubleArrowRight} from 'react-icons/rx'

const Home = () => {
  return (
    // name->used for smooth scroll
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
            Software Engineer with 2 years of experience in designing, testing, and developing software
solutions. In-depth understanding of web technologies with focus on delivering innovative business
solutions. Excels in a fast-paced, high-energy, and deadline-driven environment with willingness to take
on additional tasks.
            </p>
            <div>
                <button className= ' group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 rounded'>Portfolio <span className='group-hover:rotate-90 duration-300 px-4'><RxDoubleArrowRight/></span></button>
            </div>
        </div>
        <div><img className='rounded-2xl ' width={350} rounded-lg src={img1} alt='profile pic'/></div>
    </div>
    </div>
    
  )
}

export default Home