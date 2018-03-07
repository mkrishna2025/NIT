import React from 'react';
import { isNullOrEmpty, apiPostCall } from '../../../src/util';
import LoginView from '../../views/web/loginView';

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
		var loginScope = this;
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
						//this.props.history.push('/home');
						localStorage['username'] = this.state.firstName;
						this.props.history.push({
							pathname: '/home',
							params: {userName: this.state.firstName}
						});
					} else{
						alert('Invalid Credentials');
					}
				},
				failure: function(exception){
					debugger;
				}
			}, this);
		}
	}
	render(){
		return <LoginView 
			options = {this.state.options}
			errorFirstName = {this.state.errorFirstName}
			errorLastName = {this.state.errorLastName}
			errorCountry = {this.state.errorCountry}
			errorMessages = {this.state.errorMessages}
			onLoginClick = {this.buttonClick.bind(this)}
			onFirstNameChange = {(event) => this.state.firstName = event.target.value}
			onLastNameChange = {(event) => this.state.lastName = event.target.value}
			onCountryChange = {(event) => this.state.country = event.target.value}
		/>;
	}
}

export default TestComponent;
