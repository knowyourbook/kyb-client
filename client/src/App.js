import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import useAuth from './components/Auth/useAuth'

function App() {
  return (
    <div>
      <Route exact path="/" component={useAuth(Home)} />
      <Route exact path="/auth" component={Auth} />
    </div>
  )
}

export default App
