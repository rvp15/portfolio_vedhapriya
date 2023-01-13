import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" flex flex-col justify-center   h-screen w-full text-white bg-gradient-to-b from-black via-black to-gray-800 p-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <p className=" pb-8 text-4xl font-bold inline  hover:text-cyan-400 py-6">
          About
        </p>
        <p className="pt-8 py-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis qui
          quos dignissimos ipsum adipisci rerum nulla rem architecto accusantium
          reiciendis odio modi aut, amet aperiam repellendus pariatur illum?
          Nobis!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt non
          facere exercitationem aut est alias quis sed fuga, cum earum deserunt
          magni, officiis iste illum saepe? Error ut voluptates perferendis!
        </p>
      </div>
    </div>
  );
};

export default About;
