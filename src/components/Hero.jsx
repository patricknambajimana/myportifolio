import React from "react";
import image from "../assets/image/image.png";
function Hero() {
  return (
    <div>
      <div className=" text-cyan-900 transition capitalize text-center">
        <p>
          hello i'm <strong>patrick nambajimana</strong>{" "}
        </p>
      </div>
      <div className="flex gap-25 justify-center mt-20">
        <div className="max-w-md rounded-2xl shadow text-left text-2xl text-neutral-500 p-5 ">
          I’m a dedicated Front-End Developer with a strong focus on creating
          modern, responsive, and high-performance web applications using React
          and TypeScript. I excel at building scalable, reusable UI components
          and delivering clean, maintainable code that meets both user and
          business needs. My expertise includes Context API, Tailwind CSS, and
          seamless REST API integration.
          <span className="border border-cyan-400 capitalize bg-cyan-600 text-white p-2 mt-5">learn more</span>
         </div>
        <div className="rounded-2xl shadow text-center-safe">
          <img src={image} alt="profile image"className=" p-5 " />
        </div>
      
    </div>
    </div>
  );
}

export default Hero;
