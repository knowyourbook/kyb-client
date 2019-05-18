import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { getUser } from './store/actions/index'

function App(props) {
  const { getUser } = props

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <div>
      <Route path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
    </div>
  )
}

export default connect(
  () => ({}),
  { getUser }
)(App)
