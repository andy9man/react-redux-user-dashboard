import axios from 'axios';

export const API_URL = 'http://5a74994008118e0012fd4c84.mockapi.io/users';

export const INITIAL_VIEW = 'INITIAL_VIEW';
export const UPDATE_VIEW = 'UPDATE_VIEW';
export const EDIT_USER = 'EDIT_VIEW';

export const LOAD_DATA = 'LOAD_DATA';
export const SELECTED_USER = 'SELECTED_USER';
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';

export const updateView = (view) => {
  return {type: UPDATE_VIEW, payload: view}
};

export const dataResultHandler = (actionType, stateObjectType, stateObjectResult) => {
  return {
    type: actionType,
    payload: {
      type: stateObjectType,
      result: stateObjectResult
    }
  }
};

export const getUsers = () => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting User Data... ${url}`);

    axios.get(`${url}`)
      .then( ({data: users}) => {
        setTimeout( () => { dispatch( dataResultHandler(LOAD_DATA, 'users', users) ) }, 1);
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );

    })
  }
};

export const selectedUser = (payload) => {
  return {type: SELECTED_USER, payload}
};

export const editUser = (payload) => {
  return {type: EDIT_USER, payload}
};

