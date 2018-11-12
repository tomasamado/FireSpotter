
import React from 'react';
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

