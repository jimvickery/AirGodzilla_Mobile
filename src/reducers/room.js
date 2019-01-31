import { SET_ROOMS } from '../actions/room';

const  initialState = {
  rooms: []
};

export default function(state = initialState, action) {
  if (action.type === SET_ROOMS) {
    return {
      ...state,
      rooms: action.rooms
    }
  }
  return state;
}