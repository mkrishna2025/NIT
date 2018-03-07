import React from 'react';
import './home.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AboutUs from '../aboutus';
import Topics from '../topics';
import NotImplemented from '../notimplemented';

class Main extends React.Component{
    render(){
        return <div>This is Main Page. </div>
    }
}

class Home extends React.Component{
    render(){
        debugger;
        //var params = this.props.location.params;
        var username = localStorage['username'];
        return (<div>
            <Header />
            <Switch>
                <Route exact path="/home" component={Main} />
                <Route path="/home/aboutus" component={AboutUs} />
                <Route path="/home/topics" component={Topics} />
                <Route path="/home/*" component={NotImplemented} />
            </Switch>
            <Footer userName={username}/>
        </div>);
    }
}

export default Home;