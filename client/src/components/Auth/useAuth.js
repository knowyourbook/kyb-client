import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function useAuth(ComposedComponent) {
  function Authenticate(props) {
    useEffect(
      () => {
        if (!props.isLoggedIn) {
          props.history.push('/auth')
        }
      },
      [props.isLoggedIn, props.history]
    )

    return (
      <>
        {props.isLoggedIn && <ComposedComponent {...props} />}
      </>
    )
  }

  function mapStateToProps({ authReducer }) {
    return {
      isLoggedIn: authReducer.loggedIn
    }
  }

  return connect(mapStateToProps, {})(Authenticate)
}

export default useAuth
