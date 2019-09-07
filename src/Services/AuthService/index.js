import Cookies from 'universal-cookie';
import userService from '../UserService'

const cookies = new Cookies();

export default {
  login,
  tryAutoLogin,
  logout,
}

function login(user) {
  cookies.set('user_id', user.id, { path: '/' });
  return user;
}

async function tryAutoLogin() {
  const cookie = cookies.get('user_id');
  if(cookie) {
    let user = await userService.getUser(cookie);
    return user;
  }

  return null;
}

function logout() {
  cookies.remove('user_id');
  return true;
}