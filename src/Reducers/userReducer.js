import userConstants from '../Constants/userConstants'

const initialState = {};

function userReducer(state=initialState, action) {
  switch(action.type) {
    case userConstants.LOGIN_SUCCESS: {
      return action.user;
    }
    case userConstants.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;