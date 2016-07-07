import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import { reduxReactFirebase } from 'redux-react-firebase'
import { firebase as fbConfig } from '../config'

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxReactFirebase(fbConfig, { userProfile: '/users' }),
    applyMiddleware(thunk)
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
