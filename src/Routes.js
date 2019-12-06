import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const Routes = () => {
  return ( 
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to='/' />
      </Switch>
   );
}
 
export default Routes;