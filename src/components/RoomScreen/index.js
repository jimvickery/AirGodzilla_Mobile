
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
import GodzillaButton from '../../actions/room'
import { getRoom } from '../Shared/GodzillaButton';

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
    bottom: 0,
    padding: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    backgroundColor: 'white',
    alignItems: 'center',
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

            <View style={styles.about}>
               <Text style={styles.aboutText}>About This Home </Text>
               <Text>{summary}</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bookingBar}>
          <Text style={{flex: 1}}>
            <Text style={{fontWeight: 'bold'}}>{`$${price}`}</Text> per night
          </Text>
          <GodzillaButton
            onPress = { () => {alert("Check Availability")} }
            backgroundColor= '#FF5A60'
            textColor = 'white'
            label = 'Check Availability'
          />
        </View>
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
