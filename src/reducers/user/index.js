/**
 * Created by ebinhon on 6/30/2017.
 */
import Immutable from 'immutable'
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USER_BY_ID_SUCCESS,
} from '../../constants/ActionTypes'

const initialState = Immutable.fromJS({
  isProcessing: false,
  userList: null,
  user: null,
  error: null,
})


function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case FETCH_USER_BY_ID_REQUEST:
      return state.merge({
        isProcessing: true,
        error: null,
      })
    case FETCH_USERS_ERROR:
    case FETCH_USER_BY_ID_ERROR:
      return state.merge({
        error: action.error,
        isProcessing: false,
      })
    case FETCH_USERS_SUCCESS:
      return state.merge({
        userList: action.users,
        isProcessing: false,
        error: null,
      })
    case FETCH_USER_BY_ID_SUCCESS:
      return state.merge({
        user: action.user,
        isProcessing: false,
        error: null,
      })
    default:
      return state
  }
}

export default userReducer