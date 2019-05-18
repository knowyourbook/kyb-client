import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from '../../store/actions'


function Auth (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    props.login({username, password})
    setUsername('')
    setPassword('')
    props.history.push('/')
  }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

function mapStateToProps ({ authReducer }) {
  return ({
    isLoggedIn: authReducer.loggedIn
  })
}

export default connect(mapStateToProps, {login})(Auth)