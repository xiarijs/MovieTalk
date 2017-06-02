/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import styles from './app/style/main';
import icons from './app/style/icons';
import App from './app/Component/App';
import Features from './app/Component/Features';
import USBox from './app/Component/USBox';
import Search from './app/Component/Search'

const REQUEST_MOVIES_URL = 'http://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
  constructor(props){
    super(props);

    this.state = {
      onTabbar: 'features'
    }
  }

  render(){
    return(
      <App />
    )
  }
}

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
