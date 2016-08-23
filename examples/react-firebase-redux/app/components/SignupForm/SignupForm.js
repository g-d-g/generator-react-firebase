<<<<<<< HEAD
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import './SignupForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrivateChange = this.handlePrivateChange.bind(this);
    this.state = {};
  }
  static propTypes = {
    onLoginClick: PropTypes.func.isRequired
  };
  /**
   * @function handleSignup
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleSignup(event) {
    event.preventDefault();
    let newAccountData = this.getState();
    newAccountData.password = this.password ? this.password : '';
    this.props.onLoginClick(newAccountData);
  }
  /**
   * @function handleInputChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleInputChange(name, e) {
    e.preventDefault();
    this.setState({
      [name]: e.target.value
    });
  }
  /**
   * @function handleUsernameChange
   * @description Store private values.
   * @fires context#setState
   */
  handlePrivateChange(name, e) {
    e.preventDefault();
    this[name] = e.target.value;
  }
  render() {
    return (
      <form className="SignupForm" onSubmit={this.handleSignup}>
        <div className="SignupForm-Input-Wrapper">
          <span className="SignupForm-Label">Username</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'username')}
=======
import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'

import './SignupForm.scss'

const fieldStyle = { width: '80%' }
const buttonStyle = { width: '96%', marginBottom: '.5rem' }

export const fields = [ 'username', 'email', 'password' ]

const validate = values => {
  const errors = {}
  if (!values.username) errors.username = 'Required'
  if (!values.email) errors.email = 'Required'
  if (!values.password) errors.password = 'Required'
  return errors
}

class SignupForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onSignup: PropTypes.func.isRequired
  }

  render () {
    const {fields: { username, email, password } } = this.props
    return (
      <form className='SignupForm' onSubmit={this.props.onSignup}>
        <TextField
          hintText='username'
          floatingLabelText='Username'
          {...username}
          errorText={username.touched && username.error ? username.error : null}
          style={fieldStyle}
        />
        <TextField
          hintText='email'
          floatingLabelText='Email'
          {...email}
          errorText={email.touched && email.error ? email.error : null}
          style={fieldStyle}
        />
        <TextField
          hintText='password'
          floatingLabelText='Password'
          {...password}
          errorText={password.touched && password.error ? password.error : null}
          style={fieldStyle}
          type='password'
        />
        <div className='SignupForm-Submit'>
          <RaisedButton
            label='Sign Up'
            primary
            type='submit'
            style={buttonStyle}
>>>>>>> master
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Email</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'email')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Name</span>
          <input
            className="SignupForm-Input"
            onChange={this.handleInputChange.bind(this, 'name')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Password</span>
          <input
            className="SignupForm-Input"
            type='password'
            onChange={this.handlePrivateChange.bind(this, 'password')}
          />
        </div>
        <div className="input-wrapper">
          <span className="SignupForm-Label">Confirm</span>
          <input
            className="SignupForm-Input"
            type='password'
            onChange={this.handlePrivateChange.bind(this, 'confirm')}
          />
        </div>
        <div className="input-wrapper">
          <button className="Button SignupForm-Button" type="submit">
            Signup
          </button>
          <button className="Button SignupForm-Button" type="reset">
            Cancel
          </button>
        </div>
     </form>
    )
  }
}

<<<<<<< HEAD
export default SignupForm;
=======
export default reduxForm({
  form: 'Signup',
  fields,
  validate
})(SignupForm)
>>>>>>> master
