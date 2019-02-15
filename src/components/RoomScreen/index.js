
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getRoom } from '../../actions/room';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 40,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width* 4/7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20, 
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  info: {
    flex: 1,
    alignItems: 'center',
  },
  about: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },
  aboutText: {
    fontWeight: 'bold',
  },
  bookingBar: {
    position: 'absolute',
    button: 0,
    padding: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'e2e2e2',
    backgroundColor: 'white',
    alikeItems: 'center',
  },
});

class RoomScreen extends Component {
  componentWillMount(){
    const selectRoomId = this.props.navigation.state.params.item.id;
    this.props.getRoom(selectRoomId);
  }

  render() {
    const room = this.props.room;

    if (!room) return null;

    const { image, host, bedRoom, bathRoom, accomodate, summary, price } = room;

    const item = this.props.navigation.state.params.item;
    return (
      <View style={{flex: 1}}>
        <ScrollView style = {styles.container}>
          <Image source = {{uri: image}} style = {styles.image} />
          <View style = {{padding: 30}}>

            <View style ={styles.row}>
              <Text style={{flex: 1}}>{`Hosted by ${host.fullname}`}</Text>
              <Image source ={{url: host.avatar}} style={styles.avatar} />
            </View>

            <View style ={styles.row}>
              <View style={styles.info}>
                <Icon name='ios-people-outline' size={40} />
                <Text>{accomodate} guests(s)</Text>
              </View>


              <View style={styles.info}>
                <Icon name='ios-alarm-outline' size={40} />
                <Text>{bedRoom} bedroom(s)</Text>
              </View>

              <View style={styles.info}>
                <Icon name='ios-home-outline' size={40} />
                <Text>{bathRoom} bathroom(s)</Text>
              </View>

            </View>
            

          </View>
        </ScrollView>
    </View>
    );
  }
}

const mapStateToProps = state => ({
    room: state.room.room,
  });


const mapDispatchToProps = dispatch => ({
  getRoom: (roomId) => dispatch(getRoom(roomId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
