import React, { Component, PropTypes } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router'

// styles
import './Account.scss'

// firebase
import firebaseUtil from '../../utils/firebase'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../../actions'
=======
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { isLoaded, isEmpty, pathToJS } = helpers
>>>>>>> origin/redux-firebasev3

import './Account.scss'

//Pass Firebase Profile to account prop
@firebase()
@connect(
  ({firebase}) => ({
    account: pathToJS(firebase, 'profile')
  })
)
export default class Acccount extends Component {
  static propTypes = {
    account: PropTypes.object,
    logout: PropTypes.func
  }

  render () {
    const { account, logout } = this.props
    const emailTo = `mailto:${this.props.account.email || ''}`
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
<<<<<<< HEAD

// Place state of redux store into props of component
const mapStateToProps = (state) => {
  return {
    account: state.account ? state.entities.accounts[state.account.id] : null,
    router: state.router
  }
}

// Place action methods into props
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Acccount)
=======
>>>>>>> origin/redux-firebasev3
