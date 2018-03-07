import React from 'react';

const COURSES = ['React', 'React Native', 'Angular', 'Javascript', 'JQuery', 'Sencha'];
export default class Topics extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: COURSES,
            filteredCourses: COURSES
        };
    }
    searchBoxChange(event){
        var str = event.target.value;
        var newArray = [];
        for(var item of this.state.courses){
            if(item.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
                newArray.push(item);
            }
        }
        this.setState({filteredCourses: newArray}); 
    }
    
    render(){
        return (
            <div>
                <h3> Welcome to Courses </h3>
                <input type='text' onChange={this.searchBoxChange.bind(this)}/>
                {this.state.filteredCourses.map( item => <li>{item}</li>)}
            </div>
        );
    }
}