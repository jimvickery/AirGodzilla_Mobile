
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import { navigate } from '../../actions/nav';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
  },
  image: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width * 4/7,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16, 
    marginBottom: 5,
    color: "#555"
  }
});

const items = [
  {id: 1, 
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
  }

];

class ExploreTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: items
    };
  }

  onPress(item) {
    this.props.navigate({ routeName: "Detail", params: { item: item } });
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.items}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => this.onPress(item)} style={styles.item}>
           <Image style={styles.image} source = {item.image} />
           <Text style={styles.title}>{`$${item.price} ${item.instant ? '🎉' : ''} ${item.title}  `}</Text>
           <Text>{`${item.homeType} - ${item.bedroom} bedroom(s)`}</Text>
          </TouchableOpacity>
        }
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(navigate(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreTab);
