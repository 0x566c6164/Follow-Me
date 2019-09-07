import userConstants from '../Constants/userConstants';
import alertActions from '../Actions/alertActions';
import userService from '../Services/UserService';
import authService from '../Services/AuthService';
import store from '../Utils/store';

export default {
  login,
  autoLogin,
  followUser,
  unfollowUser,
  logout,
}

export function login(user) {
  return async (dispatch) => {
    dispatch(request(user));
    try {
      const resp = authService.login(user);
      dispatch(success(resp));
      dispatch(alertActions.success('Signed in'));
    } catch(err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  }

  function request(user) {return {type: userConstants.LOGIN_REQUEST, user};}
  function success(user) {return {type: userConstants.LOGIN_SUCCESS, user};}
  function failure(error) {return {type: userConstants.LOGIN_FAILURE, error};}
}

export function autoLogin() {
  return async (dispatch) => {
    dispatch({type: userConstants.AUTO_LOGIN_ATTEMPT});
    const user = await authService.tryAutoLogin();
    if(user) {
      dispatch({type: userConstants.LOGIN_SUCCESS, user});
      dispatch(alertActions.success('Auto sign in successful'));
    }
  }
}

export function followUser(followedUser) {
  return async (dispatch) => {
    const currentUser = store.getState().user;
    if(!('id' in currentUser)) {
      dispatch(failure('Not signed in'));
      dispatch(alertActions.error('Not signed in'));
      return;
    }
    dispatch(request(followedUser));
    try {
    const resp = await userService.followUser(currentUser, followedUser);
      dispatch(success(resp.followedUser));
      dispatch(alertActions.info(`Followed ${followedUser.name}`));
    } catch(err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  };

  function request(followedUser) {return {type: userConstants.FOLLOW_REQUEST, followedUser}; }
  function success(followedUser) {return {type: userConstants.FOLLOW_SUCCESS, followedUser}; }
  function failure(error) { return {type: userConstants.FOLLOW_FAILURE, error}; }
}

export function unfollowUser(unfollowedUser) {
  return async (dispatch) => {
    const currentUser = store.getState().user;
    if(!('id' in currentUser)) {
      dispatch(failure('Not signed in'));
      dispatch(alertActions.error('Not signed in'));
      return;
    }

    dispatch(request(unfollowedUser));
    try {
      const resp = await userService.unfollowUser(currentUser, unfollowedUser);
      dispatch(success(resp.unfollowedUser));
      dispatch(alertActions.info(`Unfollowed ${unfollowedUser.name}`));
    } catch(err) {
      dispatch(failure(err.toString()));
      dispatch(alertActions.error(err.toString()));
    }
  };

  function request(unfollowedUser) {return {type: userConstants.UNFOLLOW_REQUEST, unfollowedUser}; }
  function success(unfollowedUser) {return {type: userConstants.UNFOLLOW_SUCCESS, unfollowedUser}; }
  function failure(error) { return {type: userConstants.UNFOLLOW_FAILURE, error}; }
}

export function logout() {
  return async (dispatch) => {
    try {
      await authService.logout();
      dispatch({type: userConstants.LOGOUT});
      dispatch(alertActions.info('Signed out'));
    } catch(err) {
      dispatch(alertActions.error(err.toString()));
    }
  };
}