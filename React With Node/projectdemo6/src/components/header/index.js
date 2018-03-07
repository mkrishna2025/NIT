import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
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
        </div>);
    }
}