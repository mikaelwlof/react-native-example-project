import React, { Component } from 'react';
import {Image, AppRegistrym, TouchableOpacity, View } from 'react-native';

export default class Sausage extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <View onPress={this.props.onClick} style={{overflow: 'hidden', width:  this.props.width}}>
          <Image source={require('./sausage.png')} style={{height: 50, width: 120}} resizeMode= 'contain'/>
        </View>
      </TouchableOpacity>
    );
  }
}
