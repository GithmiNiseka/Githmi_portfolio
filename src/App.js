import React, { useState } from 'react';
import './App.css';
import Home from './img/Frame 1.png';
import Skill from './img/Frame 2.png';
import Experince from './img/experience.png';
import Footer from './img/footer.png';
import mentalSpace from './img/mentalSpace.png';
import communityApp from './img/CommunityApp.png';
import ViewMore from './img/ViewMore.png';
import github from './img/Github.png';
import behance from './img/behance.png';
import mentaldetail from './img/Desktop - 2.png';
import communitydetail from './img/Desktop - 4.png';
import happytails from './img/HappyTails.png';
import elderlynetwork from './img/elderlynetwork .png';
import happytailsdetail from './img/Desktop - 5.png';
import elderlydetail from './img/Desktop - 6.png';
import figmagreen from './img/figmagreen.png';
import figmablack from './img/figmablack.png';
import githubgreen from './img/githubgreen.png';
import cancel from './img/Cancel.png';
import contact from './img/contact.png';
import about from './img/about.png';
import work from './img/work.png';
import MediumIcon from './img/medium.png';
import LinkedInIcon from './img/linkedin.png';
import BehanceIcon from './img/behances.png';
import GithubIcon from './img/githubs.png';

function App() {
  // State to control popup visibility and image
  const [popupImage, setPopupImage] = useState(null);

  // Function to open the popup with the clicked image
  const openPopup = (image) => {
    setPopupImage(image);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="App">
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
        <img src={Home} className="home" alt="homeImg" />
        <div className="social-icons">
    <a href="https://medium.com/@2020is026" target="_blank" rel="noopener noreferrer">
      <img src={MediumIcon} alt="Behance" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/githmi-de-silva-802084222/" target="_blank" rel="noopener noreferrer">
      <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
    </a>
    <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer">
      <img src={GithubIcon} alt="LinkedIn" className="social-icon" />
    </a>
    <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">
      <img src={BehanceIcon} alt="LinkedIn" className="social-icon" />
    </a>
  </div>
     
        <img src={Skill} className="home" alt="homeImg" />
        <img src={about} className="home" alt="contactImg"  id="about"/>
        <img src={Experince} className="home" alt="homeImg" />
        <img src={work} className="home" alt="contactImg"  id="work"/>
        <section id="work" className="work-grid">
  <img
    src={mentalSpace}
    className="grid-item"
    alt="Mental Space"
    onClick={() => openPopup(mentaldetail)}
  />
  <img
    src={communityApp}
    className="grid-item"
    alt="Community App"
    onClick={() => openPopup(communitydetail)}
  />
  <img
    src={happytails}
    className="grid-item"
    alt="Happy Tails"
    onClick={() => openPopup(happytailsdetail)}
  />
    <img
    src={elderlynetwork}
    className="grid-item"
    alt="Happy Tails"
    onClick={() => openPopup(elderlydetail)}
  />
 

</section>

        <img src={ViewMore} className="ViewMore" alt="homeImg" />
        <section className='more'>
        <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">  <img src={behance} className="logo" alt="homeImg" /></a>
        <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer"> <img src={github} className="logo" alt="homeImg" /></a>
        </section>
        <div class="ContactContainer">
        <img src={contact} className="home" alt="contactImg"  id="contactImg"/>
        </div>
        <section id="contact">
          <h1 className="sectionTitle">Contact</h1>
          <form action="">
            <div className="formGroup">
              <label htmlFor="name" hidden>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email" hidden>
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message" hidden>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit" />
          </form>
        </section>

      
      </header>
      <img src={Footer} className="footer" alt="footer" />
      {/* Popup for images */}
      {popupImage && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-content">
      <img src={popupImage} alt="Popup" className="popup-img" />
      {popupImage === mentaldetail && (
         <a href="https://www.behance.net/gallery/215355305/MentalSpace" target="_blank" rel="noopener noreferrer">
        <img
          src={figmagreen}
          alt="Figmagreen"
          className="popup-icon-left-bottom"
        />
       </a>
      )}
      {popupImage === communitydetail && (
         <a href="https://www.behance.net/gallery/215355203/Community-Management" target="_blank" rel="noopener noreferrer">
        <img
          src={figmablack}
          alt="Figmagreen"
          className="popup-icon-right-bottom"
        />
        </a>
      )}
      {popupImage === happytailsdetail && (
         <a href="https://github.com/pasinduchathumadu/3_rd_year_project" target="_blank" rel="noopener noreferrer">
        <img
          src={github}
          alt="Figmagreen"
          className="popup-icon-right-bottom"
        />
        </a>
      )}
      {popupImage === elderlydetail && (
         <a href="https://github.com/GithmiNiseka/Elderly-Network" target="_blank" rel="noopener noreferrer">
        <img
          src={githubgreen}
          alt="Figmagreen"
          className="popup-icon-right-bottom"
        />
        </a>
      )}
      <img
        src={cancel}
        alt="Cancel"
        className="popup-cancel"
        onClick={closePopup} 
      />
    </div>
  </div>
)}

    </div>
  );
}

export default App;
