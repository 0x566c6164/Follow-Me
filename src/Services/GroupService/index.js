import { url } from '../url';

export default {
  getGroups,
}

function getGroups() {
  return fetch(`${url}/groups`)
  .then((resp) => resp.json()).catch()
}