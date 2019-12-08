import React, { Component } from 'react';

const Projects = () => {
  return ( 
    <div>
       <div className="section-heading">
        <h2 className='highlight'>Projects</h2>
      </div>
      <div>
        <h3>SpeakitLive</h3>
        <p>
          As the final project for Le Wagon, I came up with the idea for an application to help English teachers teach speaking to their students. The app allows students to record conversations on their smartphones and save them for future review activites. The teacher is able to give feedback on the conversations as they take place, and students are able to see this feedback at a later date.
        </p>
        <p>The app uses websockets via ActionCable to create live speaking sessions which both the teacher and student can simultaneously join. The audio file is uploaded to a cloud-based storage service which is referenced in the database.</p>
          <p>You can see me pitching our final product at our demo day below.</p>
          <strong>Technologies used:</strong>
        <div className='d-flex justify-content-between mt-2 '>
          <div>
            Ruby on Rails
            <ul><li>ActionCable</li><li>ActiveRecord</li><li>Postgresql</li></ul>
          Ruby gems: <ul><li>Devise</li><li>Pundit</li><li>Carrierwave</li></ul>
          Services: <ul><li>Cloudinary</li><li>Heroku</li><li>Github</li></ul>
          </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PUKd0lOSe74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    </div>
   );
}
 
export default Projects;