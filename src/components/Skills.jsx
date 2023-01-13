import React from 'react'
import css from "../assets/css.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import node from "../assets/node.png"
import reacti from "../assets/reacti.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import db from "../assets/db.png"
import json from "../assets/json.jpg"
import rest from "../assets/rest.png"

const Skills = () => {
  const skills = [
    {
        id:1,
        src:html
    },
    {
        id:2,
        src:css
    },
    {
        id:3,
        src:js
    },
    {
        id:4,
        src:node
    },
    {
        id:5,
        src:reacti
    },
    {
        id:6,
        src:github
    },
    {
        id:7,
        src:tailwind
    },
    {
        id:8,
        src:bootstrap
    },
    {
        id:9,
        src:db
    },{
        id:10,
        src:json
    },
    {
        id:11,
        src:rest
    },
  ]  
  return (
    <div name='skills' className=' text-white bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div><p className=" pb-8 text-4xl font-bold inline  hover:text-cyan-400">Skills</p><p  className="py-6 pb-8">These are Techologies I have worked with</p></div>
     
      <div  className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
       {skills.map((item)=>(
        <li key={item.id}
        className="shadow-md shadow-cyan-600 rounded-lg duration-500 hover:scale-105">
            <img
                  src={item.src}
                  className="rounded-md "
                  alt="images"
                />

        </li>
       ))}
      </div>
    </div> </div>
  )
}

export default Skills
