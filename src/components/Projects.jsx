import React from "react";
import tetris from "../assets/projects/tetris.png";
import art from "../assets/projects/react-nasa.png";
import nasa from "../assets/projects/nasa.png";
import mern from "../assets/projects/mern.png";
import feedback from "../assets/projects/feedback.png";
import shopping from "../assets/projects/shopping.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: tetris,
      title: "Tetris Game",
      href: "https://github.com/rvp15/MOD1_Project_Tetris",
    },
    {
      id: 2,
      src: art,
      title: "Online Art Store",
      href: "https://github.com/rvp15/MOD2_Project_ArtgalleryStore",
    },
    {
      id: 3,
      src: nasa,
      title: "React Project with NASA API",
      href: "https://github.com/rvp15/MID-MOD-Project-React-App/tree/main/thespace-app",
    },
    {
      id: 4,
      src: mern,
      title: "Apartment Management-MERN",
      href: "https://github.com/rvp15/Final-Project-MERN-Stack",
    },
    {
      id: 5,
      src: feedback,
      title: "Feedback App",
      href: "https://github.com/rvp15/Learn_React",
    },
    {
      id: 6,
      src: shopping,
      title: "Shopping Cart",
      href: "https://github.com/rvp15/react-shoppingapp-context-reducer",
    },
  ];
  return (
    <div
      name="projects"
      className=" text-white bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full object-contain">
        <p className=" pb-8 text-4xl font-bold inline  hover:text-cyan-400">
          Projects
        </p>
        <p className="py-6 pb-8">Check Out Some Of My Work... </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0 ">
          {projects.map((item) => (
            <li
              key={item.id}
              className="shadow-md shadow-cyan-600 rounded-lg duration-500 hover:scale-105 list-none"
            >
              <p className="py-4">{item.title}</p>
              <img src={item.src} className="rounded-md" alt="projectimages" />
              <a href={item.href} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-5 m-4 duration-200 hover:scale-105">
                  Source Code
                </button>
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
