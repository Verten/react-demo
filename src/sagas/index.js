/**
 * Created by ebinhon on 7/5/2017.
 */
import userRootSaga from './user'
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    fork(userRootSaga)
  ])
}

