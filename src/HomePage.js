import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import HomeImage from './img/Frame 1.png'; 
import Skill from './img/Frame 2.png';
import Experince from './img/experience.png';
import Footer from './img/footer.png';
import mentalSpace from './img/mentalSpace.png';
import ImagiCore from './img/imagiCore.png';
import communityApp from './img/CommunityApp.png';
import ViewMore from './img/ViewMore.png';
import github from './img/Github.png';
import behance from './img/behance.png';
import happytails from './img/HappyTails.png';

import contact from './img/contact.png';
import about from './img/about.png';
import work from './img/work.png';

import MediumIcon from './img/medium.png';
import LinkedInIcon from './img/linkedin.png';
import BehanceIcon from './img/behances.png';
import GithubIcon from './img/githubs.png';

function HomePage() {
 
  return (
    <div className="Home">
      <div className="navbar-container">
        <div className="navbar-line"></div>
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="#home">Githmi De Silva</a>
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="navbar-line"></div>
      </div>

      <header className="App-header">
        <img src={HomeImage} className="home" alt="homeImg" /> {/* Updated to HomeImage */}
        <div className="social-icons">
          <a href="https://medium.com/@2020is026" target="_blank" rel="noopener noreferrer">
            <img src={MediumIcon} alt="Medium" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/githmi-de-silva-802084222/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Github" className="social-icon" />
          </a>
          <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">
            <img src={BehanceIcon} alt="Behance" className="social-icon" />
          </a>
        </div>
        <img src={Skill} className="home" alt="skills" />
        <div className="ContactContainer">
           <img src={about} className="contactImg" alt="about" id="about" />
           </div>
       
        <img src={Experince} className="home" alt="experience" />
        <div className="ContactContainer">
        <img src={work} className="contactImg" alt="work" id="work" />
        </div>
        <section id="work" className="work-grid">
        <Link to="/ImagiCore">
            <img
              src={ImagiCore}
              className="grid-item"
              alt="Mental Space"
  
            />
            </Link>
            <Link to="/MentalApp">
            <img
              src={mentalSpace}
              className="grid-item"
              alt="Mental Space"
  
            />
            </Link>
            <Link to="/CommunityApp">
            <img
              src={communityApp}
              className="grid-item"
              alt="Mental Space"
  
            />
            </Link>
            <Link to="/">
            <img
              src={happytails}
              className="grid-item"
              alt="Mental Space"
  
            />
            </Link>
        </section>

        <img src={ViewMore} className="ViewMore" alt="viewMore" />
        <section className="more">
          <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">
            <img src={behance} className="logo" alt="Behance" />
          </a>
          <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer">
            <img src={github} className="logo" alt="Github" />
          </a>
        </section>
        <div className="ContactContainer">
          <img src={contact} className="contactImg" alt="contactImg" id="contactImg" />
        </div>
        <section id="contact" style={{marginTop:'30px'}}>
         
          <form>
            <div className="formGroup">
              <label htmlFor="name" hidden>Name</label>
              <input type="text" id="name" placeholder="Name" required />
            </div>
            <div className="formGroup">
              <label htmlFor="email" hidden>Email</label>
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="message" hidden>Message</label>
              <textarea id="message" placeholder="Message" required></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
          </form>
        </section>
      </header>
      <img src={Footer} className="footer" alt="footer" />
      
    </div>
  );
}

export default HomePage;
