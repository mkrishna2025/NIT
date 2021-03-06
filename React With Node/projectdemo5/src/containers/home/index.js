import React from 'react';
import './home.css';
import logo from '../../images/logo.png';
import { Route, Link, Switch } from 'react-router-dom';

class Main extends React.Component{
    render(){
        return <div>This is Main Page. </div>
    }
}

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

export class Header extends React.Component {
    render(){
        return (<div>
            <div class="title">
                <img src={logo} />
                <h1>React Learning Kit</h1>
            </div>
            <div class="header">
                <ul>
                    <li><Link to={"/home"} activeStyle={{color:"blue"}}>Home</Link></li>
                    <li><Link to={"/home/aboutus"} activeStyle={{color:"blue"}}>Aboutus</Link></li>
                    <li><Link to={"/home/topics"} activeStyle={{color:"blue"}}>Topics</Link></li>
                    <li><Link to={"/queries"} activeStyle={{color:"blue"}}>Queries</Link></li>
                    <li><Link to={"/contactus"} activeStyle={{color:"blue"}}>contactus</Link></li>
                    <li><Link to={"/attendees"} activeStyle={{color:"blue"}}>Attendees</Link></li>
                    <li><Link to={"/login"} activeStyle={{color:"blue"}}>Login</Link></li>
                    <li><Link to={"/Signup"} activeStyle={{color:"blue"}}>Signup</Link></li>
                    <li><Link to={"/Location"} activeStyle={{color:"blue"}}>Location</Link></li>
                    <li><Link to={"/MultipleMarker"} activeStyle={{color:"blue"}}>MultipleMarker</Link></li>
                    <li><Link to={"/GoogleMap"} activeStyle={{color:"blue"}}>GoogleMap</Link></li>
                </ul>
            </div>
        </div>);
    }
}

export class NotImplemented extends React.Component{
    render(){
        return <div>Need to implement</div>;
    }
}

export class Container extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path="/home" component={Main} />
                <Route path="/home/aboutus" component={AboutUs} />
                <Route path="/home/topics" component={Topics} />
                <Route path="/home/*" component={NotImplemented} />
            </Switch>
        );
    }
}

export class Footer extends React.Component{
    render(){
        return (
            <div>
                CopyRight @Krishna
            </div>
        );
    }
}

class Home extends React.Component{
    render(){
        return (<div>
            <Header />
            <Container/>
            <Footer/>
        </div>);
    }
}

export default Home;