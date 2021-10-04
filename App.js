import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';
enableScreens();
export default class App extends React.Component {
  render() {
    return <MealsNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forminput: {
    flex: 1,
    width: 300,
    borderBottomWidth: 1,
    height: 35,
    borderBottomColor: '#eee',
    fontFamily: 'OpenSans-Regular',
  },

  formgroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    flex: 1,
    fontFamily: 'OpenSans-Bold',
  },
  listContainer: {
    width: '100%',
  },
});
