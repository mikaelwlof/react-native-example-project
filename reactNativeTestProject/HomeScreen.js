import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, Button } from 'react-native';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Game"
          onPress={() =>
            navigate('Game')
          }
        />
     </View>
    );
  }
}
