/**
 * Created by ebinhon on 6/30/2017.
 */
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_REQUEST,
  FETCH_USER_BY_ID_SUCCESS,
} from '../../constants/ActionTypes'


// default error action
export function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    error,
  }
}

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  }
}

export function fetchUserByIdError(error) {
  return {
    type: FETCH_USER_BY_ID_ERROR,
    error,
  }
}

export function fetchUserByIdRequest(id) {
  return {
    type: FETCH_USER_BY_ID_REQUEST,
    id,
  }
}

export function fetchUserByIdSuccess(user) {
  return {
    type: FETCH_USER_BY_ID_SUCCESS,
    user,
  }
}

/*export function getUsers() {
 let url = API[FETCH_USERS]()
 const config = {
 mode: 'cors',
 method: 'GET',
 headers: {
 Accept: 'application/vnd.github.v3+json',
 'Content-Type': 'application/json',
 },
 }
 return (dispatch) => {
 return dispatch(Utilities.callAPI(url, config, userRequest(), _getUsers(), _error()))
 }
 }*/
