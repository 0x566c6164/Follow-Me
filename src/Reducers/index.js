import { combineReducers } from 'redux';
import user from './userReducer';
import people from './peopleReducer';
import groups from './groupReducer';
import alert from './alertReducer';

const myApp = combineReducers({
  user,
  people,
  groups,
  alert,
});

export default myApp;