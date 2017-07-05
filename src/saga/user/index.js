/**
 * Created by ebinhon on 7/5/2017.
 */
import { take, call, put, fork } from 'redux-saga/effects'
import {
  fetchUsersSuccess, fetchUsersRequest, fetchUsersError,
  fetchUserByIdSuccess, fetchUserByIdRequest, fetchUserByIdError,
} from '../../actions/user'
import * as Utilities from '../../utilities'
import API from '../../api'

export function* fetchUsers() {
  while (true) {
    const url = API[fetchUsersRequest().type]()
    yield take(fetchUsersRequest().type)
    yield put(fetchUsersRequest())
    try {
      const users = yield call(Utilities.callAPI, url)
      yield put(fetchUsersSuccess(users))
    } catch (e) {
      yield put(fetchUsersError(e))
    }
  }
}

export function* fetchUserById() {
  while (true) {
    const action = yield take(fetchUserByIdRequest().type)
    const url = API[fetchUserByIdRequest().type](action.id)
    yield put(fetchUserByIdRequest(action.id))
    try {
      const user = yield call(Utilities.callAPI, url)
      yield put(fetchUserByIdSuccess(user))
    } catch (e) {
      yield put(fetchUserByIdError(e))
    }
  }
}

export default function* userRootSaga() {
  yield [
    fork(fetchUsers),
    fork(fetchUserById)
  ]
}