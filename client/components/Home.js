import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName, lastName, fullName} = props

  return (
    <div>
      <h3>Welcome, {fullName} {lastName}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
