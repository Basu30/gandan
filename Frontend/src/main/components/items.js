import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../shared/context/auth-context';
import './items.css'


const Items = props => {
  const auth = useContext(AuthContext);

 
  
  return (
   
    <div className='item-container'> 
      <div className='images-container'>
        <img 
          src={props.image} 
          alt={props.alt}
        />
      </div> 

      <div className='names-title'>
        
        <div className='names' >
          {props.title}
        </div>
         
        <div className='urls'>

          <Link to={`/announce/${props.id}`} id='urls-ss'>Read more...</Link>

          {auth.isLoggedIn &&
          <NavLink to={`/update/${props.id}`} id='edit'>Edit</NavLink>}
        </div>
      </div>
    </div>
  )
}
export default Items;