import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

const middleware = applyMiddleware(thunk, logger)
const rootReducer = combineReducers(reducers)

export default createStore(rootReducer, composeWithDevTools(middleware))
