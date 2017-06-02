import React,{ Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import styles from '../style/main';
import icons from '../style/icons';
import { TabNavigator } from 'react-navigation';

class TabRank extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={icons.star}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class TabUSA extends Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={icons.star}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

const App = TabNavigator({
  Home: {
    screen: TabRank,
  },
  Usa: {
    screen: TabUSA
  }
},
{
  tabBarOptions: {
    activeTintColor: '#000000',
  },
});

export { App as default }
