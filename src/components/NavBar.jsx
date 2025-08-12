import React from 'react'
import { Link } from 'react-router'


const NavBar = () => {
    
    
  return (
    <div className='bg-cyan-600 p-7 flex justify-between  shadow'>
      <div>
        <img src="" alt="" />
      </div>
      <div className='flex gap-5 text-2xl capitalize text-white mr-20 font-bold'>
          <Link to="/" className='hover:underline'>home</Link> 
          <Link to="/about" className=' hover:underline '>about</Link>
          <Link to="/contact" className=' hover:underline '>contact</Link> 
          <Link to="/about" className=' hover:underline '>skills</Link> 
      </div>
    </div>
  )
}

export default NavBar
