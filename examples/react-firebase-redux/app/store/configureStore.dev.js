import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { firebase as fbConfig } from '../config'
import { reduxFirebase } from 'redux-firebasev3'

const createStoreWithMiddleware = compose(
  reduxFirebase(fbConfig, { userProfile: fbConfig.userFolder }),
  applyMiddleware(thunkMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
