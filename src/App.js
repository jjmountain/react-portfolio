import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import Routes from './Routes';
import './App.css';

library.add(fab, faCheckSquare, faCoffee, faHome)


function App() {
  return (
    <>
      <Navbar />
    <div className="container">
      <Routes />
      </div>
    </>
  );
}

export default App;
