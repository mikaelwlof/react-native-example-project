import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';
import Sausage from './sausage/SausageComponent.js'


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: {
        user: 0,
        computer: 0
      },
      userSausage: {
        width: 100,
        currentPiece: 0
      },
      computerSausage: {
        width: 100,
        currentPiece: 0
      }
    }
  }

  imgClick = ({nativeEvent: {locationX, locationY}}) => {
    let newUserSausage = this.getUserSausageValues(locationX);
    this.setState({userSausage: newUserSausage});
    let newComputerSausage = this.makeComputerMove();
    this.setState({computerSausage: newComputerSausage});
    let newPoints = this.getPoints(newUserSausage, newComputerSausage);
    this.setState({points:newPoints});
  }

  getUserSausageValues(locationX) {
    let clickPosition = locationX;
    let theRest = this.state.userSausage.width;
    return {currentPiece: theRest, width: clickPosition};
  }

  makeComputerMove() {
    let pieceToTake = this.state.computerSausage.width * Math.random();
    let pieceLeft = this.state.computerSausage.width - pieceToTake;
    return {currentPiece: pieceToTake, width : pieceLeft};
  }

  getPoints(newUserSausage, newComputerSausage) {
    if(newUserSausage.currentPiece > newComputerSausage.currentPiece) {
      return {computer: this.state.points.computer, user: this.state.points.user + 1};
    } else {
      return {computer: this.state.points.computer + 1, user: this.state.points.user};
    }
  }

  render() {
    return (
      <View>
        <Text>Your sausage</Text>
        <Sausage
            onClick={(event) => this.imgClick(event)}
            width = {this.state.userSausage.width}
            currentPiece = {this.state.userSausage.currentPiece} />

        <Text>Computer sausage</Text>
        <Sausage
            width = {this.state.computerSausage.width}
            currentPiece = {this.state.computerSausage.currentPiece} />
     </View>
    );
  }
}
