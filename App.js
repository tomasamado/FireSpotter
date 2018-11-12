
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
var SpotifyWebApi = require('react-native-spotify-web-api');
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './app/screens/HomeScreen';
import { SearchScreen } from './app/screens/SearchScreen';
import { DetailsScreen } from './app/screens/DetailsScreen';

export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Details: DetailsScreen
},
  {
    initialRouteName: 'Home',
  }
);

