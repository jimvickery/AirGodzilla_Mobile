import { HOST } from '../constants';

export function normalizeRooms(rooms) {
  return rooms.map(room => {
    return {
      title: room.listing_name || '',
      image: `${HOST}${room.image}` || '',
      homeType: room.home_type || '',
      bedRoom: room.bed_room || '',
      instant: room.instant || '',
    }
  })
}