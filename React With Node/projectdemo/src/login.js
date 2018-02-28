import React from 'react';
import './login.css';

 class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			country: '',
			errorFirstName: '',
			errorLastName: '',
			errorCountry: '',
			errorMessages: []
		}
	}
	buttonClick(){
		//debugger;
		var isValidated = true;

		var errorFirstName = '';
		var errorLastName = '';
		var errorCountry = '';

		var messages = [];

		if(this.state.firstName == ''){
			errorFirstName = 'Please fill First Name';
			isValidated = false;
			messages.push(errorFirstName);
		}
		if(this.state.lastName == ''){
			errorLastName = 'Please fill Last Name';
			isValidated = false;
			messages.push(errorLastName);
		}
		if(this.state.country == ''){
			errorCountry = 'Please Select Country';
			isValidated = false;
			messages.push(errorCountry);
		}
		
		if(isValidated){
			//alert(JSON.stringify(this.state));
			var formData = new FormData();
			formData.append("userName", this.state.firstName);

			fetch('http://studentsdemo.azurewebsites.net/api/User/VerifyUser', {
				method: 'POST',
				body: formData
			}).then(function(response) {
				 return response.json();
			}).then(function(responseJSON) {
				debugger;
			}).catch(function(exception){
				debugger;
			});
		} else {
			this.setState({ 
				errorFirstName: errorFirstName, 
				errorLastName: errorLastName, 
				errorCountry: errorCountry,
				errorMessages: messages
			});
		}
	}
	render() {
		 return (
			<div>
				<h3>Using CSS to style an HTML Form</h3>
				<div>
				  <label>First Name</label>
					<input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={(event) => this.state.firstName = event.target.value}/>
					<span class="errorMessage">{this.state.errorFirstName}</span>
					<br/>
					<label>Last Name</label>
					<input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={(event) => this.state.lastName = event.target.value}/>
					<span class="errorMessage">{this.state.errorLastName}</span>
					<br/>
					<label>Country</label>
					<select id="country" name="country"  onChange={(event) => this.state.country = event.target.value} >
					  <option value="none">Please Select Country</option>
					  <option value="australia">Australia</option>
					  <option value="canada">Canada</option>
					  <option value="usa">USA</option>
					</select>
					<span class="errorMessage">{this.state.errorCountry}</span>
					<br/>
					{this.state.errorMessages.map(item => <li class="errorMessage">{item}</li>)}
					<input type="submit" value="Submit" onClick={this.buttonClick.bind(this)} />
				</div>
			</div>
		);
	}
}

export default TestComponent;
