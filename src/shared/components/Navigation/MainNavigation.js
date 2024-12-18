import React from 'react';

import MainHeader from './mainHeader';
import NavLink from './navLinks';


import './MainNavigation.css';


const MainNavigation = (props) => {
  return (
    <MainHeader>
      <main className='nav-header'>
      <div className='main-nav-container'>
        <div className='nav-img-container' title='Home'>
            <a href='/'><img src="/image/logo.PNG" alt="logo"/></a>        
        </div> 

        <div className='nav-title-container'>  
          <h1 >Гандан<span id="he">тэгчэнлин хийд</span> </h1>
          <p >Mongolian National Buddhist Center</p>
        </div>

        <div className='name-links'>     
          <NavLink />   
        </div>
      </div>
      </main>  
    </MainHeader>
  )
}

export default MainNavigation;