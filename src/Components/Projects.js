import React, { useState } from 'react';
import '../App.css';
import LexTrust from '../img/LexTrust.png';
import LMS from '../img/LMS.png';
import leftArrow from '../img/leftArrow.png';
import rightArrow from '../img/rightArrow.png';

// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

const ImageSlider = () => {
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

  return (
    <div className="projectLargeBox">
      <div className="ProjectBox">
        {/* Left Arrow */}
        <div className="ArrowImg leftArrow" onClick={prevSlide}>
          <img src={leftArrow} className="arrowImage" alt="leftArrow" />
        </div>

        {/* Image */}
        <div className="listOfProjects">
          {/* Wrap the image in a Link */}
          <Link to={currentIndex === 0 ? '/lextrustCS' : '/lmsCS'}>
            <img src={images[currentIndex]} className="slideImage" alt="Project" />
          </Link>
        </div>

        {/* Right Arrow */}
        <div className="ArrowImg rightArrow" onClick={nextSlide}>
          <img src={rightArrow} className="arrowImage" alt="rightArrow" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
