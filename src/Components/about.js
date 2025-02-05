import React, { useState } from 'react';
import '../App.css';

const About = () => {
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isExperienceOpen, setExperienceOpen] = useState(false);

  return (
    <div>
      {/* Education Section */}
      <div className="section">
        <h2 className="title" onClick={() => setEducationOpen(!isEducationOpen)}>
          Education <span className="plusIcon">{isEducationOpen ? '-' : '+'}</span>
        </h2>
        {isEducationOpen ? (
          <div>
            <div className="content">
              <h4 className='uni'><span className='degree'>B.Sc.(Hons) in Information Systems</span> | University of Colombo School of Computing</h4>
              <p className='date'>April 2021 - April 2025</p>

              <h4 className='uni'><span className='degree'>B.Sc.(Hons) in Information Systems</span> | University of Colombo School of Computing</h4>
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
            <hr className="hrLine" /> {/* Moves under expanded content */}
          </div>
        ) : (
          <hr className="hrLine" /> // Default position when not expanded
        )}
      </div>
    </div>
  );
};

export default About;
