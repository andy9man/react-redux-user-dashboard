import React, { Component } from 'react';
import { connect } from 'react-redux'
import { appInitialView, getUsers, showSelectedUser, editUser, selectedUser } from './state/actions';


class UserView extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        appSelectedUser: []
      }
    }

  
    render() {

    console.log("here we are")  
    console.log( this.props.appSelectedUser)
    let newId = this.props.appSelectedUser
      return (
        <div>
          <header>
          </header>
          <div>
          <table className="table" border="1">
            <thead><tr><th>Name</th><th>email</th><th>created at</th><th>actions</th></tr></thead>
            <tbody>
               <tr key={newId.id}>
                <td>{newId.name}</td>
                <td>{newId.email}</td>
                <td>{newId.createdAt}</td>
                <td><a onClick={() => {this.props.appEditUser(newId.id)}}>Edit</a> Delete</td>
              </tr>  
            </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  const getStateFromReduxPassToAppComponentAsProps = (state) => {
    return {
      appSelectedUser: state.selectedUser
    }
  }

  const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
      appEditUser(id){
        dispatch(editUser(id))
      }
    }
  }
export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxToAppComponentAsProps)(UserView)
  