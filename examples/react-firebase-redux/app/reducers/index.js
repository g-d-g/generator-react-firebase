import { combineReducers } from 'redux'
<<<<<<< HEAD
import { routerStateReducer } from 'redux-router'
import cars from './cars'
const rootReducer = combineReducers({
  cars,
  router: routerStateReducer
=======
import {reducer as form} from 'redux-form'
import {firebaseStateReducer as firebase} from 'redux-firebasev3'
import {routeReducer as router} from 'react-router-redux'

const rootReducer = combineReducers({
  firebase,
  form,
  router
>>>>>>> master
})

export default rootReducer
