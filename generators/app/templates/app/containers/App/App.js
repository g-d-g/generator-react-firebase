import React, { Component, PropTypes } from 'react'
<% if (answers.includeRedux) { %>import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { pathToJS } = helpers<% } %>
// Components
import Navbar from '../Navbar/Navbar'

// Styling
import Theme from '../../theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import './App.scss'

// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

<<<<<<< HEAD
<% if (answers.includeRedux) { %>class Main extends Component {<% } %>
<% if (!answers.includeRedux) { %>export default class Main extends Component {<% } %>
=======
<% if (answers.includeRedux) { %>//Pass Firebase Profile to account prop
@firebase()
@connect(
  ({firebase}) => ({
    account: pathToJS(firebase, 'profile')
  })
)<% } %>
export default class Main extends Component {
>>>>>>> master
  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    account: PropTypes.object,
<<<<<<< HEAD
    children: PropTypes.array,
    logout: PropTypes.func
  }

  getChildContext = () => (
    {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    }
  )
=======
    children: PropTypes.object,
    logout: PropTypes.func,
    <% if (answers.includeRedux) { %>firebase: PropTypes.object,
    authError: PropTypes.object<% } %>
  }
>>>>>>> master

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
  }

  render () {
    return (
      <div className="App">
        <Navbar
          account={ this.props.account }
          onMenuClick={ this.handleClick }
          onLogoutClick={ this.handleLogout }
        />
        { this.props.children }
      </div>
    )
  }
}
