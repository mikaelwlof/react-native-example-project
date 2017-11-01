import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, Button } from 'react-native';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is the start page</Text>
     </View>
    );
  }
}
