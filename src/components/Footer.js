import React from 'react';
import './All.css';
import iconFb from '../imgs/icons8-facebook-50.png';
import iconGh from '../imgs/icons8-github-50.png';
import iconLi from '../imgs/icons8-linkedin-50.png';
import iconEm from '../imgs/icons8-new-post-50.png';
// import iconIg from '../imgs/icons8-instagram-old-50.png';

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/aech12/'
      target='_blank' rel='noopener noreferrer'>
        <img src={`${iconGh}`} alt='gh'/>
      </a>
      <a href='https://www.linkedin.com/in/aech12/'
      target='_blank' rel='noopener noreferrer'>
        <img src={`${iconLi}`} alt='li'/>
      </a>
      <a href='https://www.facebook.com/alejandro.howez.35'
      target='_blank' rel='noopener noreferrer'>
        <img src={`${iconFb}`} alt='fb'/>
      </a>
      <a href='mailto:name@email.com'
      target='_blank' rel='noopener noreferrer'>
        <img src={`${iconEm}`} alt='email'/>
      </a>
      {/* <a href='#'
      target='_blank' rel='noopener noreferrer'>
        <img src={`${iconIg}`} alt='ig'/>
      </a> */}
    </div>
  )
}

export default Footer;