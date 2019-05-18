import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

const initialState = {
  user: {},
  loggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
    default:
      return state
  }
}
