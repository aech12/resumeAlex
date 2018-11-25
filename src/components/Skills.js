import React from 'react';
import './All.css';
import iconJs from '../imgs/icons8-javascript-50.png';
import iconRe from '../imgs/icons8-react-native-filled-50.png';
import iconNd from '../imgs/icons8-nodejs-50.png';
import iconPo from '../imgs/icons8-postgresql-50.png';

const Skills = () => {
  return (
    <div className='skills'>
      <h3>Skills</h3>
      <p>Javascript, React and DOC manipulation is where I put most of my learning time.</p>
      <hr/>
      <p>I understand the importance of</p><p style={{color:'rgb(245,255,0)'}}> Security and Performance</p><p> and I try to stay up to date in these areas.</p>
      <hr/>
      <p>In the short term I'd like to learn Redux and practice more NodeJS.</p>
      <hr/>
      <p>I'm quite interested in non relational databases and algorithms</p>
      <div className='skillsIcons'>
        <img src={`${iconJs}`} alt='Js'/>
        <img src={`${iconRe}`} alt='Re'/>
        <img src={`${iconNd}`} alt='Nd'/>
        <img src={`${iconPo}`} alt='Po'/>
      </div>
    </div>
  )
}

export default Skills;