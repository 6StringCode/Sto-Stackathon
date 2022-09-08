import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import {fetchTrips, fetchUsers, fetchStays, me} from './store';
import Trips from './components/Trips';
import Trip from './components/Trip';
import CompanyMembers from './components/CompanyMembers';
import CompanyMember from './components/CompanyMember';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }
  componentDidUpdate(prevProps) {
    if(!prevProps.isLoggedIn && this.props.isLoggedIn){
      this.props.loadData()
    }
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route exact path="/trips" component={Trips} />
            <Route exact path="/trips/:id" component={Trip} />
            <Route exact path="/companyMembers" component={CompanyMembers} />
            <Route exact path="/companyMembers/:id" component={CompanyMember} />
          </Switch>
        ) : (
          <Switch>
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            {/* <Route path="/signup" component={Signup} /> */}
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    loadData() {
      dispatch(fetchTrips()),
      dispatch(fetchUsers()),
      dispatch(fetchStays())

    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
