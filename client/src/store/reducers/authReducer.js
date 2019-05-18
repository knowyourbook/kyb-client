import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from '../actions'

const initialState = {
  user: {},
  token: '',
  loggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedIn: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedIn: true
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        user: {},
        token: '',
        loggedIn: false
      }
    default:
      return state
  }
}
