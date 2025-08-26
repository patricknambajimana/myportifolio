import React, { useState } from "react";
import { Mail, CircleUser, Instagram } from "lucide-react";
import { Github } from "lucide-react";
const Contact = () => {
  const [formData, setformData] = useState();
  const [error, setError] = useState();

  const handleChange = (event) => {
    event.target.value;
  };

  return (
    <div>
      <h2 className="text-center  text-5xl capitalize my-10 font-extrabold text-cyan-600">
        get in touch
      </h2>
      <div className=" flex gap-15 justify-center">
        <div className="shadow-lgrounded-xl p-3 w-full max-w-md bg-cyan-200/20 text-xl">
          <span className="text-gray-700">
            I’d love to hear from you! Whether you have a question, a project
            idea, or just want to say hi, feel free to get in touch."
          </span>
          <div className="relative top-30 space-y-15 text-xl text-cyan-500">
            <div className="flex gap-2">
              <Mail className="size-10 focus:outline-cyan-200 outline-2 rounded-full p-1" />
              <span>patricknambajimana6@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <CircleUser className="size-10 focus:outline-cyan-200 outline-2 rounded-full p-1" />
              <span>+250781138331</span>
            </div>
            <div className="flex gap-2">
              <Instagram className="size-10 focus:outline-cyan-200 outline-2 rounded-full p-1" />
              <span>patrick@example.com</span>
            </div>
            <div className="flex gap-2">
              <Github className="size-10 focus:outline-cyan-200 outline-2 rounded-full p-1" />
              <span>patrick@example.com</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-xl p-8 w-full max-w-md bg-cyan-200">
          <form action="" className="space-y-5">
            <div className="text-left p-2 text-2xl text-gray-600  capitalize">
              <p>Enter your email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="border focus:outline-none placeholder:text-xl  border-cyan-600 rounded p-2"
              />
            </div>
            <div className="text-left p-2 text-2xl text-gray-600  capitalize">
              <p>description</p>
              <input
                type="text"
                placeholder="Description"
                className="border focus:outline-none rounded  border-cyan-600 p-2"
              />
            </div>

            <div className="text-left p-2 text-2xl text-gray-600 capitalize">
              <p>message</p>
              <textarea
                name=""
                placeholder="enter your message......"
                rows={4}
                className="border focus:outline-none rounded w-full border-cyan-600 p-2"></textarea>
            </div>
            <div className="">
              <button
                type="submit"
                className="hover:bg-cyan-400/40 border-cyan-600 w-full p-3 text-gray-600 text-2xl capitalize rounded bg-cyan-400 ">
                send your message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
