import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from './pages/components/Navbar';
import Routes from './Routes';
import Footer from './pages/components/Footer';
import './App.css';

library.add(fab, faCheckSquare, faCoffee, faHome, faQuoteLeft, faQuoteRight )


function App() {
  return (
    <>
    <wrapper className="d-flex flex-column">
      <Navbar />
      <div className="container" id='page-container'>
        <Routes />
      </div>
      <Footer />
    </wrapper>
    </>
  );
}

export default App;
