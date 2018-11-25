import React from 'react';
import './All.css';
import avatar from '../imgs/avatar.png';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <h3>About Me</h3>
      <p>I'm a self-taught web dev from Argentina, putting my focus on</p><p style={{color:'red', fontWeight:'bold'}}> Front End development.</p>
      <img src={`${avatar}`} alt='avatar' width='210px'/>
      <p>I have a preference for part-time, remote working as it best supports my learning in this field, and in others.</p>
    </div>
  )
}

export default AboutMe;