import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Intro from './components/Intro';
import Guide from './components/Guide';
import Reference from './components/Reference';
import Login from './components/Login';


// using ES6 modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default class App extends Component{
  render(){
    return (
      <Router basename="/mysite">
        <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
			<Route path="/intro" component={Intro}/>
			<Route path="/guide" component={Guide}/>
			<Route path="/reference" component={Reference}/>
			<Route path="/login" component={Login}/>
          </Switch>
      </Router>   
    );
  }
}



