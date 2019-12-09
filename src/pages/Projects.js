import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './projects.css';

const Projects = () => {
  return ( 
    <div>
       <div className="section-heading">
        <h2 className='highlight'>Projects</h2>
      </div>
      <div>
        <div className="d-flex justify-content-between"><h3 className='d-inline'>SpeakitLive</h3> <a href="https://github.com/jjmountain/speakit-live" target='_blank' rel="noopener noreferrer">[view on github]</a></div>
        
        <p>
          As the final project for Le Wagon, I came up with the idea for an application to help English teachers teach speaking to their students. The app allows students to record conversations on their smartphones and save them for future review activites. The teacher is able to give feedback on the conversations as they take place, and students are able to see this feedback and comment on it for homework.
        </p>
        <p>The app uses websockets via ActionCable to create live speaking sessions which both the teacher and student can simultaneously join and update without refreshing the page. The audio file is uploaded to a cloud-based storage service and made available for the student to listen to a later date.</p>
          <p>Currently the site is not in a working version, but you can see me pitching a demo of our final product at our demo day below.</p>
          <u>Technologies used:</u>
        <div className='d-flex justify-content-between mt-2 '>
          <div>
            Ruby on Rails
            <ul><li>ActionCable</li><li>ActiveRecord</li><li>Postgresql</li></ul>
          Ruby gems: <ul><li>Devise</li><li>Carrierwave</li></ul>
          Services: <ul><li>Cloudinary (cloud-based storage)</li><li>Heroku</li><li>Github</li></ul>
          </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PUKd0lOSe74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>

    <hr className='my-4' />
    <div className="d-flex justify-content-between mt-4"><h3 className='d-inline'><a href="https://kanji-livesearch.herokuapp.com/" target='_blank' rel="noopener noreferrer">Kanji LiveSearch</a></h3> <a href="https://github.com/jjmountain/kanji-explorer" target='_blank' rel="noopener noreferrer">[view on github]</a></div>
    <p>To practice React and to help me learn Japanese, I built a React client on top of a Ruby on Rails backend that allows you to search a database of Kanji and returns results based on number of criteria such as characters, readings, or English words that can be made from the Kanji. By using Rails in API mode, and making using of the pg_search gem I was able fetch live results with React as the user enters each character into the search box.</p>
    <p>I seeded the data from community-produced flashcards from the Anki app, which I was able to export into JSON format with the help of <a href="https://ankiweb.net/shared/info/1788670778" target='_blank' rel="noopener noreferrer">this plugin</a>. The database needed a lot of cleaning, but this was great practice for my Ruby skills.</p>
    <p>I'm continuing to work on the app by adding more features to allow users to save kanji and vocabulary for later review through a spaced repetition system.</p>
    <u>Technologies used:</u>
    <div className='d-flex justify-content-between mt-4'>
    <div>
        Ruby on Rails
        <ul><li>API Mode</li><li>Postgresql</li><li>PG_search gem</li></ul>
      Javascript: <ul><li>React</li></ul>
      Services: <ul><li>Heroku</li><li>Github</li></ul>
      </div>
      <div>
      <a href="https://kanji-livesearch.herokuapp.com/" target='_blank' rel="noopener noreferrer"><img src={require('./assets/kanji-live-pic.jpg')} alt='kanji-live-search-screenshot' className='project-pic'/></a>
      </div>
    </div>

    <hr className='my-4' />
    <div className="d-flex justify-content-between mt-4"><h3 className='d-inline'>ClassKeeper</h3> <a href="https://github.com/jjmountain/class-keeper" target='_blank' rel="noopener noreferrer">[view on github]</a></div>
    <p>Following on from the classroom app that I developed for LeWagon, I was inspired to create an app that would simplify classroom management, lesson planning, and lesson flows to help me keep track of my classes at the universities I taught at.</p>
    <p>The app uses two User models, one for students and one for teachers, and will allow students to send live updates to the students over websockets. The app is a work in progress but I plan on rolling out a beta version in 2020.</p>
    <u>Technologies used:</u>
    <div className='d-flex justify-content-between mt-4'>
    <div>
        Ruby on Rails
        <ul><li>Action Cable</li></ul>
      Javascript: <ul><li>Stimulus.js</li></ul>
      Services: <ul><li>Heroku</li><li>Github</li></ul>
      </div>
      <div>
      <img src={require('./assets/classkeeper-pic.png')} alt='kanji-live-search-screenshot' className='project-pic'/>
      </div>
    </div>

    <hr className='my-4' />
    <div className="d-flex justify-content-between mt-4"><h3 className='d-inline'>This Portfolio Website(..!)</h3> <a href="https://github.com/jjmountain/react-portfolio" target='_blank' rel="noopener noreferrer">[view on github]</a></div>
    <p>I initially designed my portfolio website as a single HTML page, but after it grew I decided that it would work better as a one page React app.</p>
    <p>I used React Router for the routing to create super-fast links between the pages, as well as Bootstrap 4 and FontAwesome Icons to help me to quickly build a decent-looking site.</p>
    </div>
   );
}
 
export default Projects;