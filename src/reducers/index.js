/**
 * Created by ebinhon on 6/30/2017.
 */
import { combineReducers } from 'redux'
import userReducer from './user'

const rootReducer = combineReducers(Object.assign({}, {
  userReducer,
}))

export default rootReducer
