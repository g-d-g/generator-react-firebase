import React, { Component, PropTypes } from 'react'
<<<<<<< HEAD

import './Cars.scss'

import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

// Props decorators
@firebase([ 'cars' ])
@connect(
  ({fb}) => ({
    cars: dataToJS(fb, 'cars')
  })
)
export default class Cars extends Component {
=======

import './Cars.scss'
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
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
)
export default class Cars extends Component {
  static propTypes = {
    addCar: PropTypes.func
  }

  handleClick = () => {
    console.log('add car clicked')
<<<<<<< HEAD
    console.log('this.props', this.props)
=======
>>>>>>> origin/redux-firebasev3
  }

  render () {
    const { cars } = this.props
<<<<<<< HEAD
    const carsList = this.props.cars ? this.props.cars.map((car, i) =>
=======
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
          <button onClick={ this.handleClick }>Add tesla</button>
        </div>
      </div>
    )
  }
}
