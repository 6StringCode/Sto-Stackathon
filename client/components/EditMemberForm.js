import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from '../store/users';


class EditMemberForm extends Component {
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
    componentDidMount(){
      this.setState({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        department: this.state.department,
        isAdmin: this.state.isAdmin,
        username: this.state.username,
        password: this.state.password,
        avatar: this.state.avatar,
      })
      console.log(this.props.firstName);
      // this.el.addEventListener('change', ev => {
      //   const file = ev.target.files[0];
      //   const reader = new FileReader();
      //   reader.addEventListener('load', () => {
      //       this.setState({ image: reader.result });
      //   })
      //   reader.readAsDataURL(file);
      // })
    }
    componentDidUpdate(prevProps) {
        if(!prevProps.user?.id && this.props.user?.id){
          this.setState({
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            department: this.props.user.department,
            isAdmin: this.props.user.isAdmin,
            username: this.props.user.username,
            password: this.props.user.password,
            avatar: this.props.user.avatar,
          })
        }
    }

    onChange(ev) {
        this.setState({
          [ev.target.name]: ev.target.value,
        });
    }   
    async save(ev) {
        ev.preventDefault();
        const updatedUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            department: this.state.department,
            isAdmin: this.state.isAdmin,
            avatar: this.state.avatar,
            username: this.state.username,
            password: this.state.password
        };
        this.props.updateUser(updatedUser);
        this.setState({
            firstName: '',
            lastName: '',
            department: '',
            isAdmin: '',
            avatar: '',
            username: '',
            password: ''
        })
    }
    render() {
        const { firstName, lastName, department, avatar, username, password } = this.state;
        const { save, onChange } = this;
        return (
            <div>
                <h4 className='text-center'>Add a Company Member</h4>
                <form onSubmit={ save }>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>First Name</p>
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
                        <p style={{ marginBottom: 0 }}>Last Name</p>
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
                        <p style={{ marginBottom: 0 }}>Department</p>
                        <select 
                            className="form-control" 
                            name='department'
                            value={ department } 
                            onChange={ onChange }
                            >
                                <option value={'MANAGEMENT'}>Management</option>
                                <option value={'CREW'}>Crew</option>
                                <option value={'MUSIC'}>Music</option>
                                <option value={'ACTOR'}>Actor</option>
                                <option value={'OTHER'}>Other</option>
                        </select><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Avatar</p>
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
                        <p style={{ marginBottom: 0 }}>Username</p>
                        <input 
                            className="form-control" 
                            name="username"
                            value={ username } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
                    <div className="control-group">
                        <p style={{ marginBottom: 0 }}>Password</p>
                        <input 
                            className="form-control" 
                            name="password"
                            value={ password } 
                            onChange={ onChange }
                            >
                        </input><br />
                    </div>
    
                    <div className='text-center'>
                        <button className="btn btn-primary py-2 px-4 ml-5" disabled={ !firstName || !lastName }>Save</button>
                    </div>
                </form>
            </div>

        )
    }
};

const mapDispatchToProps = (dispatch, { history }) => {
    return {
        updateUser: (user) => dispatch(updateUser(user, history)),
        loadData() {
            dispatch(fetchTrips()),
            dispatch(fetchUsers())
        }
    }
}

export default connect(state => state, mapDispatchToProps)(EditMemberForm);