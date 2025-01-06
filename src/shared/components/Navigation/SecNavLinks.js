import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import './SecNavLinks.css';

const SecNavLink = () => {
  const [drop, setDrop] = useState(null);
  const dropRef = useRef(null)

  const dropHandler = (menu) => {
    setDrop(drop === menu ? null : menu)
  }

  //Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)){
        setDrop(null); // close the dropdown
      }
    };
    
    // Add event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when component unmounts;
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, []) // Empty dependency array to run only once when components mounts


  
  return (
    <main className='main-secNav'>
      <ul ref={dropRef} className='main-secNav-ul'>
        <li onClick={() => dropHandler("datsan")} className='secNav-datsan'>
          <div className='secNav-name-container'>
            <p>Дацангууд</p>
            </div>       
            
            <div  className={`drop-datsan ${drop === "datsan" ? "show" : "hide"}`}>
              <NavLink to='/tso' id='dropdown-link' className="link-1">Цогчэн</NavLink>
              <NavLink to='/dashi' id='dropdown-link' className="link-2">Дашчойнпэл дацан</NavLink>
              <NavLink to='/gunga' id='dropdown-link' className="link-3">Гунгаачойлин дацан</NavLink>
              <NavLink to='/idga' id='dropdown-link' className="link-3">Идгаачойнзэнлин дацан</NavLink>
              <NavLink to='/jan' id='dropdown-link' className="link-3">Жанрайсиг дацан</NavLink>
              <NavLink to='/mam' id='dropdown-link' className="link-3">Мамба дацан</NavLink>
              <NavLink to='/badma' id='dropdown-link' className="link-3">Бадма Ёга дацан</NavLink>
            </div>     
        </li>
        <li onClick={() => dropHandler("alba")} className='secNav-alba'>
          <div className='secNav-name-container'>
            <p >Алба</p>
          </div>
             
            <div className={`drop-alba ${drop === "alba" ? "show" : "hide"}`}>
              <NavLink to='/' id='dropdown-link' className='a'>Гадаад харилцаа</NavLink>
              <NavLink to='/' id='dropdown-link' className='b'>Олон нийттэй харилцах алба</NavLink>
              <NavLink to='/' id='dropdown-link' className='c'>Тамгын Лам</NavLink>
              <NavLink to='/' id='dropdown-link' className='d'>Хэвлэл мэдээллийн алба</NavLink>
            </div>
         
        </li>
        <li onClick={() => dropHandler("tanil")} className='secNav-alba'>
          <div className='secNav-name-container'>
            <p >Танилцуулга</p>
          </div>
             
            <div className={`drop-alba ${drop === "tanil" ? "show" : "hide"}`}>
              <NavLink to='/' id='dropdown-link' className='a'>Гандан хийдийн түүх</NavLink>
              <NavLink to='/' id='dropdown-link' className='b'>Газрын зураг</NavLink>
              <NavLink to='/' id='dropdown-link' className='c'>Монголын Бурханын шашны түүх</NavLink>
              <NavLink to='/' id='dropdown-link' className='d'>Хэвлэл мэдээллийн алба</NavLink>
            </div>
         
        </li>
      
      </ul>
     
    </main>
  )
}
export default SecNavLink;