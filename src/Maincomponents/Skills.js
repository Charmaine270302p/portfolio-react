import {Outlet} from 'react-router-dom';
import { useState,useRef } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';
import MyCanvasContainer from '../Components/MyCanvasContainer';


const Skills = () => {

  

    const [letterClass, setLetterClass] = useState('text-animate')


 
    return(
        <>
        <div className="page">
          
   <span className='tags top-tags'>
       &lt;html&gt;
       <br />
       <span className='bottom-tag-html'>&lt;body&gt;</span>
   </span>

   <Outlet />

   <span className='tags bottom-tags'>
       &lt;/body&gt;
       <br />
       <span className='bottom-tag-html'>&lt;/html&gt;</span>
   </span>
       
  </div>

  <div id="skill">
    <div className="skill-txt">

        <h1>
           <AnimatedLetters letterClass={letterClass}
            strArray={['S','k','i','l','l','s',' ','&',' ', ' ',' ','E','x','p','e','r','i','n','c','e']} 
            idx={15}/>
        </h1>
        <p className="skill-para">I decided to pursue a career in UI/UX Design because I desired to live creatively
             and address people's true needs when it came to visual language. My constant goal
              is to enhance the user’s experience while fusing pragmatism and aesthetics.</p>
             
             
        <p className='skill-para1'>I consider myself to be a delicate balance of process and creativity, fiercely
             motivated by passion. The subtle yet profound nuances that are deeply ingrained
              in African cultures, such as patterns, textures, historical writings, symbols,
               and color as a form of visual communication, have a significant influence on my work.</p>
    </div>
        
        <MyCanvasContainer />

 


  </div>





  
   
   
   </>

);
}

export default Skills; 