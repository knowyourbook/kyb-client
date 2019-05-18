import React from 'react'
import { Route } from 'react-router-dom'

function QuoteList() {
  return <div>Quote List</div>
}

function StudentPage() {
  return <div>Student Page</div>
}

function Setting({ match }) {
  return (
    <div>
      <Route exact path={`${match.url}/`} component={StudentPage} />
      <Route exact path={`${match.url}/quotes`} component={QuoteList} />
    </div>
  )
}

export default Setting