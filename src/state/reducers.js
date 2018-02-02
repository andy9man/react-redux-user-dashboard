import { INITIAL_VIEW } from './actions'

const intialState = {
  users: [],
  userSelected: undefined,
  viewState: INITIAL_VIEW
}

function reducer(state=intialState, action) {
  switch(action.type) {
    case INITIAL_VIEW:
      return {
        ...state,
        iFilterName: ''
      }

    default:
      return state;
  }
}

export default reducer;