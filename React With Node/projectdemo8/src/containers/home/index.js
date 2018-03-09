import React from 'react';
import './home.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AboutUs from '../aboutus';
import Topics from '../topics';
import Main from '../main';
import Map from '../maps';
import Restaurants from '../restaurants';
import NotImplemented from '../notimplemented';

class Home extends React.Component{
    render(){
        //var params = this.props.location.params;
        var username = localStorage['username'];
        return (<div>
            <Header />
            <Switch>
                <Route exact path="/home" component={Main} />
                <Route path="/home/aboutus" component={AboutUs} />
                <Route path="/home/topics" component={Topics} />
                <Route path="/home/map" component={Map} />
                <Route path="/home/restaurants" component={Restaurants} />
                <Route path="/home/*" component={NotImplemented} />
            </Switch>
            <Footer userName={username}/>
        </div>);
    }
}

export default Home;