<<<<<<< HEAD
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../../actions'
=======
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { pathToJS } = helpers
// Components
import Navbar from '../Navbar/Navbar'

// Styling
import Theme from '../../theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
>>>>>>> master
import './App.scss'

import Navbar from '../../components/Navbar/Navbar'

<<<<<<< HEAD
class Main extends Component {
  constructor (props) {
    super(props)
=======
//Pass Firebase Profile to account prop
@firebase()
@connect(
  ({firebase}) => ({
    account: pathToJS(firebase, 'profile')
  })
)
export default class Main extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    account: PropTypes.object,
    children: PropTypes.object,
    logout: PropTypes.func,
    firebase: PropTypes.object,
    authError: PropTypes.object
  }

  getChildContext = () => (
    {
      muiTheme: getMuiTheme(Theme)
    }
  )

  handleClick = loc => {
    this.context.router.push(`/${loc}`)
  }

  handleLogout = () => {
    this.props.firebase.logout()
    this.context.router.push(`/`)
>>>>>>> master
  }

  render () {
    return (
      <div className='App'>
        <Navbar
          account={ this.props.account }
          onLogoutClick={ this.props.logout }
        />
        { this.props.children }
      </div>
    )
  }
}
<<<<<<< HEAD
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
=======
>>>>>>> master
