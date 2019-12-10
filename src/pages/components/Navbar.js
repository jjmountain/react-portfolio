import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css';

const Navbar = () => {


  const homeIcon = <FontAwesomeIcon icon={'home'} size="lg" />
  const instaIcon = <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
  const linkedinIcon = <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
  const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} size="lg" />

  return ( 
    <ul className='navbar'>
      <li>
        <NavLink exact to='/' activeClassName='navbar-selected'>{homeIcon}</NavLink>
      </li>
      <li>
        <NavLink exact to='/experience' activeClassName='navbar-selected'>Experience</NavLink>
      </li>
      <li>
        <NavLink exact to='/projects' activeClassName='navbar-selected'>Projects</NavLink>
      </li>
      <li>
        <div class="icons-social">
          <a href="https://github.com/jjmountain" target="_blank" rel="noopener noreferrer">{githubIcon}</a>
          <a href="https://www.linkedin.com/in/james-devereux-3a1abb24/" target="_blank" rel="noopener noreferrer">{linkedinIcon}</a>
          <a href="https://www.instagram.com/jjdevz/" target="_blank" rel="noopener noreferrer">{instaIcon}</a>
        </div> 
      </li>
    </ul>
   );
}
 
export default Navbar;