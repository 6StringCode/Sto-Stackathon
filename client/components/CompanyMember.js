import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CreateMemberForm from './CreateMemberForm';


class CompanyMember extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {}
    }
  }
  componentDidMount(){
    this.setState({
      user: this.props.user
    })
  }

  componentDidUpdate(prevProps){
    if(JSON.stringify(prevProps.user) !== JSON.stringify(this.props.user)){
      this.setState({
        user: this.props.user
      })
    }
  }

  render() { 
    const { user } = this.state;
    return ( 
      <div>
        <div>
          <h2>{user.fullName}</h2>
          {
            user.avatar ? user.avatar : ''
          }
          <p>Department: {user.department}</p>
        </div>
        <div>
          <CreateMemberForm user={ this.props.user }/>
        </div>
      </div>
    );
  }
}

const mapState = ({ users }, ownProps) => {
  const id = ownProps.match.params.id;
  const user = users.find( user => user.id === id*1) || {};
  return {
    user
  };
}

const mapDispatch = (dispatch) => {
  return {
    fetchUsers: ()=> {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapState, mapDispatch)(CompanyMember)
