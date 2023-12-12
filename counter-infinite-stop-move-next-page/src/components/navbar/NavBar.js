import React from 'react';
import {Link,Outlet,NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
 <nav className='nav'>
      <ul>
        <li> <NavLink to ='/' >Home</NavLink></li>
        <li> <NavLink to ='/about'>About</NavLink></li>
      </ul>
    </nav>
    <Outlet/>
    </>
   
  )
}

export default NavBar;
