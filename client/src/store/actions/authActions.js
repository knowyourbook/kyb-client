export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = user => dispatch => {
  // TODO: connect to server to authenticate
  dispatch({ type: LOGIN_SUCCESS, payload: user })
}
