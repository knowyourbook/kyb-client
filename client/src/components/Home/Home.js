import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../../store/actions'

function Home({ isLoggedIn, logout }) {
  return (
    <div>
      <h1>Welcome to Know Your Book</h1>
      {isLoggedIn && <button onClick={logout}>logout</button>}
    </div>
  )
}

const mapStateToProps = ({ authReducer }) => {
  return {
    isLoggedIn: authReducer.loggedIn,
    user: authReducer.user
  }
}

export default connect(
  mapStateToProps,
  { logout }
)(Home)
