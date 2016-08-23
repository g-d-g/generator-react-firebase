import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
<<<<<<< HEAD
import Actions from '../../actions'
import SignupForm from '../../components/SignupForm/SignupForm'

import './Signup.scss'

class Signup extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    signup: PropTypes.func
  };

  render () {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <SignupForm onLoginClick={ signupData => this.props.signup(signupData) }/>
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

//Props decorators
@firebase()
@connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
  })
)
export default class Signup extends Component {
  static propTypes = {
    account: PropTypes.object
  }

  state = {
    snackCanOpen: false,
    errorMessage: null
  }

  reset = () =>
    this.setState({
      snackCanOpen: false,
      errorMessage: null
    })

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
    }
    this.props.firebase.createUser(signupData, { username, email })
    
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
            <CircularProgress mode='indeterminate' />
          </div>
        </div>
      )
    }
    return (
      <div className='Signup'>
        <Paper className='Signup-Panel'>
          <SignupForm onSignup={this.handleSignup} />
        </Paper>
        <div className='Signup-Or'>
          or
        </div>
        <GoogleButton onClick={() => this.googleSignup()} />
        <div className='Signup-Login'>
          <span className='Signup-Login-Label'>
            Already have an account?
          </span>
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
        />
>>>>>>> master
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    router: state.router
  }
}
// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
