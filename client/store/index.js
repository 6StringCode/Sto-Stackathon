import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import auth from './auth'
import trips from './trips'
import users from './users'
import stays from './stays'

const reducer = combineReducers({ auth, trips, users, stays })
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './trips'
export * from './users'
export * from './stays'
