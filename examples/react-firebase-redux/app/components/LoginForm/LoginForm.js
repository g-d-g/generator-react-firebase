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

<<<<<<< HEAD
  state = { errors: { username: null, password: null } }
=======
const validate = values => {
  const errors = {}
  if (!values.email) errors.email = 'Required'
  if (!values.password) errors.password = 'Required'
  return errors
}
>>>>>>> origin/redux-firebasev3

class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onLogin: PropTypes.func.isRequired
  }

<<<<<<< HEAD
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
    if (!username || username == '') {
      return this.setState({
        errors: { username: 'Username required' }
      })
    }
    if (!this.password || this.password == '') {
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
  handleLogin = (e) => {
    e.preventDefault() // prevent default form submission
    this.props.onLogin(this.props.values)
>>>>>>> origin/redux-firebasev3
  }

  render () {
    const {fields: {email, password}, isLoading} = this.props
    return (
      <form className='LoginForm' onSubmit={this.handleLogin}>
        <TextField
          hintText='some@email.com'
<<<<<<< HEAD
          floatingLabelText='Username/Email'
          onChange={this.handleInputChange.bind(this, 'username')}
          errorText={this.state.errors.username}
=======
          floatingLabelText='Email'
          {...email}
          errorText={email.touched && email.error ? email.error : null}
>>>>>>> origin/redux-firebasev3
          style={fieldStyle}
        />
        <TextField
          hintText='password'
          floatingLabelText='Password'
          type='password'
<<<<<<< HEAD
          onChange={this.handlePrivateChange.bind(this, 'password')}
          errorText={this.state.errors.password}
=======
          {...password}
          errorText={password.touched && password.error ? password.error : null}
>>>>>>> origin/redux-firebasev3
          style={fieldStyle}
        />
        <div className='LoginForm-Submit'>
          <RaisedButton
            label='Login'
            primary
            type='submit'
<<<<<<< HEAD
            disabled={this.props.account && this.props.account.isFetching}
=======
            disabled={isLoading}
>>>>>>> origin/redux-firebasev3
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
<<<<<<< HEAD
          Forgot Password?
=======
            Forgot Password?
>>>>>>> origin/redux-firebasev3
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
