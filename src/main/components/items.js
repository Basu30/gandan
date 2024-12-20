import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../shared/context/auth-context';
import './items.css'


const Items = props => {

  const auth = useContext(AuthContext)
  return (
    <div className='item-container'> 
      <div className='images-container'>
        <img 
          src={props.image} 
          alt={props.alt}
        />
      </div> 

      <div className='names-title'>
        <div className='names'>{props.name}</div>
         
        <div className='urls'>
          <a href={props.Url} id='urls-ss'>Read more...</a>
          {auth.isLoggedIn &&
          <NavLink to='/update' id='edit'>Edit</NavLink>}
        </div>
      </div>
    </div>
  )
}
export default Items;