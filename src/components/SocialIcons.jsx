import React from "react";
import {
  BsFillPersonLinesFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function SocialIcons() {
  const links = [
    {
      id: 1,
      link: (
        <>
          LinkedIn <BsLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/vedhapriya-rajagopal-82a702232/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      link: (
        <>
          GitHub <BsGithub size={20} />
        </>
      ),
      href: "https://github.com/rvp15",
    },
    {
      id: 3,
      link: (
        <>
          Mail <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      link: (
        <>
          Resume <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  // flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300
//lg:flex is media Q for 1024px
  return (
    <div className=" hidden lg:flex top-[35%] fixed left-0 flex-col">
      <ul>
        {links.map(({id,link,href,style,download}) => (
          <li key={id} className={`animate-bounce w-40 h-14 px-4 py-3  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  hover:bg-cyan-600 ${style}`}>
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target='_blank'  
              rel="noreferrer" 
            >{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
