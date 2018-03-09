import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Login2 from './containers/logintest.js';
import Home from './containers/home';
import AboutUs from './containers/aboutus';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

import { Authentication } from '../src/components/authenticate.js';

import { Route, Redirect } from 'react-router-dom';

class Page1 extends Component{
  render() { return <div> Welcome to Page 1</div>; }
}

class Page2 extends Component{
  render() { return <div> Welcome to Page 2</div>; }
}

class Page3 extends Component{
  render() { return <div> Welcome to Page 3</div>; }
}

const CustomRoute = (props) => ( 
  <Route {...props} />
);

const CustomRoute2 = ({ component: DynamicComponent, ...rest }) => ( 
  <Route {...rest} component={DynamicComponent}/>
);

const CustomRoute3 = ({ component: DynamicComponent, ...rest }) => ( 
  <Route {...rest} render={(props) => (<DynamicComponent {...props} />)}/>
);

const MasterPageRoute = ({ component: DynamicComponent, ...rest }) => ( 
  <Route {...rest} render={(props) => (
    <div>
        <Header />
        <DynamicComponent />
        <Footer/>
    </div>
  )}/>
);

const AuthenticatedRoute = ({ component: DynamicComponent, ...rest }) => ( 
  <Route {...rest} render={(props) =>
     ( Authentication.isAuthenticated() ? <DynamicComponent {...props} /> :  <Redirect to="/" /> )}/>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <AuthenticatedRoute path="/home" component={Home} />
        <MasterPageRoute exact path="/aboutus" component={AboutUs} />
      </div>
    );
  }
}

export default App;
