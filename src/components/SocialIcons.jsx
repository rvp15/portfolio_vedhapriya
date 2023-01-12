import React from 'react'
import{BsGithub,BsLinkedin,BsPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
function SocialIcons() {
  return (
    <div className='flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'><a className='flex justify-between items-center w-full text-white' href=""><>
           LinkedIn <BsLinkedin size={30}/></></a></li>
        </ul>
    </div>
  )
}

export default SocialIcons