import React, { Component } from 'react';
import { Text, View} from 'react-native';


export default class ApiCallPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'No response yet'
    }
  }

 componentDidMount() {
   return fetch("http://localhost:3000/derp")
   .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          text: responseJson.message
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
 }

  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}
