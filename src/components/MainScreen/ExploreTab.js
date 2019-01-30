
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

import { navigate } from '../../actions/nav';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
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
    instant: false
  },
  {id: 2, 
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
            <Text>{item.title}</Text>
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
