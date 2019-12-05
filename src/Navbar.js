import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return ( 
    <ul className='navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/experience'>Experience</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
   );
}
 
export default Navbar;