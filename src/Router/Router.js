import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import Login from '../screen/Auth/Login'
import Home from '../screen/Index/Home'
import Profil from '../screen/Profil/Profil'
import Kegiatan from '../screen/Kegiatan/Kegiatan'
import Materi from '../screen/Menu/Menu'
import SplashScreen from '../screen/SplashScreen/SplashScreen'
import Game from '../screen/Menu/Game'



const StackPublic = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.roudedBottom}>
            <Icon name="home" color={tintColor} size={27} style={styles.IconBottom}/>
          </View>
        ),
        title: "Menu"
      }
    },
    Kegiatan: {
      screen: Kegiatan,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.roudedBottom}>
            <Icon name="list" color={tintColor} size={27} style={styles.IconBottom} />
          </View>
        ),
        title: "Kegiatan"
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
        <View style={styles.roudedBottom}>          
          <Icon name="wechat" color={tintColor} size={27} style={styles.IconBottom}/>
        </View>
        ),
        title: "Diskusi"
      }
    },
    Profil: {
      screen: Profil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.roudedBottom}>
            <Icon name="user" color={tintColor} size={27} style={styles.IconBottom}/>
          </View>
        )
      }
    },

  }, {
  initialRouteName: "Home",
  headerMode: 'none',
  tabBarOptions: {
    activeTintColor: "#FFC34D",
    inactiveTintColor: 'white',
    style: { backgroundColor: '#201310' }
  },
}
)

const PublicStack = createStackNavigator(
  {
    StackPublic:StackPublic,
    Game:Game,
    Materi:Materi
  },{
    headerMode:'none'
  }
 
 )

export default PublicStack

// #FFC34D #91490c

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      flex: 1,
  },
  IconBottom:{
    alignSelf: 'center',
    marginTop: 15 
  },
  roudedBottom: {
    width:70,
    height:90,
    borderRadius:100,
    backgroundColor: '#201310',
    alignItems: 'center',
    marginTop: 20 
  },
});