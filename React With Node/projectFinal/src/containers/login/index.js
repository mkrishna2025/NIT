import React from 'react';
import { isNullOrEmpty, apiPostCall } from '../../../src/util';
import { LoginView } from '../../views/web/loginView';
import { Authentication } from '../../components/authenticate.js';

 class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
				{ value:'australia', name:'Australia' },
				{ value:'canada', name:'Canada' },
				{ value:'india', name:'India' }
			],
			username: '',
			password: '',
			country: '',
			errorUsername: '',
			errorPassword: '',
			errorCountry: '',
			errorMessages: []
		}
	}

	buttonClick(){
		var loginScope = this;
		var isValidated = true;

		var errorUsername = '';
		var errorPassword = '';
		var errorCountry = '';

		var messages = [];

		if(isNullOrEmpty(this.state.username)){
			errorUsername = 'Please fill UserName';
			isValidated = false;
			messages.push(errorUsername);
		}
		if(isNullOrEmpty(this.state.password)){
			errorPassword = 'Please fill Password';
			isValidated = false;
			messages.push(errorPassword);
		}
		if(isNullOrEmpty(this.state.country)){
			errorCountry = 'Please Select Country';
			isValidated = false;
			messages.push(errorCountry);
		}

		this.setState({ 
			errorUsername: errorUsername, 
			errorPassword: errorPassword, 
			errorCountry: errorCountry,
			errorMessages: messages
		});
		
		if(isValidated){
			//alert(JSON.stringify(this.state));
			apiPostCall({
				url: 'Users/CheckUserExists',
				params:[
					{ key: 'username', value: this.state.username },
					{ key: 'password', value: this.state.password }
				],
				success: function(response){
					debugger;
					if(response.success && response.data){
						alert('Logged in successfully');
						//this.props.history.push('/home');
						localStorage['username'] = this.state.userName;
						Authentication.authenticate(() => {
							this.props.history.push({
								pathname: '/home',
								params: {userName: this.state.userName}
							});
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
			errorUsername = {this.state.errorUsername}
			errorPassword = {this.state.errorPassword}
			errorCountry = {this.state.errorCountry}
			errorMessages = {this.state.errorMessages}
			onLoginClick = {this.buttonClick.bind(this)}
			onUsernameChange = {(event) => this.state.username = event.target.value}
			onPasswordChange = {(event) => this.state.password = event.target.value}
			onCountryChange = {(event) => this.state.country = event.target.value}
		/>;
	}
}

export default TestComponent;
