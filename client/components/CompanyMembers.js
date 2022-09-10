import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateMemberForm from './CreateMemberForm'

const CompanyMembers = props => {
  const { users } = props
  return (
    <div>
      <div>
        <h3>{users.length} Company Members:</h3>
          <div className='memberByDept'>
            <div className='filterMember'>
              <h4>Musicians</h4>
              <ul>
                {
                  users.filter(user => user.department === 'MUSIC')
                  .map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/companyMembers/${user.id}`}>{user.fullName}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='filterMember'>
              <h4>Actors</h4>
              <ul>
                {
                  users.filter(user => user.department === 'ACTOR')
                  .map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/companyMembers/${user.id}`}>{user.fullName}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='filterMember'>
              <h4>Management</h4>
              <ul>
                {
                  users.filter(user => user.department === 'MANAGEMENT')
                  .map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/companyMembers/${user.id}`}>{user.fullName}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='filterMember'>
              <h4>Crew</h4>
              <ul>
                {
                  users.filter(user => user.department === 'CREW')
                  .map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/companyMembers/${user.id}`}>{user.fullName}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            {/* {
            users.department === 'OTHER' ? 
              <div className='filterMember'>
              <h4>Other</h4>
              <ul>
                {
                  users.filter(user => user.department === 'OTHER')
                  .map(user => {
                    return (
                      <li key={user.id}>
                        <Link to={`/companyMembers/${user.id}`}>{user.fullName}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            : ''
            } */}
          </div>
        </div>
      <div>
        <h4>Add Company Member</h4>
        <CreateMemberForm />
      </div>
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

export default connect(mapState, mapDispatch)(CompanyMembers)
