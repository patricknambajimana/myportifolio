import React, { useState } from "react";

const Contact = () => {

 const [formData,setformData] = useState()
 const [error,setError] = useState()


const handleChange=(event)=>{
event.target.value
}

  return (
    <div className="min-h-screen flex  items-center justify-center ">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-md bg-cyan-200">
        
        <form action="" className="space-y-5" >
          <div className="text-left p-2 text-2xl text-gray-600  capitalize">
            <p>Enter your email</p>
            <input type="email" placeholder="Enter your email" className="border focus:outline-none placeholder:text-xl  border-cyan-600 rounded p-2" />
          </div>
          <div className="text-left p-2 text-2xl text-gray-600  capitalize">
            <p>description</p>
            <input type="text" placeholder="Description" className="border focus:outline-none rounded  border-cyan-600 p-2"/>
          </div>

          <div className="text-left p-2 text-2xl text-gray-600 capitalize">
            <p >message</p>
            <textarea name="" placeholder="enter your message......" rows={4} className="border focus:outline-none rounded w-full border-cyan-600 p-2"></textarea>
          </div>
          <div className="">
            <button type="submit" className="hover:bg-cyan-400/40 border-cyan-600 w-full p-3 text-gray-600 text-2xl capitalize rounded bg-cyan-400 ">send your message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
