import React, { Component } from 'react';
import './home.css';

const Home = () => {


  return ( 
    <header>
    <div class="intro">James Devereux</div>
    <div class="tagline"> Bilingual Fullstack Developer Seeking Opportunites</div>

        <div class="profile">
          
         <p>Tokyo-based full-stack developer from the UK with one year of development experience, <span class="highlight">looking for a position starting early 2020</span> at a startup as a frontend, backend, or fullstack engineer. Open to remote but in-person in Tokyo is preferred.</p>
         <p>Areas of web-development I am highly skilled in include:</p>
         <div className="skills-container">
           <ul className='skills-group'>
             <li>Ruby on Rails</li>
             <li>JavaScript</li>
             <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>SQL</li>
             <li>git</li>
            <li>Github</li>
            <li>Heroku</li>
           </ul>
         </div>

         {/* <ul>
           <li>Check out <a href="#lewagon">what I've learned over the last year with Le Wagon</a></li>
           <li>See some of <a href="#projects">the projects</a> I've worked on in rails and react</li>
           <li>Interested in hiring me? Send me <a href="mailto:devereuxjj@gmail.com">an email</a> and let's talk 🙂</li>
         </ul> */}
        </div>       
    
  </header>
   );
}
 
export default Home;