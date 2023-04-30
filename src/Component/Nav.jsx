import React from 'react'
import "./Nav.css";
import Bootstrap from './Bootstrap';

const Nav = () => {
  return (
    <div className='navbar'>
        <div id='menu'>
            <h2>Coding Made Simple</h2>
        </div>
        <div id='title'>
            <a href='/bootstrap'>Bootstrap</a>
            <a href=''>Theme</a>
            <a href=''>Blog</a>
            <a href=''>Home</a>
            <a href=''>Contact</a>
            <a href=''>About</a>
        </div>
    </div>
  )
}

export default Nav