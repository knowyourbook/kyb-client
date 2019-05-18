export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = user => dispatch => {
  // TODO: connect to server to authenticate
  dispatch({ type: LOGIN_SUCCESS, payload: user })
}

export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getUser = () => dispatch => {
  // TODO: connect to server to authenticate
  const token = localStorage.getItem('kyb-token')
  console.log({token})
  if (token) {
    dispatch({ type: GET_USER_SUCCESS, payload: { user: {}, token: 'token' } })
  } else {
    dispatch({ type: GET_USER_FAILURE })
  }
}