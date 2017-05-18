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
import MovieList from './app/Component/MovieList';
import USBox from './app/Component/USBox';

const REQUEST_MOVIES_URL = 'http://api.douban.com/v2/movie/top250';

export default class MovieTalk extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={true}
          title='电影排行'
          renderIcon={() => <Image size={30} source={{uri: icons.star}} />}
          renderSelectedIcon={() => <Image size={30} source={{uri: icons.star}} />}
        >
        <MovieList />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={false}
          title='北美票房'
          renderIcon={() => <Image size={30} source={{uri: icons.star}} />}
          renderSelectedIcon={() => <Image size={30} source={{uri: icons.star}} />}
        >
        <USBox />
        </TabNavigator.Item>
      </TabNavigator>
      //<MovieList />
      //<USBox />
    )
  }
}

AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
