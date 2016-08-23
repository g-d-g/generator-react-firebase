<<<<<<< HEAD
import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import './LoginForm.scss';

 class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  static propType = {
    onLoginClick: PropTypes.func.isRequired
  };

  /**
   * @function handleLogin
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleLogin = event => {
    event.preventDefault()
    this.props.onLoginClick({
      username:this.state.username,
      password: this.password
    })
  }

  /**
   * @function handleUsernameChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleUsernameChange = event => {
    this.setState({
      ['username']: event.target.value
    })
  };

  handlePasswordChange = event => {
    this.password = event.target.value;
  };
=======
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import { reduxForm } from 'redux-form'

import './LoginForm.scss'
const fieldStyle = {width: '80%'}
const buttonStyle = {width: '100%'}

export const fields = [ 'email', 'password' ]

const validate = values => {
  const errors = {}
  if (!values.email) errors.email = 'Required'
  if (!values.password) errors.password = 'Required'
  return errors
}

class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onLogin: PropTypes.func.isRequired
  }

  handleLogin = (e) => {
    e.preventDefault() // prevent default form submission
    this.props.onLogin(this.props.values)
  }
>>>>>>> master

  render () {
    const {fields: {email, password}, isLoading} = this.props
    return (
<<<<<<< HEAD
        <form className="LoginForm" onSubmit={ this.handleLogin }>
          <div className="LoginForm-Group">
            <span className="LoginForm-Label">
              Username/Email
            </span>
            <input className="LoginForm-Input" onChange={ this.handleUsernameChange }/>
          </div>
          <div className="LoginForm-Group">
            <span className="LoginForm-Label">
              Password
            </span>
            <input className="LoginForm-Input" onChange={ this.handlePasswordChange } type='password' />
          </div>
          <div className="LoginForm-Buttons">
            <button className="Button LoginForm-Login" type="submit">
              Login
            </button>
            <button className="Button LoginForm-Cancel" type="reset">
              Cancel
            </button>
          </div>
       </form>
=======
      <form className='LoginForm' onSubmit={this.handleLogin}>
        <TextField
          hintText='some@email.com'
          floatingLabelText='Email'
          {...email}
          errorText={email.touched && email.error ? email.error : null}
          style={fieldStyle}
        />
        <TextField
          hintText='password'
          floatingLabelText='Password'
          type='password'
          {...password}
          errorText={password.touched && password.error ? password.error : null}
          style={fieldStyle}
        />
        <div className='LoginForm-Submit'>
          <RaisedButton
            label='Login'
            primary
            type='submit'
            disabled={isLoading}
            style={buttonStyle}
          />
        </div>
        <div className='LoginForm-Options'>
          <div className='LoginForm-Remember'>
            <Checkbox
              name='remember'
              value='remember'
              label='Remember'
              labelStyle={{ fontSize: '.8rem' }}
            />
          </div>
          <Link className='LoginForm-Recover-Link' to='/recover'>
            Forgot Password?
          </Link>
        </div>
      </form>
>>>>>>> master
    )
  }
}

<<<<<<< HEAD
export default LoginForm;
=======
export default reduxForm({
  form: 'Login',
  fields,
  validate
})(LoginForm)
>>>>>>> master
