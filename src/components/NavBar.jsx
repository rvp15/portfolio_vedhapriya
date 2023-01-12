import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20  hover:text-sky-400 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-logo ml-2">Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((item) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-sky-400 hover:scale-140 duration-200"
            key={item.id}
          >
            {item.link}
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
            {item.link}
          </li>
        ))}
      </ul>)}
     
    </div>
  );
}

export default NavBar;
