import * as React from 'react';
import '../App.css';
import logo from '../img/logo.png';

const Nav = () => {
  return (
    <>
    <div className='navBar'>
    
    <div className='navigationBar'>
        <div className='logo'>
         <img src={logo} className='logo' alt='logo'/>
    </div>
    <div className='pagesTabs'>
    <a href="#home"> <div className='home'>Home</div></a>
    <a href="#about">  <div className='home'>About</div></a>
    <a href="#project">    <div className='home'>Projects</div></a>
    <a href="#blogs">   <div className='home'>Blogs</div></a>
    <a href="#contact">   <div className='home'>Contact</div></a>
        </div>
    </div>
   
   
   
    </div>
  </>
  )
}

export default Nav