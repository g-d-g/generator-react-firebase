import React, { Component, PropTypes } from 'react'
<<<<<<< HEAD
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CarsList from '../../components/CarsList/CarsList'
import * as Actions from '../../actions/cars'
import './Cars.scss'

class Cars extends Component {
  constructor (props){
    super(props)
  }

  static propTypes = {

  };

  render (){
    return (
      <div className='Cars'>
        <h2>Cars</h2>
        <CarsList cars={ this.props.cars } onCarAddClick={ this.props.addCar }/>
=======

import './Cars.scss'
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { pathToJS } = helpers

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
    cars: PropTypes.array,
    addCar: PropTypes.func
  }

  handleClick = () => {
    console.log('add car clicked')
  }

  render () {
    const { cars } = this.props
    const carsList = cars ? cars.map((car, i) =>
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
>>>>>>> master
      </div>
    )
  }
}
//Place state of redux store into props of component
function mapStateToProps (state) {
  return {
    cars: state.cars,
    router: state.router
  }
}
//Place action methods into props
function mapDispatchToProps (dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cars)
