import React from 'react'
import { Link } from 'react-router-dom'
const AdminToolsBar = () => {
  return (
    <nav>
      <ul className='flex navbar m-0 justify-end '>
        <li className='bg-green-500 mr-2 p-2 mb-2'><Link to='/add'>Add new Hotel</Link></li>
      </ul>
    </nav>
  )
}

export default AdminToolsBar
