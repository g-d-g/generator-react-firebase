import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router'
<<<<<<< HEAD
import LoginForm from '../../components/LoginForm/LoginForm'
import Actions from '../../actions'
import './Login.scss'

class Login extends Component {
  constructor (props) {
    super(props)
=======
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { isLoaded, isEmpty, pathToJS } = helpers

import GoogleButton from 'react-google-button'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import LoginForm from '../../components/LoginForm/LoginForm'
import { project as projectSettings } from '../../config'
import './Login.scss'

// Props decorators
@firebase()
@connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
    account: pathToJS(firebase, 'profile')
  })
)
export default class Login extends Component {
  static propTypes = {
    account: PropTypes.object,
    firebase: PropTypes.object,
    authError: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    snackCanOpen: false,
    errorMessage: null
  }

  componentWillReceiveProps (nextProps) {
    const { account, authError } = nextProps
    if (authError) {
      this.setState({
        isLoading: false
      })
    }
>>>>>>> master
  }

  handleLoginClick = loginData => {
    this.props.login(loginData)
  };

  handleLogin = loginData => {
    this.setState({
      snackCanOpen: true,
      isLoading: true
    })
    this.props.firebase.login(loginData)
        .then(() => this.context.router.push(`/${projectSettings.postLoginRoute}`))
  }

  googleLogin = () => {
    // TODO: Handle Google Login
    console.log('google')
  }

  render () {
<<<<<<< HEAD
    return (
      <div className='Login'>
        <h2>Login</h2>
        <LoginForm onLoginClick={ loginData => this.handleLoginClick(loginData) }/>
=======
    const { isLoading, snackCanOpen, errorMessage } = this.state
    const { authError } = this.props

    if (isLoading) {
      return (
        <div className='Login'>
          <div className='Login-Progress'>
            <CircularProgress  mode='indeterminate' />
          </div>
        </div>
      )
    }

    return (
      <div className='Login'>
        <Paper className='Login-Panel'>
          <LoginForm onLogin={ this.handleLogin } />
        </Paper>
        <div className='Login-Or'>
          or
        </div>
        <GoogleButton onClick={ this.googleLogin } />
        <div className='Login-Signup'>
          <span className='Login-Signup-Label'>
            Need an account?
          </span>
          <Link className='Login-Signup-Link' to='/signup'>
            Sign Up
          </Link>
        </div>
        <Snackbar
          open={ isLoaded(authError) && !isEmpty(authError) && snackCanOpen }
          message={ authError ? authError.toString() : 'Error' }
          action='close'
          autoHideDuration={ 3000 }
          onRequestClose={ this.handleRequestClose }
        />
>>>>>>> master
      </div>
    )
  }
}
// Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    account: state.account,
    router: state.router
  }
}
// Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
