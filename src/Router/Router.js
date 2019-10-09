import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";


//Authen
import Login from '../screen/Auth/Login'
import Registrasi from '../screen/Auth/Register'
import Auth from '../screen/Auth/Auth'
import Home from '../screen/Menu/Home'

// import Profil from '../screen/Profil/Profil'
import Kegiatan from '../screen/Kegiatan/Kegiatan'
import Materi from '../screen/Kegiatan/Materi/Materi1'
import Chat from '../screen/Chat/Chat'
import SplashScreen from '../screen/SplashScreen/SplashScreen'
//Menu
import Game from '../screen/Menu/Games/Game'

//KEGIATAN
import Pretest from '../screen/Kegiatan/PreTest/Pretest'

//MENU BANTUAN
import Bantuan from '../screen/Menu/Bantuan/Bantuan'
import { auth } from 'react-native-firebase';



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
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
        <View style={styles.roudedBottom}>          
          <Icon name="wechat" color={tintColor} size={27} style={styles.IconBottom}/>
        </View>
        ),
        title: "Diskusi"
      }
    },
    Auth: {
      screen: Auth,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={styles.roudedBottom}>
            <Icon name="user" color={tintColor} size={27} style={styles.IconBottom}/>
          </View>
        )
      }
    },

  }, {
  initialRouteName: "Auth",
  headerMode: 'none',
  tabBarOptions: { 
    activeTintColor: "#FFC90E",
    inactiveTintColor: 'white',
    style: { backgroundColor: '#042B3E' }
  },
}
)

const PublicStack = createStackNavigator(
  {
    StackPublic:StackPublic,
    Game:Game,
    Materi:Materi,
    Bantuan:Bantuan,
    Pretest:Pretest,
    Login:Login,
    Registrasi:Registrasi
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
    backgroundColor: '#042B3E',
    alignItems: 'center',
    marginTop: 20 
  },
});