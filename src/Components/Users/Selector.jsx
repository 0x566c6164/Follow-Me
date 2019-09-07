import React from 'react';
import { connect } from 'react-redux';

import userActions from '../../Actions/userActions';

import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

/*
* @people -> all users from database
* @login -> function to login as selected user
*/
const Selector = ({ people, login }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  if(!people)
    return null;

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const selectUser = async (evt) => {
    login(JSON.parse(evt.target.dataset.user))
    handleClickAway();
  }

  const displayUsers = people.map(user => 
  <div data-user={JSON.stringify(user)} key={user.id} className={classes.userSelector} onClick={(evt) => selectUser(evt)}>
    {user.name}
  </div>);

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button className={classes.drop} onClick={handleClick}>Select User</Button>
          {open ? (
            <Paper className={classes.dropOpen}>
              {displayUsers.map(user => user)}
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    people: state.people
  })
};

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(userActions.login(user)),
});
  
const connected = connect(mapStateToProps, mapDispatchToProps)(Selector);
export default connected;


const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  drop: {
    backgroundColor: '#E0E0E0',
    '&:hover': {
      backgroundColor: '#B1B1B1'
    },
  },
  dropOpen: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
    width: 200
  },
  userSelector: {
    backgroundColor: '#E0E0E0',
    fontSize: '0.65em',
    whiteSpace: 'nowrap',
    padding: 8,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#CCCCCC'
    },
  }
}));