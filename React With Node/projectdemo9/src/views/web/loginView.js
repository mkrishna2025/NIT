import React, { Component } from 'react';
import './login.css';
import ListBox from '../../components/listbox';

export const LoginView = ({ 
  errorFirstName, 
  errorLastName, 
  errorCountry,
  onFirstNameChange,
  onLastNameChange,
  onCountryChange,
  options,
  errorMessages,
  onLoginClick
}) => (
  <div>
  <h3>Welcome to Training, Please Login</h3>
  <div>
    <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={onFirstNameChange}/>
      <span class="errorMessage">{errorFirstName}</span>
      <br/>
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={onLastNameChange}/>
      <span class="errorMessage">{errorLastName}</span>
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