import React from 'react';
import bannerim from './images/airbnb1.png';



export const Navbar = () => {
  return (
    <div className='nav'>
        <img src={bannerim} alt='' className='imgnav'/>
        <div className='line'></div>
    </div>
  )
}
