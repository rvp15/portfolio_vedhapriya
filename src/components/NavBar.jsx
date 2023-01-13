import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    // {
    //   id: 5,
    //   link: "contact",
    // },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20  hover:text-cyan-400 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl w-6 h-6 duration-800 font-logo ml-2">Vedhapriya Rajagopal</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((item) => (
          <li
            className=" px-5 text-3xl cursor-pointer capitalize font-bold text-white-500 hover:text-cyan-400 hover:scale-105 duration-200"
            key={item.id}
          >
           <Link to= {item.link} smooth duration={500}> {item.link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav&&( <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-50 text-black-500 ">
        {links.map((item) => (
          <li
            className="px-4 cursor-pointer text-4xl py-6 capitalize"
            key={item.id}
          >
             <Link onClick={()=>setNav(!nav)} to= {item.link} smooth duration={500}> {item.link}</Link>
          </li>
        ))}
      </ul>)}
     
    </div>
  );
}

export default NavBar;
