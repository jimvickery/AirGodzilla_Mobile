import { HOST } from '../constants';
import { normalizeRooms } from '../utils';

export const SET_ROOMS = 'SET_ROOMS';

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    rooms
  }
}

export function getRooms() {
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/rooms`)
    .then(response => response.json())
    .then((json => {
      console.log("getRooms", json);

      if (json.is_success) {
        dispatch(setRooms(normalizeRooms(json.rooms)));
      } else {
        alert(json.error);
      }
    }))
    .catch(e => alert(e));
  }
}