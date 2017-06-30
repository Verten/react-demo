/**
 * Created by ebinhon on 6/30/2017.
 */
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  isProcessing: false,
  userList: null,
  error: null,
})


function userReducer(state = initialState, action) {
  const operation = {
    USER_REQUEST: () => {
      return state.merge({
        isProcessing: true,
        error: null,
      })
    },
    USER_ERROR: () => {
      return state.merge({
        isProcessing: false,
        error: action.error,
      })
    },
    FETCH_USERS: () => {
      const userList = action.payload
      return state.merge({
        userList,
        isProcessing: false,
        error: null,
      })
    },
  }

  if (operation[action.type]) {
    return operation[action.type]()
  }
  return state
}

export default userReducer