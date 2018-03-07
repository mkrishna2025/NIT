import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Login2 from './containers/logintest.js';
import Home from './containers/home';
import { AboutUs } from './containers/home';

import { Route } from 'react-router-dom';

class Page1 extends Component{
  render() { return <div> Welcome to Page 1</div>; }
}

class Page2 extends Component{
  render() { return <div> Welcome to Page 2</div>; }
}

class Page3 extends Component{
  render() { return <div> Welcome to Page 3</div>; }
}



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
