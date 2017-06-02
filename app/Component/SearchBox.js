import React, { Component } from 'react';
import {
  View,
  Text,
  Input
} from 'react-native';

import styles from '../style/main';

class SearchBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>11111111search</Text>
      </View>
    )
  }
}

export { SearchBox as default };
