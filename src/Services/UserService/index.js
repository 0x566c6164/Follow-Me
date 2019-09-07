import { url } from '../url'

export default {
  getUser,
  getUsers,
  followUser,
  unfollowUser,
}

async function getUser(id) {
  const resp = await fetch(`${url}/users/${id}`);
  return await resp.json();
}

async function getUsers() {
  const resp = await fetch(`${url}/users`);
  return await resp.json();
}

async function followUser(currentUser, followedUser) {
  const data = {
    id: followedUser.id,
    name: followedUser.name,
    group_id: followedUser.group_id,
    followers: [...followedUser.followers, {
      id: currentUser.id,
      name: currentUser.name
    }]
  };

  const resp = await fetch(`${url}/users/${followedUser.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return { followedUser: await resp.json() };
}

async function unfollowUser(signedUser, user) {
  const newFollowers = user.followers.filter((follower) => follower.id !== signedUser.id);
  const data = {...user};
  data.followers = newFollowers;

  const resp = await fetch(`${url}/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  return { unfollowedUser: await resp.json() };
}