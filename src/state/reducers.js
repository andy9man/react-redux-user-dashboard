import { INITIAL_VIEW, LOAD_DATA, SELECTED_USER, EDIT_USER } from './actions'
import ListView from '../ListView';
import UserView from '../UserView';

const intialState = {
  users: [],
  userSelected: undefined,
  viewState: ListView,
  selectedUser: []
}

class User {
  constructor( {id, createdAt, firstName, lastName, email} ) {
    this.id = id;
    this.createdAt = createdAt;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

function reducer(state=intialState, action) {
  switch(action.type) {
    case INITIAL_VIEW:
      return {
        ...state,
        viewState: ListView
      };
      case LOAD_DATA:
       const users = action.payload.result.map( user => new User(user) );
       return {
         ...state,
         [action.payload.type]: users,
         loadingData: false
      };
      case SELECTED_USER:
       const selUser = state.users.find( (user) => (user.id === action.payload))
      return {
        ...state,
        selectedUser: selUser,
        viewState: UserView
      };
      case EDIT_USER:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}

export default reducer;