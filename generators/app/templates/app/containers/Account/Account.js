import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

// styles
import './Account.scss'

<% if (!answers.includeRedux) { %>// firebase
import firebaseUtil from '../../utils/firebase'<% } %>

<% if (answers.includeRedux) { %>import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
<% } %>
<% if (!answers.includeRedux) { %>export default class Acccount extends Component {<% } %>
<% if (answers.includeRedux) { %>class Acccount extends Component {<% } %>

  static propTypes = {
    account: PropTypes.object,
  }

  render () {
    const emailTo = `mailto:${this.props.account.email || ''}`
    return (
      <div className='Acccount'>
        <div className='Acccount-Data'>
          <span className='Acccount-Datapoint Acccount-Username'>
            { this.props.account.username }
          </span>
          <span className='Acccount-Datapoint Acccount-Name'>
            { this.props.account.name || 'No Name' }
          </span>
          <span className='Acccount-Datapoint Acccount-Role'>
            { this.props.account.role }
          </span>
          <a className='Acccount-Datapoint Acccount-Email' href={ emailTo }>
            { this.props.account.email }
          </a>
          <button className='Button' onClick={ this.props.logout }>
            Logout
          </button>
        </div>
      </div>
    )
  }
}
