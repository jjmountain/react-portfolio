import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './experience.css'
import Quote from './components/Quote';


import CarouselExp from './components/CarouselExp';

const Experience = () => {
  const quoteThree = 'Really appreciated the effort he made to understand and get engaged with our projects. Very nice and approachable.';
  const quoteTwo = 'James has a great asset as a TA: his patience. He always takes his time to explain and be sure that the concepts were well understood.';
  const quoteOne = 'James is very helpful and knowledgeable.';
  const quoteFour = "James is hands down the best TAs in terms of explaining a certain topic you don't understand. He has this amazing way of teaching people and has a really amazing personality";

  return ( 
    <div>
      <div className="section-heading">
        <h2 className='highlight'>Work Experience</h2>
      </div>
      <a href="https://www.lewagon.com/tokyo" target='_blank' rel="noopener noreferrer"><img src={require("./assets/lewagon.png")} alt="lewagon-logo" className='logo' /></a>
      <div className="grid-container ">
      <div className='lewagon-intro-text'>
        <p>
          At the beginning of 2019 I started my journey to go from being an English teacher to 
          becoming a full-stack developer by joining 
          <a href="https://www.lewagon.com/tokyo" target='_blank' rel="noopener noreferrer"> Le Wagon 9-week fullstack bootcamp in Tokyo</a>. 
          After graduating from the bootcamp I was invited to work for the company as a teaching assistant, where I worked for the rest of 2019.
        </p>
        </div>
      <div className="lewagon-text">
        <h6><strong><u>Teaching Assistant at Tokyo Coding Bootcamps</u></strong></h6>
        <h9>April - November 2019</h9>
          <p>
           During my time as a teaching assistant, I supported over 60 students, across three batches to go from having no coding knowledge to becoming competent full-stack developers. Most of my time was spent helping students debug their code, either in coding exercises or in the projects that they were building. I also helped organize social events such as weekly futsal games.     
          </p>
          <p>
            Here is some of the annoymous feedback that former students left for me after completing the bootcamp:
          </p>
            <Quote quoteText={quoteOne} className='quote-one'/>
            <Quote quoteText={quoteTwo}/>
            <Quote quoteText={quoteThree}/>
        </div>
        <div className="lewagon-photo">
          <img src={require('./assets/lewagonteam.jpg')} alt="le wagon team" className='exp-img'/>
          <img src={require('./assets/lewagon2.jpg')} className='exp-img my-4' alt="" />

        </div>
        <div className="lewagon-text">
          <h6><u><strong>Student on Fullstack Coding Bootcamp</strong></u></h6>
          <h9 className='mb-4'>January - March 2019</h9>
          <p>During this 9-week intensive coding bootcamp I gained a foundation in HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.</p>
          <p>Over the final 3 weeks, I lead a team of 4 classmates as lead developer to develop, implement and ship to production an app for teaching speaking skills in the English classroom (Speakit Live), and a marketplace for finding barbers in Tokyo (Aircuts). Read more about these <Link to='/projects'>here</Link> .</p>
        </div>
        <div className="lewagon-photo">
          <img src={require('./assets/livecode.jpg')} className='exp-img mb-4' alt="" />
        </div>
        
      </div>
    </div>
   );
}
 
export default Experience;