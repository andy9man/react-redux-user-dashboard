import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { appInitialView, getUsers, showSelectedUser, editUser, selectedUser } from './state/actions';

class ListView extends Component {


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
    console.log("Attempting to load users...");
    this.props.appGetUsers();
  }

  render() {

    return (
      <div className="padding-horiz-xlarge padding-vert-xlarge">

        {this.props.loadingData &&
          <div
            style={ {
              width: '100%',
              height: '100%',
              top: '0',
              position: 'fixed',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            } }
          >
            <span className="loading-indicator xlarge"></span>
          </div>}

        <table className="table" summary="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th style={ {width: '175px'} }>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map( user => (
              <tr key={user.id}>
                <td><a onClick={() => {this.props.showSelectedUser(user.id)}}>{user.firstName} {user.lastName}</a></td>
                <td>{user.email}</td>
                <td>{( (d) => {
                      d = new Date(parseInt(d, 10));
                      return `${d.getMonth()+1}/${d.getDay()+1}/${d.getFullYear()}`;
                    })(user.createdAt)}
                </td>
                <td>
                  <ul className="button-group tiny" style={ {marginBottom: '.5em', marginTop: '.5em'} }>
                    <li>
                      <button onClick={() => {this.props.showSelectedUser(user.id)}}>Show</button>
                    </li>

                    <li>
                      <button onClick={() => {this.props.appEditUser(user.id)}}>Edit</button>
                    </li>

                    <li>
                      <button onClick={ () => (alert('Need to delete'))} className="alert">Delete</button>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    appGetUsers() {
      dispatch( getUsers() );
    },
    showSelectedUser(id){
      dispatch(selectedUser(id))
    },
    appEditUser(id){
      dispatch(editUser(id))
    }
  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(ListView)
