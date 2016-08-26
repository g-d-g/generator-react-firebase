import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { reduxForm } from 'redux-form'

import './SignupForm.scss'

const fieldStyle = { width: '80%' }
const buttonStyle = { width: '96%', marginBottom: '.5rem' }

<<<<<<< HEAD
export default class SignupForm extends Component {
  constructor (props) {
    super(props)
  }

  state = { errors: {} }

  reset = () =>
    this.setState({
      errors: {},
      username: null,
      email: null,
      name: null
    })

  /**
   * @function handleSignup
   * @description Fire onLoginClick function provided to component when login is clicked
   */
  handleSignup = e => {
    e.preventDefault()
    let newAccountData = this.state
    if (this.requireInputs()) {
      newAccountData.password = this.password
      newAccountData.confirm = this.confirm
      this.props.onSignup(newAccountData)
    }
  }
  /**
   * @function requireInputs
   * @description Confirm that all required inputs have values
   * @return {Boolean}
   */
  requireInputs = () => {
    const requiredInputs = [
      {name: 'username', val: this.state.username},
      {name: 'email', val: this.state.email},
      {name: 'name', val: this.state.name},
      {name: 'password', val: this.password},
      {name: 'confirm', val: this.confirm}
    ]
    const firstError = find(requiredInputs, (input) => {
      if (!input.val || input.val == '') {
        return true
      }
    })
    if (firstError) {
      let errors = {}
      errors[firstError.name] = `${capitalize(firstError.name)} is required`
      this.setState({ errors })
      return false
    }
    return true
  }
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
=======
export const fields = [ 'username', 'email', 'password' ]
>>>>>>> origin/redux-firebasev3

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
<<<<<<< HEAD
      <form className='SignupForm' onSubmit={this.handleSignup}>
        <TextField
          hintText='username'
          floatingLabelText='Username'
          onChange={this.handleInputChange.bind(this, 'username')}
          errorText={this.state.errors.username}
=======
      <form className='SignupForm' onSubmit={this.props.onSignup}>
        <TextField
          hintText='username'
          floatingLabelText='Username'
          {...username}
          errorText={username.touched && username.error ? username.error : null}
>>>>>>> origin/redux-firebasev3
          style={fieldStyle}
        />
        <TextField
          hintText='email'
          floatingLabelText='Email'
<<<<<<< HEAD
          onChange={this.handleInputChange.bind(this, 'email')}
          errorText={this.state.errors.email}
=======
          {...email}
          errorText={email.touched && email.error ? email.error : null}
>>>>>>> origin/redux-firebasev3
          style={fieldStyle}
        />
        <TextField
          hintText='password'
          floatingLabelText='Password'
<<<<<<< HEAD
          onChange={this.handlePrivateChange.bind(this, 'password')}
          errorText={this.state.errors.password}
=======
          {...password}
          errorText={password.touched && password.error ? password.error : null}
>>>>>>> origin/redux-firebasev3
          style={fieldStyle}
          type='password'
        />
        <div className='SignupForm-Submit'>
          <RaisedButton
            label='Sign Up'
            primary
            type='submit'
<<<<<<< HEAD
            disabled={this.props.account && this.props.account.isFetching}
=======
>>>>>>> origin/redux-firebasev3
            style={buttonStyle}
          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'Signup',
  fields,
  validate
})(SignupForm)
