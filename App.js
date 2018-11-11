
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
spotifyApi.setAccessToken('BQDX0BoUkVITrBd5UTQhcRDAcwClMT1xAV-HDrIh_Z_TyHVqTvFqaGReedef05tPPp2wlC6CrghMiQ_RFj_rFKBOIiACTt-mnuiqQO8QGuXthTRavxBLJyqypWrD2bQPruonWrQFPdBV56ZbqAG1eulGVw');



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