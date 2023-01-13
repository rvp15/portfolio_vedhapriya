import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" flex flex-col justify-center   h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800 p-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <p className=" pb-8 text-3xl font-bold inline  hover:text-cyan-400 py-6">
          About
        </p>
        <p className="pt-8 py-6 sm:text-3xl md:text-4xl">
         I have my bachelor's degree in Information Technology. I started my career as Associate Software Engineer. Where I worked in Support team. Also gained knowledge on application level testing.
        </p>
        <br />
        <p className="pt-8 py-6 sm:text-3xl md:text-4xl">
          After Career break I started revamping myself with latest technology to enter into work force. I completed Software Engineering training recently.
        </p>
      </div>
    </div>
  );
};

export default About;
