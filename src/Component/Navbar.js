import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { BsDropletFill } from 'react-icons/bs';
const Navbar = () => {
    return (
      <div className='navbar-container'>
        <div className='nav-logo'><BsDropletFill size={30} color='#c21807'/><h1>Bloodlink</h1></div>
        <div className='menu'>
        <nav>
          <div className='menubar'>
           <Link to='/Community' className="menu-link">
            Community
           </Link>
           <Link to='/Requestpage' className="menu-link">
            Requests
           </Link>
           <Link to='/Confirm' className="menu-link">
            Confirmed
           </Link>
           
          </div>
        </nav>
        </div>
        <div className='nav-profile'><FaUser size={25} color='#c21807'/></div>
      </div>
    )
  }

export default Navbar;