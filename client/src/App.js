import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
    </div>
  )
}

export default App
