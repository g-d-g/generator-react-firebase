import React, { Component, PropTypes } from 'react'

import './Cars.scss'
<% if (!answers.includeRedux) { %>import firebase from '../../utils/firebase'<% } %><% if (answers.includeRedux) { %>import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
<<<<<<< HEAD
const { isLoaded, isEmpty, pathToJS } = helpers
=======
const { pathToJS } = helpers
>>>>>>> origin/redux-firebasev3

// Props decorators
@firebase([
  'cars'
])
@connect(
  ({firebase}) => ({
    cars: pathToJS(firebase, 'cars'),
    profile: pathToJS(firebase, 'profile')
  })
)<% } %>
export default class Cars extends Component {
  static propTypes = {
    cars: PropTypes.array,
    addCar: PropTypes.func
  }

  handleClick = () => {
    console.log('add car clicked')
  }

  render () {
<<<<<<< HEAD
    const carsList = this.props.cars ? this.props.cars.map((car, i) =>
=======
    const { cars } = this.props
    const carsList = cars ? cars.map((car, i) =>
>>>>>>> origin/redux-firebasev3
      (<li key={ i }>{ car.name } - { car.hp }</li>)
    ) : null
    return (
      <div className='Cars'>
        <h2>Cars</h2>
        <div className='ClassList'>
          <ul>
            { carsList }
          </ul>
<<<<<<< HEAD
          <button onClick={ this.handleClick.bind(this) }>Add tesla</button>
=======
          <button onClick={ this.handleClick }>Add tesla</button>
>>>>>>> origin/redux-firebasev3
        </div>
      </div>
    )
  }
}
