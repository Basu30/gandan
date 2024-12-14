import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MainHeader from './mainHeader';
import NavLink from './navLinks';


import './MainNavigation.css';


const MainNavigation = (props) => {
  return (
    <MainHeader>
      <main className='main'>
      <div className='logo-out'>
        <Link to='/'>
          <img src="/image/logo.PNG" alt="logo" className='logo'/>
        </Link>               
      </div> 
    <div className='names'>  
      <h1 className='name' >Гандантэгчэнлин хийд </h1>
      <p className='small-name'>Mongolian National Buddhist Center</p>
    </div> 
      <div className='name-links'>     
        <NavLink />   
      </div>
      </main>
      
      
    </MainHeader>
    )
}

export default MainNavigation;