import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './User.css';

const User = () => {
  return (
    <main className='user-face-container'>
      <div className='user-controller'>
        <Link to='/userItem' style={{textDecoration: 'none'}}>
          <div className='user-interface-controller'> <span style={{ margin: '20px 15px 20px'}}>Сэтгэдэл Бичих...</span></div>
        </Link>
        <div className='user-post-container'>
            <h1>Post will display here</h1>
        </div>
      </div>
    </main>      
  )
}
export default User;