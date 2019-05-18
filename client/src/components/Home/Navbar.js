import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { logout } from '../../store/actions'

function Navbar({isLoggedIn, user, logout}) {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      {
        isLoggedIn &&
        <NavLink
          to={user.role === 'admin' ? '/admin' : '/student'}
        >
          {user.role === 'admin' ? 'admin' : 'student'}
        </NavLink>
      }
      <NavLink
        to={isLoggedIn ? '/' : '/auth'}
      >
        <span onClick={isLoggedIn && logout}>{isLoggedIn ? 'logout' : 'login'}</span>
      </NavLink>
    </div>
  )
}

function mapStateToProps({ authReducer }) {
  return {
    isLoggedIn: authReducer.loggedIn,
    user: authReducer.user
  }
}

export default connect(mapStateToProps, {logout})(Navbar)