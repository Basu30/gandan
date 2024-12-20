import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
      
      <NavLink to='/news' style={{textDecoration: 'none'}}>
        <div className='addNews-container'>
         <p style={{margin: '0px'}}>Мэдээ нэмэх</p>
        </div>
      </NavLink>}
      {auth.isLoggedIn && 
      
      <NavLink to='/update' style={{textDecoration:'none'}}>
        <div className='updateNews-container'>
        <p >Засварлах</p>
        </div>
      </NavLink> }
     
      <NavLink to='/auth'>
        <Button id='login-button-cont' variant='contained'>Login</Button>
        <FontAwesomeIcon icon={faUser} className='font-controller'/>
      </NavLink>  
    </div>       
  )
}

export default NavLinks; 