import { INITIAL_VIEW, GET_USERS, SELECTED_USER, EDIT_USER } from './actions'
import ListView from '../ListView';
import UserView from '../UserView';

const intialState = {
  users: [],
  userSelected: undefined,
  viewState: ListView,
  selectedUser: []
}

function reducer(state=intialState, action) {
  switch(action.type) {
    case INITIAL_VIEW:
      return {
        ...state,
        viewState: ListView
      }
      case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
      case SELECTED_USER:
      let selUser = state.users.find( (user) => (user.id === action.payload))
      return {
        ...state,
        selectedUser: selUser,
        viewState: UserView
      }
      case EDIT_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export default reducer;