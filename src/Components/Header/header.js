import React from 'react'
import logo from '../../../src/Images/logo2 2.png';
import './header.css';
const Header = () => {
  return (
    <div className='header_div'>
       <div className='logo'>
        <img src={logo} />
       </div>

    </div>
  )
}

export default Header
