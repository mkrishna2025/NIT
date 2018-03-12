import React, { Component } from 'react';
import { STUDENTS } from '../../data';
import './attendees.css';
import $ from 'jquery';

class Attendees extends Component {
	constructor(props) {
	  super(props);
		this.renderStudents = this.renderStudents.bind(this);
		this.searchButtonClick = this.searchButtonClick.bind(this);
		this.resetButtonClick = this.resetButtonClick.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.state = {
			name: '',
			age: '',
			stream: '',
			gender: '',
			filteredStudents: STUDENTS,
			students: STUDENTS
		}
	}

  componentDidMount(){
    var rows =  $('#attendeesTable')[0].rows;
    for(var row of rows){
      if(row.cells[4].innerText == 'male'){
        row.style.background = '#ffccff';
      } else if(row.cells[4].innerText == 'female'){
        row.style.background = '#ffff99';
      }
    }
  }

  renderItem(item, index){
  	return <tr key={index.toString()}>
	    <td>{item.number}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.stream}</td>
      <td>{item.gender}</td>
    </tr>;
  }

  renderStudents(){
	  return (
			this.state.filteredStudents.map(this.renderItem)
		);
  }

  onSearchChange(event){
	  this.state.searchText = event.target.value;
	  this.searchButtonClick();
  }

  searchButtonClick(){
	var items = []
	for(var index in this.state.students){
		var student = this.state.students[index];
		debugger;
		console.log()
		if(student.name.toLowerCase().indexOf(this.state.name.toLowerCase()) >= 0
		&& (this.state.age == '' || student.age == this.state.age)
		&& (this.state.stream == '' || student.stream == this.state.stream)
		&& (this.state.gender == '' || student.gender == this.state.gender))
		{
			items.push(student);
		}
	}

	this.setState({filteredStudents: items});
  }

  resetButtonClick(){
		this.setState({
			name:'',
			age:'',
			stream: '',
			gender: '',
			filteredStudents: this.state.students
		});
  }


  render() {
	  var students = this.renderStudents();

    return (
      <div className="Students">

      <div className="Search">

		<input
          type="text"
          maxLength="35"
          name="Search Names"
          placeholder="Search Names"
					value={this.state.name}
          onChange={(event) => { this.setState({name:event.target.value }) }}/>


    <select className="dropdown"
			  value={this.state.age}
		    onChange={(event) => { this.setState({age:event.target.value }) } }>
          <option value="Age" disabled="disabled" >Age</option>
					<option value="" >All Age</option>
          <option value="20" >20</option>
          <option value="21" >21</option>
          <option value="22" >22</option>
          <option value="23" >23</option>
          <option value="24" >24</option>
          <option value="25" >25</option>
          <option value="26" >26</option>
          <option value="27" >27</option>
          <option value="28" >28</option>
          <option value="29" >29</option>
          <option value="30" >30</option>
          <option value="31" >31</option>
     </select>

     <select className="dropdown"
		   value={this.state.stream}
		    onChange={(event) => { this.setState({stream:event.target.value })} }>
          <option value="">Select All Departments</option>
          <option value="UI Developer" >UI Developer</option>
          <option value="Backend Developer" >Backend Developer</option>
      </select>

			<select className="dropdown"
			 value={this.state.gender}
			  onChange={(event) => { this.setState({gender:event.target.value })}}>
				  <option value="">Select Gender</option>
					<option value="male" >male</option>
					<option value="female" >female</option>
					<option value="other" >other</option>
			</select>


		  <input
          className="button1"
          type="submit"
          value="Go"
          hidden={false}
					onClick={this.searchButtonClick}/>

		  <input
          className="button2"
          type="submit"
          value="Reset"
          hidden={false}
					onClick={this.resetButtonClick}/>

			</div>		

		  <table className="table" id="attendeesTable">

      <thead>
          <tr>
               <th style= {{width:10}}>S.No</th>
               <th> Name</th>
               <th>Age</th>
               <th>Department</th>
               <th>Gender</th>
          </tr>
      </thead>

      <tbody>
            {students}
      </tbody>

     </table>
	 </div>
    );
  }
}

export default Attendees;
