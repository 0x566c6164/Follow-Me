import React, { useState } from 'react';
import { connect } from 'react-redux';

import userActions from '../../Actions/userActions';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { orange, green, red } from '@material-ui/core/colors';

/*
* @person -> person to render
* @myGroup -> person group { id, name }
* @isFollowed -> boolean
* @follow  -> function to follow user
* @unfollow -> function to unfollow user
*/
const Person = ({ person, myGroup, isFollowed, follow, unfollow }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  const handleFollowClick = () => {
    if (isFollowed) {
      unfollow();
    } else {
      follow()
    }
  }

  const getButtonText = () => {
    if (hover) {
      return isFollowed ? 'Unfollow' : 'Follow';
    }
    return isFollowed ? 'Following' : 'Follow';
  }

  return (
    <Paper className={classes.root} >
      <div className={classes.container}>
        <Typography variant="h4" component="h3">
          {person.name}
        </Typography>
        <Button
          onClick={handleFollowClick}
          onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          className={`${classes.btnInit} ${isFollowed ? classes.followingBtn : classes.followBtn}`}>
          {getButtonText()}
        </Button>
      </div>
      <div className={classes.container}>
        <Typography variant="h6">Group {myGroup.name}</Typography>
        <Typography variant="h6">Followers: {person.followers.length}</Typography>
      </div>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return ({
    currentUser: state.user,
  })
};

const mapDispatchToProps = (dispatch) => ({
  followUser: (user, followUser) => dispatch(userActions.followUser(user, followUser)),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(Person);
export default connected;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 25,
    textAlign: 'left',
    width: 380,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textInfo: {
    marginTop: 15,
    padding: 5,
  },
  btnInit: {
    marginLeft: 25,
    color: 'white',
    '&:hover': {
      backgroundColor: '#FFBB3F'
    },
  },
  followBtn: {
    backgroundColor: orange[500]
  },
  followingBtn: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: red[500]
    },
  }
}));