import groupConstants from '../Constants/groupConstants';
import groupService from '../Services/GroupService';

export default {
  loadGroups,
}

function loadGroups() {
  return async (dispatch) => {
    dispatch(request());
    try {
      const groups = await groupService.getGroups();
      dispatch(success(groups));
    } catch(err) {
      dispatch(failure(err.toString()));
    }
  }
  function request() { return {type: groupConstants.GROUP_REQUEST}; }
  function success(groups) { return {type: groupConstants.GROUP_SUCCESS, groups}; }
  function failure(error) { return {type: groupConstants.GROUP_FAILURE, error}; }
}