import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {


  return ( 
    <header>
    <div class="intro">James Devereux</div>
    <div class="tagline"> Bilingual Fullstack Developer Seeking Opportunites</div>

        <div class="profile">
          
         <p>Tokyo-based full-stack developer from the UK with one year of development and support experience, looking for a position starting early 2020 at a startup as a frontend, backend, or fullstack engineer.</p>
         <p>Areas of web-development I am highly skilled in include:</p>
         <div className="skills-container">
           <ul className='skills-1'>
             <li>Ruby on Rails</li>
             <li>React</li>
             <li>Stimulus.js</li>
           </ul>
            <ul className="skills-2">
             <li>Ruby</li>
             <li>JavaScript</li>
             <li>HTML</li>
            </ul>
            <ul className="skills-3">
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Figma/Sketch</li>
            </ul>
            <ul className="skills-4">
              <li>SQL</li>
              <li>git & Github</li>
              <li>Heroku</li>
            </ul>
         </div>
         <p>I'm also an excellent critical thinker, problem solver, and communicator - both in English and my advanced Japanese.</p> 
         <ul>
           <li>Check out <Link to='/experience'>what I've learned</Link> over the last year with Le Wagon</li>
           <li>See some of <Link to='/projects'>the projects I've built </Link>in rails and react</li>
           <li>Interested in hiring me? Send me an email to <a href="mailto:devereuxjj@gmail.com">devereuxjj@gmail.com</a> and let's talk 🙂</li>
         </ul>
        </div>       
    
  </header>
   );
}
 
export default Home;