import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
import styles from '../style/main';

class MovieDetail extends Component{
  constructor(props){
    super(props);

    this.state = {
      movieDetail: {},
      title: '',
      loading: false
    }

    this.fetchData();
  };
  fetchData (){
    const {state} = this.props.navigation;
    const REQUEST_MOVIE_DETAIL = `http://api.douban.com/v2/movie/subject/${state.params.movie.id}`
    fetch(REQUEST_MOVIE_DETAIL)
      .then(response=>response.json())
      .then(responseData=>{
        this.setState({
          movieDetail: responseData,
          loading: true
        })
      })
      .done();
  }
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'darkslateblue'
    },
    headerTintColor: 'rgba(255,255,255,0.8)'
  };
  render(){
    if(!this.state.loading){
      return (
        <View style={styles.container}>
          <View style={styles.loadBox}>
            <ActivityIndicator
              size='large'
              color='#6435c9'
            />
          </View>
        </View>
      )
    }

    let movies = this.state.movieDetail.summary.split('\n');
    let summary = movies.map(key => {
      return(
        <View style={{paddingTop: 6, paddingBottom: 6}} key={key}>
          <Text style={styles.itemText}>{key}</Text>
        </View>
      )
    });
    console.log(summary);
    return(
      <View style={styles.container}>
        <View style={styles.item}>
          {summary}
        </View>
      </View>
    )
  }
}

export { MovieDetail as default}
