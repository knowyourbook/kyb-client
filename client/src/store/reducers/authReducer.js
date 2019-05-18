import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT_REQUEST
} from '../actions'

const initialState = {
  user: {},
  token: '',
  loggedIn: false,
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedIn: true,
        loading: false
      }
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loggedIn: true,
        loading: false
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        user: {},
        token: '',
        loggedIn: false,
        loading: false
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
        token: '',
        loggedIn: false,
        loading: false
      }
    default:
      return state
  }
}
