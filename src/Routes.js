import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';


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