import React from 'react';
import './login.css';
import { isNullOrEmpty, apiPostCall } from '../../../src/util';
import ListBox from '../../components/listbox';

 class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
				{ value:'australia', name:'Australia' },
				{ value:'canada', name:'Canada' },
				{ value:'india', name:'India' }
			],
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

		if(isNullOrEmpty(this.state.firstName)){
			errorFirstName = 'Please fill First Name';
			isValidated = false;
			messages.push(errorFirstName);
		}
		if(isNullOrEmpty(this.state.lastName)){
			errorLastName = 'Please fill Last Name';
			isValidated = false;
			messages.push(errorLastName);
		}
		if(isNullOrEmpty(this.state.country)){
			errorCountry = 'Please Select Country';
			isValidated = false;
			messages.push(errorCountry);
		}

		this.setState({ 
			errorFirstName: errorFirstName, 
			errorLastName: errorLastName, 
			errorCountry: errorCountry,
			errorMessages: messages
		});
		
		if(isValidated){
			//alert(JSON.stringify(this.state));
			apiPostCall({
				url: 'User/VerifyUser',
				params:[
					{ key:'userName', value: this.state.firstName }
				],
				success: function(data){
					debugger;
					if(data.Success){
						alert('Logged in successfully');
					} else{
						alert('Invalid Credentials');
					}
				},
				failure: function(exception){
					debugger;
				}
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
					<ListBox id="country" name="country" label="Country" options={this.state.options} onChange={(event) => this.state.country = event.target.value}/>
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
