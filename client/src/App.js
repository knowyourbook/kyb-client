import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Admin from './components/Admin/Setting'
import Student from './components/Student/Setting'
import useAuth from './components/Auth/useAuth'
import { getUser } from './store/actions/index'

function App(props) {
  const { getUser } = props

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route path="/admin" component={useAuth(Admin)} />
      <Route path="/student" component={useAuth(Student)} />
    </div>
  )
}

export default connect(
  () => ({}),
  { getUser }
)(App)
