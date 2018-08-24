import React, { Component } from "react";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone_number: '',
      email: '',
      location: '',
      first_name: '',
      last_name: '',
      latitude: '',
      longitude: ''
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const name = evt.target.getAttribute('name');
    const value = evt.target.value;
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      phone_number: this.state.phone_number,
      email: this.state.email,
      location: this.state.location,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      },
      /* Necessary to pass the session cookie along with the request */
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(json => {
        this.props.onUserLoggedIn(json)
      })
  }

  render() {
    return (
      <div className="Register">
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <h3>Create An Account</h3>
          <p>Username <input type="text" name="username" value={this.state.username} /></p>
          <p>Password <input type="text" name="password" value={this.state.password} /></p>
          <p>Phone Number <input type="text" name="phone_number" value={this.state.phone_number} /></p>
          <p>Email <input type="text" name="email" value={this.state.email} /></p>
          <p>Location <input type="text" name="location" value={this.state.location} /></p>
          <p>First Name <input type="text" name="first_name" value={this.state.first_name} /></p>
          <p>Last name <input type="text" name="last_name" value={this.state.last_name} /></p>
          <p>Latitude <input type="text" name="latitude" value={this.state.latitude} /></p>
          <p>Longitude <input type="text" name="longitude" value={this.state.longitude} /></p>
          <p><input type="submit" value="Join eas-E-mart" class="join-eas-e" /></p>
        </form>
      </div>
    );
  }
}

export default Register;
