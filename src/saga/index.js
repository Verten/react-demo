/**
 * Created by ebinhon on 7/5/2017.
 */
import userRootSaga from './user'
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield [
    fork(userRootSaga)
  ]
}

