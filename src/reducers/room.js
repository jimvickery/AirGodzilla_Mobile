import { SET_ROOMS, SET_ROOM } from '../actions/room';

const  initialState = {
  rooms: [],
  room: null, 
};

export default function(state = initialState, action) {
  if (action.type === SET_ROOMS) {
    return {
      ...state,
      rooms: action.rooms
    }
  }

  if (action.type === SET_ROOM) {
    return {
      ...state,
      room: action.room
    }
  }

  return state;
}