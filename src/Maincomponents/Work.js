import { useState,useRef } from 'react';
import AnimatedLetters from '../Components/AnimatedLetters';

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
 
    return(
        <>

  <div id="work">
    <div className="work-txt">
        <h1>
        <AnimatedLetters letterClass={letterClass}
        strArray={['L','a','t','e','s','t',' ','w','o','r','k','s']} 
        idx={15}/>
        </h1>
        <p>Here you will find some of the personal and clients projects that I  developed!</p>
    </div>

    <div className="work-gallery">
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
        <img className="workfirst" src= 'images/Group 13.png'  alt="logo"/>
    </div>
   
  
  </div>

   </>

);
}

export default Work; 