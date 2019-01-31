import { HOST } from '../constants';
import { normalizedRooms } from '../utils';

export const SET_ROOMS = 'SET_ROOM';

export function setRooms(rooms) {
  return {
    type: SET_ROOMS,
    rooms
  }
}

export function getRooms() {
  return (dispatch) => {
    return fetch(`${HOST}/api/v1/rooms`)
  }

}