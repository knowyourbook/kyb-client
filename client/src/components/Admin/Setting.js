import React from 'react'
import { Route } from 'react-router-dom'

function StudentList() {
  return <div>Student List</div>
}

function AdminPage() {
  return <div>Admin Page</div>
}

function Setting({ match }) {
  return (
    <div>
      <Route exact path={`${match.url}/`} component={AdminPage} />
      <Route exact path={`${match.url}/students`} component={StudentList} />
    </div>
  )
}

export default Setting