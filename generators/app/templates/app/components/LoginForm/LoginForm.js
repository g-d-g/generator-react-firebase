import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
<<<<<<< HEAD
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import Checkbox from 'material-ui/lib/checkbox'
import './LoginForm.scss'
=======
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import { reduxForm } from 'redux-form'
>>>>>>> master

import './LoginForm.scss'
const fieldStyle = {width: '80%'}
const buttonStyle = {width: '100%'}

<<<<<<< HEAD
export default class LoginForm extends Component {
  static propTypes = {
    account: PropTypes.object,
    onLogin: PropTypes.func
  }

  state = { errors: { username: null, password: null } }

  /**
   * @function handleInputChange
   * @description Update the state with the values from the form inputs.
   * @fires context#setState
   */
  handleInputChange = (name, e) => {
    e.preventDefault()
    this.setState({
      [name]: e.target.value
    })
  }

  /**
  * @function handlePrivateChange
  * @description Store data in object instead of state
  */
  handlePrivateChange = (name, e) => {
    e.preventDefault()
    this[name] = e.target.value
  }

  handleLogin = e => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault()
    const { username } = this.state
    if (!username || username === '') {
      return this.setState({
        errors: { username: 'Username required' }
      })
    }
    if (!this.password || this.password === '') {
      return this.setState({
        errors: { password: 'Password required' }
      })
    }
    const loginData = { username, password: this.password }
    if (this.props.onLogin) this.props.onLogin(loginData)
  }

  googleLogin = () => {
    this.props.onLogin('google')
=======
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
>>>>>>> master
  }

  render () {
    const {fields: {email, password}, isLoading} = this.props
    return (
      <form className='LoginForm' onSubmit={this.handleLogin}>
        <TextField
          hintText='some@email.com'
<<<<<<< HEAD
          floatingLabelText='Username/Email'
          onChange={() => { this.handleInputChange('username') }}
          errorText={this.state.errors.username}
=======
          floatingLabelText='Email'
          {...email}
          errorText={email.touched && email.error ? email.error : null}
>>>>>>> master
          style={fieldStyle}
        />
        <TextField
          hintText='password'
          floatingLabelText='Password'
          type='password'
<<<<<<< HEAD
          onChange={() => { this.handlePrivateChange('password') }}
          errorText={this.state.errors.password}
=======
          {...password}
          errorText={password.touched && password.error ? password.error : null}
>>>>>>> master
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
    )
  }
}

export default reduxForm({
  form: 'Login',
  fields,
  validate
})(LoginForm)
