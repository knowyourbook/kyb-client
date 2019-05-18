import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { logout } from '../../store/actions'
import Admin from '../Admin/Setting'
import Student from '../Student/Setting'
import useAuth from '../Auth/useAuth'

import Navbar from './Navbar'

function Home({ isLoggedIn, logout, match }) {
  return (
    <div>
      <Navbar />
      <Route path={`${match.url}admin`} component={useAuth(Admin)} />
      <Route exact path={`${match.url}student`} component={useAuth(Student)} />
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
