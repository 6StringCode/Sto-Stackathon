import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


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
  render() { 
    const { user } = this.state;
    return ( 
      <div>
        <h2>Hello {user.fullName} </h2>
      </div>
    );
  }
}
 

const mapState = ({ users }, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(users);
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
