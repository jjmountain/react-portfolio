import React, { Component } from 'react';
import './home.css';

const Home = () => {
  return ( 
    <header>
    <div class="intro">James Devereux</div>
    <div class="tagline">  Bilingual Ruby on Rails and React Developer </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="english-tab" data-toggle="tab" href="#english-intro" role="tab" aria-controls="home" aria-selected="true">🇬🇧</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="japanese-tab" data-toggle="tab" href="#japanese-intro" role="tab" aria-controls="profile" aria-selected="false">🇯🇵</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="english-intro" role="tabpanel" aria-labelledby="home-tab">
        <div class="profile">
          
         <p>Full-stack developer from the UK with one year of development experience, <span class="highlight">looking for a position starting early 2020</span> at a startup as a frontend, backend, or fullstack engineer. Open to remote but in-person in Tokyo is preferred.</p>

         <ul>
           <li>Check out <a href="#lewagon">what I've learned over the last year with Le Wagon</a></li>
           <li>See some of <a href="#projects">the projects</a> I've worked on in rails and react</li>
           <li>Interested in hiring me? Send me <a href="mailto:devereuxjj@gmail.com">an email</a> and let's talk 🙂</li>
         </ul>
        </div>
      </div>
      <div class="tab-pane fade" id="japanese-intro" role="tabpanel" aria-labelledby="profile-tab">
        <div class="profile">
          <p>
          私は東京に拠点を置く英国のフルスタック開発者で、Le Wagonでティーチングアシスタントとして1年間の開発経験があります。 私は、フロントエンド、バックエンド、またはフルスタックエンジニアとして、東京のスタートアップで2020年初頭から仕事を探しています。
        </p>
        </div>  
      </div>
    </div>
    <div class="icons-social">
        <a href="https://github.com/jjmountain" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/james-devereux-3a1abb24/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/jjdevz/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>    
  </header>
   );
}
 
export default Home;