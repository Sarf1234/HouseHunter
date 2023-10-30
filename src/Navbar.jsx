import React from 'react'
import logoimage from './assets/logo3.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-4/5 border-2 m-auto h-16 flex justify-between items-center'>
      <div className='w-40 '>
        <img src={logoimage} className='element'/>
      </div>
      <div>
        <ul>
          <li><Link></Link></li>
          <li><Link></Link></li>
          <li><Link></Link></li>
          <li><button></button></li>
        </ul>
      </div>
      <div>option</div>
    </div>
  )
}

export default Navbar
