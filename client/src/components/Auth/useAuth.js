import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function useAuth(ComposedComponent) {
  function Authenticate(props){
    const{
      user,
      isLoggedIn,
      loading,
      history,
      match
    } = props

    useEffect(
      () => {
        if (!loading && !isLoggedIn) {
          history.push('/auth')
        }
      },
      [isLoggedIn, loading, history]
    )

    useEffect(
      () => {
        const correctStudent = (
          `${match.url}`.startsWith('/student') &&
          user.role === 'student'
        )

        const correctAdmin = (
          `${match.url}`.startsWith('/admin') &&
          user.role === 'admin'
        )

        if (user.role && !(correctStudent || correctAdmin)) {
          history.push('/')
        }
      },
      [isLoggedIn, match, history, user.role]
    )

    if (loading) return <div>Loading...</div>

    return (
      <>
        {props.isLoggedIn && <ComposedComponent {...props} />}
      </>
    )
  }

  function mapStateToProps({ authReducer }) {
    return {
      isLoggedIn: authReducer.loggedIn,
      loading: authReducer.loading,
      user: authReducer.user
    }
  }

  return connect(mapStateToProps, {})(Authenticate)
}

export default useAuth
