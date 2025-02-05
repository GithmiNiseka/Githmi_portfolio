import React, { useState } from 'react';
import ProfileImg from '../img/profileImg.png';
import github from '../img/github.png';
import behance from '../img/behance.png';
import medium from '../img/medium.png';
import linkedin from '../img/linkedin.png';
import SkillImg from '../img/Skills.png';
import LexTrust from '../img/LexTrust.png';
import LMS from '../img/LMS.png';
import leftArrow from '../img/leftArrow.png';
import rightArrow from '../img/rightArrow.png';
import fork from '../img/fork.png';
import font from '../img/font.png';
import color from '../img/colour.png';
import bvsm from '../img/bvsM.png';
import blogCircle from '../img/blogCircle.png';
import NavBar from '../Components/Nav.js';
import footer from '../img/footer.png';
import { Link } from 'react-router-dom';

const Home = () => {

      const [isEducationOpen, setEducationOpen] = useState(false);
      const [isExperienceOpen, setExperienceOpen] = useState(false);


        const images = [LexTrust, LMS]; // Array of images
        const [currentIndex, setCurrentIndex] = useState(0);
      
        // Move to Previous Image
        const prevSlide = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        };
      
        // Move to Next Image
        const nextSlide = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        };
        const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            message: ''
          });
        
          const [error, setError] = useState('');
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            
            // Basic validation
            if (!formData.fullName || !formData.email || !formData.message) {
              setError('All fields are required');
              return;
            }
        
            // Handle form submission (e.g., send data to API)
            console.log('Form Submitted', formData);
            setError('');
          };
        

  return (
   <>
   <NavBar />
    <div className='homePage' id='home'>
        <div className='myself'>
        <h2 className='githmi'>GITHMI DE SILVA</h2>
        <p className='myDescription'>I’m a UI/UX Engineer from Colombo, Sri Lanka.
        I specialize in web and mobile app design, creating user-centered, functional, and visually appealing digital experiences.</p>

        <div className='socialIcon'>
        <a href="https://www.linkedin.com/in/githmi-de-silva-802084222/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className='linkedinIcon'  alt='linkedinIcon'/></a>
        <a href="https://github.com/GithmiNiseka" target="_blank" rel="noopener noreferrer">
        <img src={github} className='githubIcon'  alt='githubIcon'/></a>
        <a href="https://www.behance.net/githmidesilva" target="_blank" rel="noopener noreferrer">
        <img src={behance} className='behanceIcon'  alt='behanceIcon'/></a>
        <a href="https://medium.com/@2020is026" target="_blank" rel="noopener noreferrer">
        <img src={medium} className='mediumIcon'  alt='mediumIcon'/></a>
        </div>
        </div>
        <div className='profileImg'>
            <img src={ProfileImg} className='profileImg'  alt='ProfileImg'/>
            </div>

             
    </div>
    
              {/* about */}
                <div className="section" id='about'>
        <h2 className="title" onClick={() => setEducationOpen(!isEducationOpen)}>
          Education <span className="plusIcon">{isEducationOpen ? '-' : '+'}</span>
        </h2>
        {isEducationOpen ? (
          <div>
            <div className="content">
              <h4 className='uni'><span className='degree'>B.Sc.(Hons) in Information Systems</span> | University of Colombo School of Computing</h4>
              <p className='date'>April 2021 - April 2025</p>

              <h4 className='uni'><span className='degree'>CIMA</span> </h4>
              <p className='date'>April 2021 - April 2025</p>
            </div>
            <hr className="hrLine" /> {/* Moves under expanded content */}
          </div>
        ) : (
          <hr className="hrLine" /> // Default position when not expanded
        )}
      </div>

      {/* Experience Section */}
      <div className="section">
        <h2 className="title" onClick={() => setExperienceOpen(!isExperienceOpen)}>
          Experience <span className="plusIcon">{isExperienceOpen ? '-' : '+'}</span>
        </h2>
        {isExperienceOpen ? (
          <div>
            <div className="content">
              <h4 className='degree' style={{marginBottom:0}}>WSO2 Inc | <span className='uni'>UI/UX Engineer Intern</span></h4>
              <p className='date'>January 2024 - July 2024</p>

              <h4 className='degree' style={{marginBottom:0}}>Farmoid Robotech(PVT)LTD | <span className='uni'>UI/UX Designer Intern</span></h4>
              <p className='date'>August 2023 - September 2023</p>
            </div>
            <hr className="hrLine" /> 
          </div>
        ) : (
          <hr className="hrLine" />
        )}
      </div>
{/* skills */}
      <div className='skillList' style={{marginTop:50,marginBottom:50}}>
                    <img src={SkillImg} className='skills'  alt='skillImg'/>
                </div>

{/* projects */}
                 <div className="projectLargeBox" style={{marginBottom:250}} id='project'>
                      <div className="ProjectBox">
                        {/* Left Arrow */}
                        <div className="ArrowImg leftArrow" onClick={prevSlide}>
                          <img src={leftArrow} className="arrowImage" alt="leftArrow" />
                        </div>
                
                        {/* Image */}
                        <Link to={currentIndex === 0 ? '/lexTrustCaseStudy' : '/lmsCaseStudy'}>
                        <div className="listOfProjects">
                          {/* Wrap the image in a Link */}
                         
                            <img src={images[currentIndex]} className="slideImage" alt="Project" />
                           
                        </div>
                        </Link>
                        {/* Right Arrow */}
                        <div className="ArrowImg rightArrow" onClick={nextSlide}>
                          <img src={rightArrow} className="arrowImage" alt="rightArrow" />
                        </div>
                      </div>
                    </div>


                    {/* Blogs */}

                    <div className='blogPgae' id='blogs'>
                    <a href="https://medium.com/@2020is026/slurping-with-style-the-ux-battle-between-chopsticks-and-forks-d74bfb8c2e45" target="_blank" rel="noopener noreferrer">
                     <img src={fork} className='fork'  alt='forkUXCaseStudyBlog'/></a>
                     <a href="https://medium.com/@2020is026/typeface-triumph-navigating-the-world-of-fonts-for-seamless-ui-design-79e48017e1d6" target="_blank" rel="noopener noreferrer">
                    <img src={font} className='font'  alt='fontChoosingBlog'/></a>
                   
                    <img src={blogCircle} className='blogCirlce'  alt='blogCirlce'/>

                    <a href="https://medium.com/@2020is026/palette-paradox-50976a8d0802/" target="_blank" rel="noopener noreferrer">
                     <img src={color} className='color'  alt='colourChoosingBlog'/></a>
                     <a href="https://medium.com/@2020is026/material-ui-vs-bootstrap-choosing-the-right-ui-framework-for-your-project-c2af857350ba" target="_blank" rel="noopener noreferrer">
                    <img src={bvsm} className='bvsm'  alt='behanceVsmaterialUIBlog'/></a>
                    </div>




                     {/* Contact */}
                     <div className="contactPage" id='contact'>
                        <h4 className="contact">Contact</h4>
                    <div className='form-container'>
                    <form className="contactForm" onSubmit={handleSubmit}>
                            <div className="formGroup">
                            <h6 className='label'>Full Name</h6>
                            <input className='InputField'
                                type="text" 
                                name="fullName" 
                                value={formData.fullName} 
                                onChange={handleChange} 
                                required 
                                
                            />
                            </div>

                            <div className="formGroup">
                            <h6 className='label'>Email</h6>
                            <input className='InputField'
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                
                            />
                            </div>

                            <div className="formGroup">
                            <h6 className='label'>Message</h6>
                            <textarea className='InputField'
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                                rows="5"
                            ></textarea>
                            </div>

                            {error && <p className="error">{error}</p>}

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                       
                        </div>

                        <div className='footerImg'>
                             
                                  
                          <img src={footer} className='footer'  alt='footer'/>
                               
                        </div>

    </>
  )
}

export default Home