import React from 'react';
import lexTrustCasestudyImg from '../img/Research.png';
import caseStudyVideo from '../Video/FinalPrototype.mp4';



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
