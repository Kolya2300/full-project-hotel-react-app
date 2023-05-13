import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <nav className='mb-4'>
      <ul className='flex navbar m-0 justify-around bg-blue-200'>
        <li className='mr-6'><Link to='/'>Home</Link></li>
        <li className='mr-6'><Link to='/account'>Account</Link></li>
        <li className='mr-0'><Link to='/adminPage'>Admin Page</Link></li>
      </ul>
    </nav>
  )
}

export default NavbarAdmin
