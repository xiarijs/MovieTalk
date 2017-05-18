import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
  textNum: {
    fontSize: 13,
    color: 'red'
  },
  textAlias: {
    marginBottom: 6,
    color: 'rgba(0,0,0,0.5)'
  },
  textTitle: {
    fontSize: 18,
    color: '#6435c9',
    marginBottom: 3
  },
  movieListInf: {
    paddingTop: 5,
    marginLeft: 15,
    flex: 1
  },
  movieListRow: {
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)'
  },
  image:{
    width: 99,
    height: 138
  },
  loadBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#eae2ff',
    flex: 1,
  }
})

export {styles as default};
