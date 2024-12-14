import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context/auth-context';

import './navLinks.css';


const NavLinks = () => {
  const auth = useContext(AuthContext)
  return (
    <div className='nav-control'>
      
      {/* <NavLink to='/'>
      <div className='home-container'>
        Home
        </div>
      </NavLink> */}
      
      {auth.isLoggedIn &&
      
      <NavLink to='/news'>
        <div className='addNews-container'>
        Add News
        </div>
      </NavLink>}
      {auth.isLoggedIn && 
      
      <NavLink to='/update'>
        <div className='updateNews-container'>
        <span style={{textDecoration:'none'}}>Edit News</span>
        </div>
      </NavLink> }
     
      <NavLink to='/auth' className='no-underline'>
        <Button className='login-button' variant='contained'>Login</Button>
      </NavLink>  
    </div>       
  )
}

export default NavLinks; 