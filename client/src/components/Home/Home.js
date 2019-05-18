import React from 'react'
import { connect } from 'react-redux'

function Home() {
  return <div> Welcome to Know Your Book</div>
}

const mapStateToProps = ({ authReducer }) => {
  return {
    isLoggedIn: authReducer.loggedIn,
    user: authReducer.user
  }
}

export default connect(mapStateToProps, {})(Home)