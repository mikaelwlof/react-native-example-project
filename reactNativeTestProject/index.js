import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Game from './Game.js';
import HomeScreen from './HomeScreen.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: Game },
});

AppRegistry.registerComponent('reactNativeTestProject', () => App);
