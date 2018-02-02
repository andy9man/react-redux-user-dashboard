import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux'
import { appInitialView, getUsers, showSelectedUser } from './state/actions';

class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      username: '',
      email: '',
      avatar: ''
    }

    this.addUser = this.addUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  getUsers() {
    axios.get(`http://5a74994008118e0012fd4c84.mockapi.io/users`)
      .then((response) => {
        this.props.appGetUsers(response.data);
      })
  }

  addUser() {
    const {email, username, avatar} = this.state;
    const userObj = {email, username, avatar}
    axios.post(`http://5a747e6661c2a40012894ac0.mockapi.io/api/v1/users`, userObj)
      .then( response => {
        console.log(response);
        this.getUsers();
      })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value} );
  }

  componentDidMount(){
    this.getUsers();
  }

  render() {
    const {email, username, avatar} = this.state;
    console.log(this.props.users)
    return (
      <div>
        <header>
        </header>

        <form style={ {marginTop: '30px'} } onSubmit={ (e) => {
          e.preventDefault();
          this.addUser();
        } }>

          <label htmlFor="">
            Email:
            <input name="email" value={email} />
          </label>

          <label htmlFor="">
            Username:
            <input name="username" value={username} />
          </label>

          <label htmlFor="">
            Avatar:
            <input name="avatar" value={avatar} />
          </label>
          <button>Add User</button>
        </form>

        
      </div>
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    appViewState: state.viewState,
    users: state.users
  }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
  return {
    appInitialView(dispatchName) {
      // dispatch(initialView(dispatchName))
    },
    appGetUsers(data) {
      dispatch(getUsers(data))
    },
    showSelectedUser(id){
      dispatch(selectedUser(id))
    }
  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(ListView)
