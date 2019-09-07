import peopleConstants from '../Constants/peopleConstants';
import userConstants from '../Constants/userConstants';

const initialState = null;
function peopleReducer(state=initialState, action){
  switch(action.type) {
    case peopleConstants.PEOPLE_SUCCESS: {
      return action.people;
    }
    case userConstants.FOLLOW_SUCCESS: {
      if(!state) return state;
      const {followedUser} = action;
      const followedUserIdx = state.findIndex((user) => user.id === followedUser.id);
      if(followedUserIdx < 0) {
        return state;
      }
      const newPeopleArr = [...state];
      newPeopleArr[followedUserIdx] = followedUser; 
      return newPeopleArr;
    }
    case userConstants.UNFOLLOW_SUCCESS: {
      if(!state) return state;
      const {unfollowedUser} = action;
      const unfollowedUserIdx = state.findIndex((person) => person.id === unfollowedUser.id);
      if(unfollowedUserIdx < 0) {
        return state;
      }
      const newPeopleArr = [...state];
      newPeopleArr[unfollowedUserIdx] = unfollowedUser;
      return newPeopleArr;
    }
    default: {
      return state;
    }
  }
}

export default peopleReducer;