import React from 'react';
import {
    BrowserRouter as Router,Switch,Route
  } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import AboutPage from './AboutPage';

const App = ()=>{
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/project" exact component={ProjectPage} />
            </Switch>

        </Router>
    );
}

export default App;