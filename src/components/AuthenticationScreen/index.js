
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { login, logout } from '../../actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#007B7F'
  },
  title: {
    fontSize: 27,
    color: '#E2E2E2',
    marginBottom: 30,
    alignSelf: 'center',
  },
  button: {
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25, 
    flexDirection: 'row',
    backgroundColor: '#E2E2E2',
  },
  buttonText: {
    fontSize: 17,
    color: '#007B7F',
  },
  icon: {
    marginRight: 15,
  },
});

class AuthenticationScreen extends Component {

  onFBAuth(){
    console.log('Facebook Login');
  }
  render() {
    
    return (
     <View style={styles.container}>
       <TouchableOpacity
        style={styles.button} onPress = { () => this.onFBAuth()}>
       <Icon name ="logo-Facebook" size = {25} color = "##007B7F" style={styles.icon} />
       <Text style = {styles.buttonText}>Continue with Facebook</Text>
       </TouchableOpacity>
     </View>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.user.accessToken
});

const mapDispatchToProps = dispatch => ({
  login: (name) => dispatch(login(name)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationScreen);
