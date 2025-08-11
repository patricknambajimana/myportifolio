import React from 'react'
import { Link } from 'react-router'


const NavBar = () => {
    
    
  return (
    <div className='bg-cyan-600 p-5 flex justify-between  shadow'>
      <div>
        <img src="" alt="" />
      </div>
      <div className='flex gap-5 text-2xl capitalize text-white mr-20 '>
          <Link to="/">home</Link> 
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link> 
          <Link to="/about">skills</Link> 
      </div>
    </div>
  )
}

export default NavBar
