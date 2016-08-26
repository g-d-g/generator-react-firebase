import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
<% if (!answers.includeRedux) { %>import firebaseUtil from '../../utils/firebase'<% } %><% if (answers.includeRedux) { %>import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { dataToJS, pathToJS } = helpers<% } %>

import GoogleButton from 'react-google-button'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import SignupForm from '../../components/SignupForm/SignupForm'

<<<<<<< HEAD
// material-ui components
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import CircularProgress from 'material-ui/lib/circular-progress'
import Snackbar from 'material-ui/lib/snackbar'

<% if (!answers.includeRedux) { %>import firebaseUtil from '../../utils/firebase'<% } %>

// styles
import './Signup.scss'

<% if (answers.includeRedux) { %>import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const {isLoaded, isEmpty,  dataToJS, pathToJS} = helpers

=======
// styles
import './Signup.scss'

<% if (answers.includeRedux) { %>//Props decorators
>>>>>>> origin/redux-firebasev3
@firebase()
@connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
  })
)<% } %>
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
=======
  static propTypes = {
    account: PropTypes.object
  }

  state = {
    snackCanOpen: false,
    errorMessage: null
  }

>>>>>>> origin/redux-firebasev3
  reset = () =>
    this.setState({
      snackCanOpen: false,
      errorMessage: null
    })

  handleSignup = signupData => {
    const { username, email, provider } = signupData
    this.setState({ snackCanOpen: true, isLoading: true })
    <% if (answers.includeRedux) { %>if (provider) {
      return this.props.firebase.createUser(signupData)
        .then(response => {
          console.log('response:', response)
          this.props.firebase.createUser(response, response)
        })
        .catch(error => {
          console.error('error signing up:', error, error.toString())
        })
    }
    this.props.firebase.createUser(signupData, { username, email })<% } %>
    <% if (!answers.includeRedux) { %>if (email && password) {
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          if (error) {
            console.error('Error logging in:', error)
            newState.errorMessage = error.message || 'Error with login'
          } else {
            console.log('time to redirect or login?', error)
          }
          this.setState({ isLoading: false })
        })
    } else {
      console.warn('other signups not currently supported', provider)
    }<% } %>
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
          <% if (answers.includeRedux) { %>open={ error !== null && this.state.snackCanOpen }
          message={ error || 'Signup error' }<% } %><% if (!answers.includeRedux) { %>open={ this.state.snackCanOpen }
          message={ this.state.errorMessage || 'Signup error'}<% } %>
          action='close'
          autoHideDuration={ 3000 }
          onRequestClose={ closeToast }
=======
          <Link className='Signup-Login-Link' to='/login'>
            Login
          </Link>
        </div>
        <Snackbar
          <% if (answers.includeRedux) { %>open={error !== null && this.state.snackCanOpen}
          message={error || 'Signup error'}<% } %><% if (!answers.includeRedux) { %>open={this.state.snackCanOpen}
          message={this.state.errorMessage || 'Signup error'}<% } %>
          action='close'
          autoHideDuration={3000}
          onRequestClose={this.reset}
>>>>>>> origin/redux-firebasev3
        />
      </div>
    )
  }
}
