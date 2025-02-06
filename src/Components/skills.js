import React from 'react';
import SkillImg from '../img/Skills.png';
import '../App.css';

const skills = () => {
  return (
    <div className='skillList'>
        <img src={SkillImg} className='skills'  alt='skillImg'/>
    </div>
  )
}

export default skills