import React from 'react';
import { connect } from 'react-redux';

import Selector from '../Users/Selector';
import userActions from '../../Actions/userActions';

import Button from '@material-ui/core/Button';

/*
* @user -> currently logged in user
* @logout -> function to logout the user
*/
const Auth = ({ user, logout }) => (
    <div>
      {user.name ?
        (<Button style={{marginTop: 50}} variant="contained"color="primary" onClick={() => logout()}> Sign out </Button> ) 
      : (<Selector />)
      }
    </div>
  );

const mapStateToProps = (state) => {
  return ({
    user: state.user
  })
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userActions.logout()),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Auth);
export default connected;