import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const CompanyMember = props => {
  const { users } = props
  console.log(users);
  return (
    <div>
      <h3>{users.length} Company Members:</h3>
      <ul>
        {
          users.map(user => {
            return (
              <li key={user.fullName}>{user.fullName}</li>
            )
          })
        }
      </ul>
    </div>
  )
}


const mapState = state => {
  return {
    users: state.users,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: ()=> {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(CompanyMember)
