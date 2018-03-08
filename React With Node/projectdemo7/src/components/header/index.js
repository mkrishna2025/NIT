import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links: [
                {link: "/home", label: 'Home'},
                {link: "/home/aboutus", label: 'Aboutus'},
                {link: "/home/topics", label: 'Topics'},
                {link: "/home/queries", label: 'Queries'},
                {link: "/home/map", label: 'Map'}
            ]
        }
    }
    render(){
        return (<div>
            <div class="title">
                <img src={logo} />
                <h1>React Learning Kit</h1>
            </div>
            <div class="header">
                <ul>
                    {this.state.links.map( item => <li><Link to={item.link} activeStyle={{color:"blue"}}>{item.label}</Link></li>)}
                </ul>
            </div>
        </div>);
    }
}