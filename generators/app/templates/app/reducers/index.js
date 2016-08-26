import { combineReducers } from 'redux'
<<<<<<< HEAD
import { routeReducer } from 'react-router-redux'
import {firebaseStateReducer as firebase} from 'redux-firebasev3'

const rootReducer = combineReducers({
  firebase,
  router: routeReducer
=======
import {reducer as form} from 'redux-form'
import {firebaseStateReducer as firebase} from 'redux-firebasev3'
import {routeReducer as router} from 'react-router-redux'

const rootReducer = combineReducers({
  firebase,
  form,
  router
>>>>>>> origin/redux-firebasev3
})

export default rootReducer
