import React from 'react';


import './mainHeader.css'

const mainHeader = (props) => {
  return (
    <header className='main-header-1'>        
        {props.children}            
    </header>     
)
}

export default mainHeader;