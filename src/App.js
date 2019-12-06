import React, { Component } from 'react';
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
