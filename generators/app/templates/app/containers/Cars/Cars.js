import React, { Component, PropTypes } from 'react'
<% if (answers.includeRedux) { %>import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'
const {isLoaded, isEmpty, dataToJS} = helpers<% } %>

import './Cars.scss'
<% if (answers.includeRedux) { %>
@firebase( [
  '/cars', // make sure your security rules are set to allow this
])
@connect(
  ({firebase}) => ({
    cars: dataToJS(firebase, '/cars'),
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
    const carsList = this.props.cars.map((car, i) => (
      <li key={ i }>{ car.name } - { car.hp }</li>
    ))
    return (
      <div className='Cars'>
        <h2>Cars</h2>
        <div className='ClassList'>
          { carsList }
          <button onClick={ this.handleClick }>Add tesla</button>
        </div>
      </div>
    )
  }
}
