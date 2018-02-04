/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Start from './src/Start';
import MainView from './src/MainView';


export default class App extends Component<{}> {
  static navigationOptions = {
        header: null
    }
  render() {
    return (
       <RootStack/>
    );
  }
}


const RootStack = StackNavigator(
  {
    Start: {
      screen: Start,

    },
    MainView: {
      screen: MainView,
    },
  },
  {
    initialRouteName: 'Start',
  },
);


