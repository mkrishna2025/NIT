import React, { Component } from 'react';
import './login.css';
import ListBox from '../../components/listbox';

export const LoginView = ({ 
  errorUsername, 
  errorPassword, 
  errorCountry,
  onUsernameChange,
  onPasswordChange,
  onCountryChange,
  options,
  errorMessages,
  onLoginClick
}) => (
  <div>
  <h3>Welcome to Training, Please Login</h3>
  <div>
    <label>UserName</label>
      <input type="text" id="username" name="username" placeholder="Username.." onChange={onUsernameChange}/>
      <span class="errorMessage">{errorUsername}</span>
      <br/>
      <label>Password</label>
      <input type="text" type="password" id="password" name="password" placeholder="Password.." onChange={onPasswordChange}/>
      <span class="errorMessage">{errorPassword}</span>
      <br/>
      <label>Country</label>
      <ListBox id="country" name="country" label="Country" options={options} onChange={onCountryChange}/>
      <span class="errorMessage">{errorCountry}</span>
      <br/>
      {errorMessages.map(item => <li class="errorMessage">{item}</li>)}
      <input type="submit" value="Submit" onClick={onLoginClick} />
  </div>
</div>
);