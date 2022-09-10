import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser, updateUser } from '../store/users';


class createMemberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.user?.firstName || '',
            lastName: this.props.user?.lastName || '',
            department: this.props.user?.department || '',
            isAdmin: this.props.user?.isAdmin || false,
            avatar: this.props.user?.avatar || '',
            username: this.props.user?.username || '',
            password: this.props.user?.password || ''
        }
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    componentDidUpdate(prevProps) {
        if(!prevProps && this.props){
          this.props.loadData()
        }
    }

    onChange(ev) {
        //console.log(ev.target)
        const value = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
        this.setState({
          [ev.target.name]: value,
        });
    }   
    async save(ev) {
        ev.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            department: this.state.department,
            isAdmin: this.state.isAdmin,
            avatar: this.state.avatar,
            username: this.state.username,
            password: this.state.password
        };
        if(this.props.user){
                this.props.updateUser({ ...newUser, id: this.props.user.id })
        }
        else {
            this.props.createUser(newUser);
        }
        this.setState({
            firstName: '',
            lastName: '',
            department: '',
            isAdmin: false,
            avatar: '',
            username: '',
            password: ''
        })
    }
    render() {
        const { firstName, lastName, department, isAdmin, username, password, avatar } = this.state;
        const { save, onChange } = this;
        return (
            <div>
                <form onSubmit={ save }>
                    <div className="control-group">
                        <label>First Name</label>
                        <input 
                            className="form-control" 
                            placeholder="required" 
                            name='firstName' 
                            value={ firstName } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <label>Last Name</label>
                        <input 
                            className="form-control" 
                            placeholder="required" 
                            name='lastName'
                            value={ lastName } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <label>Department</label>
                        <select 
                            className="form-control" 
                            name='department'
                            value={ department }
                            onChange={ onChange }
                            >
                                <option value=''>Select a Department</option>
                                <option value='MANAGEMENT'>Management</option>
                                <option value='CREW'>Crew</option>
                                <option value='MUSIC'>Music</option>
                                <option value='ACTOR'>Actor</option>
                                {/* <option value='OTHER'>Other</option> */}
                        </select><br />
                    </div>
                    <div className="control-group">
                        <label>Photo</label>
                        <input 
                            className="form-control" 
                            type="file"
                            name="avatar"
                            value={ avatar } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <label>Admin</label>
                        <input 
                            className="form-control" 
                            type="checkbox"
                            name="isAdmin"
                            value={ isAdmin }
                            checked={ isAdmin }
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <label>Username</label>
                        <input 
                            className="form-control" 
                            name="username"
                            value={ username } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <label>Password</label>
                        <input 
                            className="form-control" 
                            type="password"
                            name="password"
                            value={ password } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
    
                    <div className='text-center'>
                        <button className="btn btn-primary py-2 px-4 ml-5" disabled={ !firstName || !lastName || !department }>Save</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        createUser: (user) => dispatch(createUser(user, history)),
        updateUser: (user) => dispatch(updateUser(user, history)),
        loadData() {
            dispatch(fetchTrips()),
            dispatch(fetchUsers())
          }
    }
}

export default connect(state => state, mapDispatchToProps)(createMemberForm);