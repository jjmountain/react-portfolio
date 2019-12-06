import React, { Component } from 'react';

const Experience = () => {
  return ( 
    <div>
      <div className="section-heading">
        <h2 className='highlight'>Work Experience</h2>
      </div>
      <img src={require("./assets/lewagon.png")} alt="lewagon-logo" className='logo' />
      <div className="grid-container">
      <div className="lewagon-text">
        <div>
        <p>
          Le Wagon Tokyo is an intensive 9-week fullstack coding bootcamp 
        </p>

        </div>
        <h6>Teaching Assistant at Tokyo Coding Bootcamps</h6>
        <h9>April - November 2019</h9>
          <p>
            Since graduating from the Le Wagon  I was invited to come back to work as a teaching assistant. Since then I have helped over 60 students, across three batches to go from having no knowledge of coding to becoming competent full-stack developers. 
          </p>
        </div>
        
        <div className="lewagon-photo">
          <img src={require('./assets/batch226.jpg')} className='exp-img mb-4' alt="" />
        </div>
        <div className="lewagon-text">
          <h6>Student on Fullstack Coding Bootcamp</h6>
          <h9 className='mb-4'>January - March 2019</h9>
          <p>During this 9-week intensive coding bootcamp I gained a foundation in HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.</p>
          <p>Over the final 3 weeks, I lead a team of 4 classmates as lead developer to develop, implement and ship to production an app for teaching speaking skills in the English classroom (Speakit Live), and a marketplace for finding barbers in Tokyo (Aircuts).</p>
        </div>
        <div className="lewagon-photo">
          <img src={require('./assets/lewagon2.jpg')} className='exp-img mb-4' alt="" />
        </div>
        <div className="lewagon-photo">
          <img src={require('./assets/livecode.jpg')} className='exp-img mb-4' alt="" />
        </div>
      </div>
    </div>
   );
}
 
export default Experience;