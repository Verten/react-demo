/**
 * Created by ebinhon on 6/30/2017.
 */
import 'isomorphic-fetch'

export function checkStatus(response) {
  if (!response.ok) {   // (response.status < 200 || response.status > 300)
    const error = new Error(response.status, response.statusText)
    error.response = response
    throw error
  }
  return response
}

export function parseJSON(response) {
  return response.text().then((text) => {
    return text ? JSON.parse(text) : {}
  })
}
/**
 * A utility to call a restful service.
 *
 * @param url The restful service end point.
 * @param config The config object of the call. Can be null.
 * @param request The request action.
 * @param onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @param onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callAPI(url, config) {
  const defaultConfig = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
  }
  return fetch(url, Object.assign({}, defaultConfig, config))
    .then(checkStatus)
    .then(parseJSON)
    .then(json => {
      return json
    })
}