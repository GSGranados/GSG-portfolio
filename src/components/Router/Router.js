import React from 'react'
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Router = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route  path="/aboutme" component={AboutMe}></Route>
            <Route  path="/contact" component={Contact}></Route>
            <Route  path="/projects" component={Projects}></Route>
            <Route  path="/resume" component={Resume}></Route>

        </Switch>
            
        </div>
    )
}

export default Router;
