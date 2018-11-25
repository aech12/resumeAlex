import React from 'react';
import '../All.css';
import Proj from './Proj';
import {imgDescTitle} from './ProjectsFiles';

const Projects = () => {
  return (
    <div className='projects'>
      <h2 style={{margin:'10px', textDecoration:'underline'}}>Portfolio</h2>
      <Proj 
        img={imgDescTitle[0].img} title={imgDescTitle[0].title} 
        desc={imgDescTitle[0].description} url={imgDescTitle[0].url}
      />
      <Proj 
        img={imgDescTitle[1].img} title={imgDescTitle[1].title} 
        desc={imgDescTitle[1].description} url={imgDescTitle[1].url}
      />
      <Proj 
        img={imgDescTitle[2].img} title={imgDescTitle[2].title} 
        desc={imgDescTitle[2].description} url={imgDescTitle[2].url}
      />
      <Proj 
        img={imgDescTitle[3].img} title={imgDescTitle[3].title} 
        desc={imgDescTitle[3].description} url={imgDescTitle[3].url}
      />
      <Proj 
        img={imgDescTitle[4].img} title={imgDescTitle[4].title} 
        desc={imgDescTitle[4].description} url={imgDescTitle[4].url}
      />
      <Proj 
        img={imgDescTitle[5].img} title={imgDescTitle[5].title} 
        desc={imgDescTitle[5].description} url={imgDescTitle[5].url}
      />
      <Proj 
        img={imgDescTitle[6].img} title={imgDescTitle[6].title} 
        desc={imgDescTitle[6].description} url={imgDescTitle[6].url}
      />
      <Proj 
        img={imgDescTitle[7].img} title={imgDescTitle[7].title} 
        desc={imgDescTitle[7].description} url={imgDescTitle[7].url}
      />
    </div>
  )
}

export default Projects;