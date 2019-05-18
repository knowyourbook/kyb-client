import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { login } from '../../store/actions'


function Auth (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const { isLoggedIn } = props

  useEffect(
    () => {
      if (isLoggedIn) {
        props.history.goBack()
      }
    },
    [isLoggedIn, props.history]
  )

  function handleSubmit(e) {
    e.preventDefault()
    props.login({username, password})
    setUsername('')
    setPassword('')
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
        <input
          type="select"
          value={role}
          placeholder="role"
          onChange={e => setRole(e.target.value)}
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