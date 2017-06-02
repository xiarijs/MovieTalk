import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import styles from '../style/main';

class Features extends Component {
  static navigationOptions = {
    title: '推荐电影',
    headerStyle: {
      backgroundColor: 'darkslateblue'
    },
    headerTintColor: 'rgba(255,255,255,0.8)'
  };
  render(){
    const { navigation } = this.props;
    return(
      <MovieList navigation= {navigation} />
    )
  }
}

const homePage = StackNavigator({
  Home: { screen: Features },
  MoveiDetail: {screen: MovieDetail}
});

export { homePage as default }
