import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Person from './Person';

import groupActions from '../../Actions/groupActions';
import userActions from '../../Actions/userActions';

import CircularProgress from '@material-ui/core/CircularProgress';

const PersonList = (props) => {
  useEffect(() => {
    props.loadGroups();
  }, []);

  const { user, people, groups } = props;
  if (!user) {
    return null
  }
  if (!people || !groups) {
    return <CircularProgress style={{marginTop: 50}}/>
  }

  return people.map(person => { 
    if (user.id === person.id) {
      return null;
    }

    return (
    <Person
      key={person.id} 
      person={person}
      myGroup={groups[person.group_id] || ''}
      isFollowed={person.followers.some(follower => follower.id === user.id)}
      follow={() => props.followUser(person)}
      unfollow={() => props.unfollowUser(person)}
    /> )
  }
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  people: state.people,
  groups: state.groups,
});

const mapDispatchToProps = (dispatch) => ({
  loadGroups: () => dispatch(groupActions.loadGroups()),
  followUser: (followedUser) => dispatch(userActions.followUser(followedUser)),
  unfollowUser: (unfollowedUser) => dispatch(userActions.unfollowUser(unfollowedUser)),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(PersonList);
export default connected;