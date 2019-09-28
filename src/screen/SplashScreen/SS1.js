import React from "react";
import { TextInput, StatusBar, View, Text, Dimensions, ActivityIndicator, StyleSheet, Image, Button, TouchableOpacity } from "react-native";



const { height, width } = Dimensions.get('window')

class SplashScreen2 extends React.Component {
    constructor() {
      super();
    }
  
    _splash = () => {
      this.props.navigation.navigate('Router')
    }
  
    componentDidMount() {
      setTimeout(this._splash, 2500)
    }
  
    render() {
      return (
        <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
          <View style={{height:'100%', width:'100%'}}>
            <Image
              style={{height:'100%', width:'100%'}}
              source={require('../../asset/Splash.png')}
            />
          </View>
        </View>
      )
    }
  }
  
  export default SplashScreen2

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex:1,
    },
});