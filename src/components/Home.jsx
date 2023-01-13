import React from 'react'
import img1 from '../assets/img2.jpg'
import {RxDoubleArrowDown} from 'react-icons/rx'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    // name->used for smooth scroll
    <div name='home' className='home-cls h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
    <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-5xl font-bold'>I'm a Junior Full Stack Developer</h2>
            <p className='text-gray-500 py-4 max-w-lg pt-8 sm:text-3xl md:text-4xl"'>
            Software Engineer with 2 years of experience in designing, testing, and developing software
solutions. In-depth understanding of web technologies with focus on delivering innovative business
solutions. Excels in a fast-paced, high-energy, and deadline-driven environment with willingness to take
on additional tasks and learn new skills.
            </p>
            <div>
               
                <Link to= 'about' smooth duration={500}> <button className= ' group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 rounded'>Portfolio <span className='group-hover:animate-spin duration-300 px-4'><RxDoubleArrowDown/></span></button></Link>
            </div>
        </div>
        <div><img className='rounded-2xl ' width={350} rounded-lg src={img1} alt='profile pic'/></div>
    </div>
    </div>
    
  )
}

export default Home