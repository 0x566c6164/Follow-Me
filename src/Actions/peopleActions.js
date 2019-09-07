import peopleConstants from '../Constants/peopleConstants';
import userService from '../Services/UserService';
import compare from '../Utils/compare';

export default {
  loadPeople,
}

function loadPeople() {
  return async (dispatch) => {
  
    dispatch(request());
    try{
      const people = await userService.getUsers();
      people.sort((a,b) => compare.alphabetic(a.name, b.name));
      dispatch(success(people));
    }catch(err) {
      dispatch(failure(err.toString()));
    }
  };
  function request() { return {type: peopleConstants.PEOPLE_REQUEST}; }
  function success(people) { return {type: peopleConstants.PEOPLE_SUCCESS, people}; }
  function failure(error) { return {type: peopleConstants.PEOPLE_FAILURE, error}; }
}