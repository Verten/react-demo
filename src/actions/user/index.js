/**
 * Created by ebinhon on 6/30/2017.
 */
import API from '../../api'
import * as Utilities from '../../utilities'
import {
  USER_ERROR,
  USER_REQUEST,
  FETCH_USERS,
} from '../../constants/ActionTypes'


// default error action
function _error() {
  return error => ({
    type: USER_ERROR,
    error,
  })
}

// default request action
function userRequest() {
  return {
    type: USER_REQUEST
  }
}

function _getUsers() {
  return payload => ({
    type: FETCH_USERS,
    payload,
  })
}

export function getUsers() {
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
}
