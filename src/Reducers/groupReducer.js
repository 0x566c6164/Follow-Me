import groupConstants from '../Constants/groupConstants';

const initialState = null;
function groupReducer(state=initialState, action) {
  switch(action.type) {
    case groupConstants.GROUP_SUCCESS: {
      return action.groups;
    }
    default: {
      return state;
    }
  }
}

export default groupReducer;