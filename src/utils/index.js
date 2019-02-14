import { HOST } from '../constants';

export function normalizeRooms(rooms) {
  return rooms.map(room => {
    return {
      id: room.id || '',
      title: room.listing_name || '',
      image: `${HOST}${room.image}` || '',
      homeType: room.home_type || '',
      bedRoom: room.bed_room || '',
      price: room.price || '',
      instant: room.instant || '',
    }
  })
}


export function normalizeRoom(room) {
  return {
    id: room.id || '',
    title: room.listing_name || '',
    image: `${HOST}${room.image}` || '',
    homeType: room.home_type || '',
    bedRoom: room.bed_room || '',
    price: room.price || '',
    instant: room.instant || '',
    summary: room.summary || '',
    accomodate: room.accomodate || '',
    instant: room.instant || '',
    instant: room.instant || '',
  }
}