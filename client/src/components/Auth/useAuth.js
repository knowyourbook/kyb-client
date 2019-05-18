import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function useAuth(ComposedComponent) {
  function Authenticate(props) {
    useEffect(
      () => {
        if (!props.loading && !props.isLoggedIn) {
          props.history.push('/auth')
        }
      },
      [props.isLoggedIn, props.loading, props.history]
    )

    return (
      <>
        {props.loading && <div>Loading ... </div>}
        {props.isLoggedIn && <ComposedComponent {...props} />}
      </>
    )
  }

  function mapStateToProps({ authReducer }) {
    return {
      isLoggedIn: authReducer.loggedIn,
      loading: authReducer.loading
    }
  }

  return connect(mapStateToProps, {})(Authenticate)
}

export default useAuth
