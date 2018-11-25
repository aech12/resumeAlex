import React from 'react';
import '../All.css';

const Projects = ({img, title, desc, url}) => {
  return (
    <div className='projectComponent'>
      <img src={`${img}`} alt='projectImage' width='200 px'/>
      <div><a href={`${url}`}>Launch</a></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Projects;