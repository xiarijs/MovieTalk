import React,{ Component } from 'react';

import {
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../style/main';

import SearchBox from './SearchBox';

class Search extends Component{
  static navigationOptions = {
    title: '搜索',
    headerStyle: {
      backgroundColor: 'darkslateblue'
    },
    headerTintColor: 'rgba(255,255,255,0.8)'
  };
  render(){
    return(
      <SearchBox />
    )
  }
}

const homePage = StackNavigator({
  Home: { screen: Search }
});

export { homePage as default }
