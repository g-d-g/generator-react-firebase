import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
<<<<<<< HEAD

// components
import SignupForm from '../../components/SignupForm/SignupForm'

// material-ui components
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import CircularProgress from 'material-ui/lib/circular-progress'
import Snackbar from 'material-ui/lib/snackbar'



// styles
import './Signup.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const {isLoaded, isEmpty,  dataToJS, pathToJS} = helpers
=======
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { dataToJS, pathToJS } = helpers

import GoogleButton from 'react-google-button'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import SignupForm from '../../components/SignupForm/SignupForm'

// styles
import './Signup.scss'
>>>>>>> origin/redux-firebasev3

//Props decorators
@firebase()
@connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
  })
)
export default class Signup extends Component {
<<<<<<< HEAD
  state = {
    errors: { username: null, password: null },
    snackCanOpen: false,
    errorMessage: null
  }
  /**
   * @function reset
   * @description Reset whole state (inputs, errors, snackbar open/close)
   */
  reset = () =>
    this.setState({
      errors: {},
      username: null,
      email: null,
      name: null,
=======
  static propTypes = {
    account: PropTypes.object
  }

  state = {
    snackCanOpen: false,
    errorMessage: null
  }

  reset = () =>
    this.setState({
>>>>>>> origin/redux-firebasev3
      snackCanOpen: false,
      errorMessage: null
    })

<<<<<<< HEAD
  render () {
    const { isLoading } = this.props
    const { isFetching, error } = this.props.account || {}

    /**
     * @function handleSignup
     * @description Call signup through redux-devshare action
     */
    const handleSignup = signupData => {
      const { username, email, provider, password } = signupData
      this.setState({ snackCanOpen: true, isLoading: true })
      if (provider) {
        return this.props.firebase.login(signupData)
          .then(response => {
            console.log('response:', response)
            this.props.firebase.createUser(response, response)
          })
          .catch(error => {
            console.error('error signing up:', error, error.toString())
          })
      }
      this.props.firebase.createUser(signupData, { username, email })
      
=======
  handleSignup = signupData => {
    const { username, email, provider } = signupData
    this.setState({ snackCanOpen: true, isLoading: true })
    if (provider) {
      return this.props.firebase.createUser(signupData)
        .then(response => {
          console.log('response:', response)
          this.props.firebase.createUser(response, response)
        })
        .catch(error => {
          console.error('error signing up:', error, error.toString())
        })
>>>>>>> origin/redux-firebasev3
    }
    this.props.firebase.createUser({ email, password }, { username, email })

  }

  googleSignup = () => {
    //TODO: Handle Google Signup
  }

  render () {
    const { isLoading } = this.props
    const { error } = this.props.account || {}

    if (isLoading) {
      return (
        <div className='Signup'>
          <div className='Signup-Progress'>
<<<<<<< HEAD
            <CircularProgress  mode='indeterminate' />
=======
            <CircularProgress mode='indeterminate' />
>>>>>>> origin/redux-firebasev3
          </div>
        </div>
      )
    }
    return (
      <div className='Signup'>
        <Paper className='Signup-Panel'>
<<<<<<< HEAD
          <SignupForm onSignup={ handleSignup } />
=======
          <SignupForm onSignup={this.handleSignup} />
>>>>>>> origin/redux-firebasev3
        </Paper>
        <div className='Signup-Or'>
          or
        </div>
<<<<<<< HEAD
        <RaisedButton
          label='Sign in with Google'
          secondary={ true }
          onTouchTap={ handleSignup.bind(this, { provider: 'google', type: 'popup' }) }
        />
=======
        <GoogleButton onClick={() => this.googleSignup()} />
>>>>>>> origin/redux-firebasev3
        <div className='Signup-Login'>
          <span className='Signup-Login-Label'>
            Already have an account?
          </span>
<<<<<<< HEAD
          <Link className='Signup-Login-Link' to='/login'>Login</Link>
        </div>
        <Snackbar
          open={ error !== null && this.state.snackCanOpen }
          message={ error || 'Signup error' }
          action='close'
          autoHideDuration={ 3000 }
          onRequestClose={ closeToast }
=======
          <Link className='Signup-Login-Link' to='/login'>
            Login
          </Link>
        </div>
        <Snackbar
          open={error !== null && this.state.snackCanOpen}
          message={error || 'Signup error'}
          action='close'
          autoHideDuration={3000}
          onRequestClose={this.reset}
>>>>>>> origin/redux-firebasev3
        />
      </div>
    )
  }
}
