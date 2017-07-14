/**
 * Created by ebinhon on 7/5/2017.
 */
import { all, call, put, fork, select, takeLatest } from 'redux-saga/effects'
import * as Actions from '../../actions/user'
import * as Utilities from '../../utilities'
import API from '../../api'

function getState(state){
  return state
}

function* fetchUsers() {
  const url = API[Actions.fetchUsersRequest().type]()
  try {
    const state = yield select(getState)
    console.info(state)
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
  yield all([
    fork(watchFetchUsers),
    fork(watchFetchUserById)
  ])
}