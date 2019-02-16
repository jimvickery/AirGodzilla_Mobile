import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create ({
  button: {
    height: 47,
    alignItmes: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    opacity: 1,
  },
  buttonText:   {
    fontWeight: 'bold',
    fontSize: 15, 
  }
});

export default class GodzillaButton extends Component {
  render() {
    const { onpress,
       label,
       backgroundColor,
       textColor, 
       disabled 
      } = this.props;
    
       return {  
      <TouchableOpacity
      style = {[styles.button, {backgroundColor} ]}
      onpress = {() => onPress() } 
      disabled = {disabled}>
      <Text style = {{style.buttonText, {color: textColor }}}>{label}</Text>

      </TouchableOpacity>

    }
  }
}
