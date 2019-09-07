import React from 'react';
import { connect } from 'react-redux';

/*
* @user -> currently logged in user
* @people -> array of people
*/
const Greet = ({ user, people }) => {
  if(!people) {
    return null;
  }

  let iFollow = 0;
  for(let i = 0; i < people.length; i++) {
    const personFollowers = people[i].followers;
    for(let j = 0; j < personFollowers.length; j++) {
      if(personFollowers[j].id === user.id) 
        iFollow++
    }
  }

  return (
  <div>{user.name ?
    <div>
      <h1>Welcome, {user.name}</h1>
      <h3 style={{marginBottom: 0}}>You have {user.followers.length} {user.followers.length === 1 ? `Follower` : `Followers`}</h3>
      <h3 style={{marginTop: 0}}>You currently follow {iFollow} {iFollow === 1 ? `Person` : `People`}</h3>
      <h2>Choose users to follow</h2>
    </div> 
    : <h1>Must be signed in</h1> }
  </div>
)}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    people: state.people,
  })
};

const connected = connect(mapStateToProps)(Greet);
export default connected;