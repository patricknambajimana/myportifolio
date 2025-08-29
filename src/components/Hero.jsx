import React from "react";
import image from "../assets/image/image.png";
import { Download } from "lucide-react";
import { UserPen } from "lucide-react";
function Hero() {
  return (
    <div className="mt-25">
      <div className=" text-cyan-900 capitalize text-center">
        <p>
          hello i'm <strong>patrick nambajimana</strong>{" "}
        </p>
      </div>
      <div className="flex gap-25 justify-center mt-20">
        <div className="max-w-200 max-h-100 rounded-2xl shadow-md text-left text-xl text-neutral-500 p-5 bg-neutral-100">
          I’m a dedicated Front-End Developer with a strong focus on creating
          modern, responsive, and high-performance web applications using React
          and TypeScript. I excel at building scalable, reusable UI components
          and delivering clean, maintainable code that meets both user and
          business needs. My expertise includes Context API, Tailwind CSS, and
          seamless REST API integration
          <div className="flex gap-10 relative top-30 text-center justify-center">
            <div className="flex gap-2 border-none border-cyan-400 capitalize w-40 bg-cyan-600 text-white p-3 mt-5 hover:bg-cyan-900/80">
              <UserPen />
              <span>my profile</span>
            </div>
            <div className="flex gap-2 border-none border-cyan-400 capitalize bg-cyan-600 text-white p-3 mt-5 hover:bg-cyan-900/80">
              {" "}
              <Download />
              <span>download cv</span>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols rounded-2xl shadow text-center-safe max-w-200 max-h-150  bg-neutral-100">
          <div className="capitalize text-cyan-900 top-10 relative text-center ">
            <span>hello i'm frontend developer......</span>
          </div>

          <img
            src={image}
            alt="profile image"
            className="relative bottom-15 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
