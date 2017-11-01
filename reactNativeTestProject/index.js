import { AppRegistry } from 'react-native';
import Game from './components/sausageGame/Game.js';
import HomeScreen from './components/HomeScreen.js';
import ApiCallPage from './components/apiCall/ApiCallPage.js';
import { StackNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: Game },
  ApiCallPage: { screen: ApiCallPage }
});

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Game: { screen: Game },
  ApiCallPage: { screen: ApiCallPage }
});

AppRegistry.registerComponent('reactNativeTestProject', () => App);
