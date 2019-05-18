import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import useAuth from './components/Auth/useAuth'
import { getUser } from './store/actions/index'

function App(props) {
  useEffect(
    () => {
      props.getUser()
    },
    []
  )
  return (
    <div>
      <Route exact path="/" component={useAuth(Home)} />
      <Route exact path="/auth" component={Auth} />
    </div>
  )
}

export default connect(() => ({ }), {getUser})(App)
