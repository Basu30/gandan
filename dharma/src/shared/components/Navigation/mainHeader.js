import React from 'react';


import './mainHeader.css'

const mainHeader = (props) => {
  return (
    <header className='main-header'>        
        {props.children}            
    </header>     
)
}

export default mainHeader;