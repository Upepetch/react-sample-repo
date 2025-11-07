import React from 'react';
import logo from './images/logo.jpg';
export const Header = () => {
  return (
    <div className='header'>
    <header>
        <img src={logo} alt="header banner" className='logo'/>
         <h1>Job Board</h1>
         <nav>
         <a href="./">Home</a>
         </nav>
    </header>
   </div>
  );
};
