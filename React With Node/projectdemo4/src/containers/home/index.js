import React from 'react';
import './home.css';
import logo from '../../images/logo.png';
import { Route, Link, Switch } from 'react-router-dom';

export class AboutUs extends React.Component{
    render(){
        return <div>This is Aboutus Page. </div>
    }
}

export class Topics extends React.Component{
    render(){
        return <div>This is Topics Page. </div>
    }
}

const Header = () => (
  <div>
    <div class="title">
        <img src={logo} />
        <h1>React Learning Kit</h1>
    </div>
    <div class="header">
      <ul>
          <li><Link to={"/home"} activeStyle={{color:"blue"}}>Home</Link></li>
          <li><Link to={"/home/aboutus"} activeStyle={{color:"blue"}}>Aboutus</Link></li>
          <li><Link to={"/home/topics"} activeStyle={{color:"blue"}}>Topics</Link></li>
          <li><Link to={"/home/queries"} activeStyle={{color:"blue"}}>Queries</Link></li>
          <li><Link to={"/home/contactus"} activeStyle={{color:"blue"}}>contactus</Link></li>
          <li><Link to={"/home/attendees"} activeStyle={{color:"blue"}}>Attendees</Link></li>
          <li><Link to={"/home/login"} activeStyle={{color:"blue"}}>Login</Link></li>
          <li><Link to={"/home/Signup"} activeStyle={{color:"blue"}}>Signup</Link></li>
          <li><Link to={"/home/Location"} activeStyle={{color:"blue"}}>Location</Link></li>
          <li><Link to={"/home/MultipleMarker"} activeStyle={{color:"blue"}}>MultipleMarker</Link></li>
          <li><Link to={"/home/GoogleMap"} activeStyle={{color:"blue"}}>GoogleMap</Link></li>
      </ul>
    </div>
  </div>
)

class Main extends React.Component{
    render() { return <div>This is Main Panel</div>; }
}

const CenterPanel = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Main}/>
      <Route path='/home/aboutus' component={AboutUs}/>
      <Route path='/home/topics' component={Topics}/>
    </Switch>
  </main>
)


class Home extends React.Component{
    render(){
        return (  <div>
                    <Header />
                    <CenterPanel />
                </div>);
    }
}

export default Home;