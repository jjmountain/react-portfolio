import React, { Component } from 'react';
import { BrowserRouter as Router,
         Switch,
         Route,
         Link
         } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

import './App.css';

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
