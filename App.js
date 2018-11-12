
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
var SpotifyWebApi = require('react-native-spotify-web-api');
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './app/screens/HomeScreen';
import { SearchScreen } from './app/screens/SearchScreen';
import { DetailsScreen } from './app/screens/DetailsScreen';

var spotifyApi = new SpotifyWebApi({
  clientId: '0c97682e61534996b733c2570805da2c',
  clientSecret: 'ef3edeba7b174259b46609d44625863e',
  redirectUri: 'http://localhost:8888/callback'
});
spotifyApi.setAccessToken('BQCC04OhNxVOMOKq-R_O3d5RyGFbvxsUUv34-0gEuEWvLyw8dwkryiQQjOX39emUM0T-HFb6QIjBquMDO6za7gewSo4qhKn2pdkuwICH8jMfQsBjDsXN4dTklEPZz3MjsTw3o1DVtUPaAHSeG9MzPnsV_w');



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

