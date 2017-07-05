/**
 * Created by ebinhon on 2/9/2017.
 * this API is using by portal front-end to call portal back-end
 */
const host = 'https://api.github.com'
const contextPath = ''
const fetchUsers = '/users'

const API = {
  /**
   * @return {string}
   */
  FETCH_USERS_REQUEST() {
    return `${host}${contextPath}${fetchUsers}`
  },
  /**
   * @return {string}
   */
  FETCH_USER_BY_ID_REQUEST(id) {
    return `${host}${contextPath}${fetchUsers}/${id}`
  },
}

export default API
