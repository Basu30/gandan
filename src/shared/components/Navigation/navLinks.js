import React, { useContext } from 'react';
import { NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@mui/material/Button';
import { AuthContext } from '../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MdPostAdd } from "react-icons/md";
// import { FiEdit } from "react-icons/fi";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import './navLinks.css';



const NavLinks = () => {
  const auth = useContext(AuthContext);
 
 
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if(confirmLogout){
      auth.logout();
      alert("You have been logged out.");
    } else {
      alert("Logout cancelled.")
    }
  }
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
         <MdPostAdd id="Md-postAdd" title='Мэдээ нэмэх' style={{fontSize:'1.5rem', margin: '2px'}}/>
        </div>
      </NavLink>}
      {/* {auth.isLoggedIn && 
      <NavLink to='/update' style={{textDecoration:'none'}}>
        <div className='updateNews-container' >
        <p>Засварлах</p>
        <FiEdit id="fa-edit" title="Мэдээ засварлах"/>
        </div>
      </NavLink> } */}
     
      <NavLink to='/auth'>
        {!auth.isLoggedIn && <Button id='login-button-cont' variant='contained'>Login</Button>}
        {!auth.isLoggedIn && <FontAwesomeIcon icon={faUser} className='font-controller'/>}
        {auth.isLoggedIn && <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout} style={{fontSize: '1.2rem', margin: '2px'}}/>}

      </NavLink>  
    </div>       
  )
}

export default NavLinks; 