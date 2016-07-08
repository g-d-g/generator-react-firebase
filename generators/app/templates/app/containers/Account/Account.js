import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// styles
import './Account.scss'

<% if (!answers.includeRedux) { %>// firebase
import firebaseUtil from '../../utils/firebase'<% } %><% if (answers.includeRedux) { %>import { connect } from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'
const {isLoaded, isEmpty, dataToJS} = helpers<% } %>

<% if (answers.includeRedux) { %>@firebase()
@connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
    profile: pathToJS(firebase, 'profile')
  })
)<% } %>
export default class Acccount extends Component {

  static propTypes = {
    account: PropTypes.object
  }

  render () {
    const emailTo = `mailto:${this.props.account.email || ''}`
    const { account, logout } = this.props
    return (
      <div className='Acccount'>
        <div className='Acccount-Data'>
          <span className='Acccount-Datapoint Acccount-Username'>
            { account.username }
          </span>
          <span className='Acccount-Datapoint Acccount-Name'>
            { account.name || 'No Name' }
          </span>
          <span className='Acccount-Datapoint Acccount-Role'>
            { account.role }
          </span>
          <a className='Acccount-Datapoint Acccount-Email' href={ emailTo }>
            { account.email }
          </a>
          <button className='Button' onClick={ logout }>
            Logout
          </button>
        </div>
      </div>
    )
  }
}
