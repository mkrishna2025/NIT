import React from 'react';
import './login.css';

 class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			country: ''
		}
	}
	buttonClick(){
		//debugger;
		alert(JSON.stringify(this.state));
	}
	render() {
		 return (
			<div>
				<h3>Using CSS to style an HTML Form</h3>
				<div>
				  <label>First Name</label>
					<input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(event) => this.state.firstName = event.target.value}/>
					<label>Last Name</label>
					<input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(event) => this.state.lastName = event.target.value}/>
					<label>Country</label>
					<select id="country" name="country"  onChange={(event) => this.state.country = event.target.value} >
					  <option value="australia">Australia</option>
					  <option value="canada">Canada</option>
					  <option value="usa">USA</option>
					</select>
				  
					<input type="submit" value="Submit" onClick={this.buttonClick.bind(this)} />
				</div>
			</div>
		);
	}
}

export default TestComponent;
