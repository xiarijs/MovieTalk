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

    this.state = {
      onTabbar: 'rank'
    }
  }

  render(){
    return(
      <TabNavigator tabBarStyle={{backgroundColor:'darkslateblue'}}>
        <TabNavigator.Item
          selected={this.state.onTabbar == 'rank'}
          title='电影排行'
          renderIcon={() => <Image style={{width:23,height:23,tintColor:'#929292'}} source={{uri: icons.star}} />}
          renderSelectedIcon={() => <Image style={{width:23,height:23,tintColor:'white'}} source={{uri: icons.starActive}} />}
          onPress={()=>{
            this.setState({
              onTabbar: 'rank'
            })
          }}
          selectedTitleStyle={{color: 'white'}}
        >
          <MovieList />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.onTabbar == 'usa'}
          title='北美票房'
          renderIcon={() => <Image style={{width:20,height:20,tintColor:'#929292'}} source={{uri: icons.rank}} />}
          renderSelectedIcon={() => <Image style={{width:20,height:20,tintColor:'white'}} source={{uri: icons.rankActive}} />}
          onPress={()=>{
            this.setState({
              onTabbar: 'usa'
            })
          }}
          selectedTitleStyle={{color: 'white'}}
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
