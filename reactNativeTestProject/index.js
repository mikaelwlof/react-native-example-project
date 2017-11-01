import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Game from './components/sausageGame/Game.js';
import HomeScreen from './components/HomeScreen.js';
import ApiCallPage from './components/apiCall/ApiCallPage.js';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: Game },
  ApiCallPage: { screen: ApiCallPage }
});

AppRegistry.registerComponent('reactNativeTestProject', () => App);
