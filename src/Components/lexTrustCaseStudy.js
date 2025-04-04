import React from 'react';
import lexTrustCasestudyImg from '../img/Research.png';
<<<<<<< HEAD
import caseStudyVideo from '../Video/FinalPrototype.mp4';
=======
import caseStudyVideo from '../img/FinalPrototype.mp4';
>>>>>>> 58c9a3192b4a882c4cbb8b072ad344e820e1c787

const lexTrustCaseStudy = () => {
  return (
     <div className='researchCSDisplay'>
          
            <img src={lexTrustCasestudyImg} className='lmsCaseStudy'  alt='4thyr Research'/>
            <video className='lmsCaseStudyVideo' controls width="600">
        <source src={caseStudyVideo} type="video/mp4" />
      </video>
        </div>
  )
}

export default lexTrustCaseStudy
