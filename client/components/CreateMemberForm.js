import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from '../store/users';


class createMemberForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            avatar: '',
            username: '',
            password: ''
        }
        this.save = this.save.bind(this);
    }
    save(ev) {
        ev.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            avatar: this.state.avatar,
            username: this.state.username,
            password: this.state.password
        };
        this.props.createUser(newUser);
    }
    render() {
        const { firstName, lastName, avatar, username, password } = this.state;
        const { save } = this;
        return (
            <div className='mt-5' style={{ maxWidth: '800px', width: '50%', dislay: 'block', margin: '0 auto' }}>
                <h4 className='text-center'>Add a Company Member</h4>
                <form onSubmit={ save }>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>First Name</p>
                        <input className="form-control" placeholder="required" value={ firstName } onChange={ ev => this.setState({ firstName: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Last Name</p>
                        <input className="form-control" placeholder="required" value={ lastName } onChange={ ev => this.setState({ lastName: ev.target.value })}></input><br />
                    </div>
                    {/* <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Avatar</p>
                        <input className="form-control" value={ avatar } onChange={ ev => this.setState({ avatar: ev.target.value })}></input><br />
                    </div> */}
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Username</p>
                        <input className="form-control" value={ username } onChange={ ev => this.setState({ username: ev.target.value })}></input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Password</p>
                        <input className="form-control" value={ password } onChange={ ev => this.setState({ password: ev.target.value })}></input><br />
                    </div>
    
                    <div className='text-center'>
                        {/* <Link to='/account/addressbook'><button className="btn btn-primary py-2 px-4 mr-5" >Cancel</button></Link> */}
                        <button className="btn btn-primary py-2 px-4 ml-5" disabled={ !firstName || !lastName }>Save</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        createUser: (user) => dispatch(createUser(user, history))
    }
}

export default connect(state => state, mapDispatchToProps)(createMemberForm);