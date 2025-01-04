import React from 'react';

import MainHeader from './mainHeader';
import NavLink from './navLinks';


import './MainNavigation.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const MainNavigation = (props) => {

  const location = useLocation(); // Get the current Location (route)

  // Conditionally change the text based on the route
  const changeNavText = () => {
    switch (location.pathname) {
      case '/tso':
        return 'Цогчэн';
      case '/badma':
        return 'Бадма Ёга дацан';
      case '/dashi':
        return 'Дашчойнпэл дацан';
      case '/gunga':
        return 'Гунгаачойлин дацан';
      case '/idga':
        return 'Идгаачойнзэнлин дацан';
      case '/jan':
        return 'Жанрайсиг дацан';
      case '/mam':
        return 'Мамба дацан'
        default:
          return 'Mongolian National Buddhist Center'
    }
  }
  
  return (
    <MainHeader>
      <main className='nav-header'>
      <div className='main-nav-container'>
        <div className='nav-img-container' title='Home'>
            <a href='/'><img src="/image/logo.PNG" alt="logo"/></a>        
        </div> 

        <div className='nav-title-container'>  
          {/* <h1>Гандан<span>тэгчэнлин хийд</span></h1> */}
          <h1 className='gandantegchenlin'>Гандантэгчэнлин хийд</h1>
          <h2 className='gandan-hiid'>Гандан Хийд</h2>
          <h3 className='gandan'>Гандан</h3>
          <p>{changeNavText()}</p>
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