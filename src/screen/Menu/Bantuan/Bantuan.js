import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const slides = [
  {
    id: 1,
    title: 'Title 1',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../asset/Bantuan/BantuKIKD.png'),
    backgroundColor: '#59b2ab',
  },
  {
    id: 2,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../asset/Bantuan/BantuGame.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class Bantuan extends React.Component {
  state = {
    showRealApp: false
  }

  render () {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
      {slides.map((slides, id) => (
        <Image
          key={id}
          style={[styles.ImageStyle,{width: width }]}
          source={slides.image}
        />
      ))}
        {/* <Image
        style={{height:"100%",width:"100%",flex:1}} 
        source={item.image} /> */}
    
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <Bantuan />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
    }
  }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    ImageStyle:{
      height:"10%",
      width:"10%"
    },
    ImageFooter:{
        marginTop:500,
        position:'absolute',
        height:"55%",
        width:'100%',
        alignSelf: 'stretch',
    },
});