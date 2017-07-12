/**
 * Created by ebinhon on 7/5/2017.
 */
import { call, put, fork, takeLatest } from 'redux-saga/effects'
import * as Actions from '../../actions/user'
import * as Utilities from '../../utilities'
import API from '../../api'

function* fetchUsers() {
  const url = API[Actions.fetchUsersRequest().type]()
  try {
    const users = yield call(Utilities.callAPI, url)
    yield put(Actions.fetchUsersSuccess(users))
  } catch (e) {
    yield put(Actions.fetchUsersError(e))
  }
}

function* fetchUserById(action) {
  const url = API[Actions.fetchUserByIdRequest().type](action.id)
  try {
    const user = yield call(Utilities.callAPI, url)
    yield put(Actions.fetchUserByIdSuccess(user))
  } catch (e) {
    yield put(Actions.fetchUserByIdError(e))
  }
}

export function* watchFetchUsers() {
  yield takeLatest(Actions.fetchUsersRequest().type, fetchUsers)
}

export function* watchFetchUserById() {
  yield takeLatest(Actions.fetchUserByIdRequest().type, fetchUserById)
}

export default function* userRootSaga() {
  yield [
    fork(watchFetchUsers),
    fork(watchFetchUserById)
  ]
}