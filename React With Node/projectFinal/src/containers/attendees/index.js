import React, { Component } from 'react';
//import { STUDENTS } from '../../data';
import './attendees.css';
import $ from 'jquery';
import { apiPostCall, apiGetCall } from '../../../src/util';

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
			filteredStudents: [],
			students: [],
      attendeeName: '',
      attendeeDepartment: '',
      attendeeGender: '',
      attendeeAge: ''
		}
	}

  loadAttendess(){
    apiGetCall({
      url: 'Users/GetAttendees',
      success: function(response){
        if(response.success && response.data){
          this.setState({ students: response.data, filteredStudents: response.data });
        }
      },
      failure: function(exception){
        alert('Failed');
      }
    }, this);
  }
  componentDidMount(){
    this.loadAttendess();
    /*var rows =  $('#attendeesTable')[0].rows;
    for(var row of rows){
      if(row.cells[4].innerText == 'male'){
        row.style.background = '#ffccff';
      } else if(row.cells[4].innerText == 'female'){
        row.style.background = '#ffff99';
      }
    }*/
  }

  renderItem(item, index){
  	return <tr key={index.toString()}>
	    <td>{item.RowKey}</td>
      <td>{item.Name}</td>
      <td>{item.Age}</td>
      <td>{item.Department}</td>
      <td>{item.Gender}</td>
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
		if(student.Name.toLowerCase().indexOf(this.state.name.toLowerCase()) >= 0
		&& (this.state.age == '' || student.Age == this.state.age)
		&& (this.state.stream == '' || student.Department == this.state.stream)
		&& (this.state.gender == '' || student.Gender.toLowerCase() == this.state.gender.toLowerCase()))
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

  saveAttendee(event){
      apiPostCall({
				url: 'Users/CreateAttendee',
				params:[
					{ key: 'name', value: this.state.attendeeName },
					{ key: 'department', value: this.state.attendeeDepartment },
          { key: 'age', value: this.state.attendeeAge },
          { key: 'gender', value: this.state.attendeeGender }
				],
				success: function(response){
					if(response.success && response.data){
            alert('Success');
            this.loadAttendess();
					}
				},
				failure: function(exception){
					alert('Failed');
				}
			}, this);
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
					<option value="male" >Male</option>
					<option value="female" >Female</option>
					<option value="other" >Other</option>
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

      <div style={{float: 'right'}}>
        <input type='text' style={{ width:300 }} placeholder="Please enter name..." onChange={event => this.state.attendeeName = event.target.value } />
        <br/>
        <select className="dropdown" style={{ width:300 }}
          onChange={(event) => { this.state.attendeeAge = event.target.value } }>
            <option value="Age" disabled="disabled" >Age</option>
            <option value="" >Select Age</option>
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
        <br/>
        <select className="dropdown" style={{ width:300 }}
          onChange={(event) => { this.state.attendeeDepartment = event.target.value } }>
            <option value="">Select Department</option>
            <option value="UI Developer" >UI Developer</option>
            <option value="Backend Developer" >Backend Developer</option>
        </select>

        <br/>
        <select className="dropdown" style={{ width:300 }}
          onChange={(event) => { this.state.attendeeGender = event.target.value }}>
            <option value="">Select Gender</option>
            <option value="Male" >Male</option>
            <option value="Female" >Female</option>
            <option value="Other" >Other</option>
        </select>
        <br/>
        <input type="button" value="Save Attendee" onClick={this.saveAttendee.bind(this)} />
      </div>	

		  <table className="table" id="attendeesTable">

      <thead>
          <tr>
               <th>S.No</th>
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
