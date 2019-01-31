const  initialState = {
  rooms: [
    {
      id: 1, 
      title: 'New York',
      homeType: "House",
      image: {uri: "https://cdn-images-1.medium.com/max/1600/0*16jXPVaLi2nBkz6m.jpg"},
      bedroom: 2, 
      price: 150,
      instant: true
    },
    {id: 2, 
      title: 'Melbourne',
      homeType: "Apartment",
      image: {uri: "https://cdn-images-1.medium.com/max/1600/0*lVZUpshzLYaRxIiS.jpg"},
      bedroom: 3, 
      price: 250,
      instant: true
    },
    {id: 3, 
      title: 'Paris',
      homeType: "House",
      image: {uri: "https://cdn-images-1.medium.com/max/1600/0*PksNnDZuB0S3yZwd.jpg"},
      bedroom: 1, 
      price: 99,
      instant: true
    },
  ]
};

export default function(state = initialState, action) {
  return state;
}