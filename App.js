import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from './src/screen/Auth/Login'
import Router from './src/Router/Router'
import SplashScreen from './src/screen/SplashScreen/SplashScreen'
import SplashScreen2 from './src/screen/SplashScreen/SS1'

const MainNav = createAppContainer(createSwitchNavigator({
  // Splash Screen waitt dulus
  // Main: {
  //   screen:SplashScreen
  // },
  // Main1: {
  //   screen:SplashScreen2
  // },
   // Navigation Guest
  Router: {
    screen: Router
  },
},{
  headerMode: null}
 )
)

export default class App extends Component {
  render() {
    return (
      <MainNav/>
    )
  }
}
