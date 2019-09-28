import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import Video from 'react-native-video';

export default class Home extends Component {
    render() {
        return (
         
            <View style={{flex:1,width:'100%', height:'100%'}}>
                <Video
                    // source={require('../../asset/fisika.mp4')}
                    // source={{uri:'https://r5---sn-4pgnuhxqp5-jb3r.googlevideo.com/videoplayback?expire=1568720881&ei=kXOAXYquD7W68QOShKCwAQ&ip=139.194.122.170&id=o-ANVvCxGx3MNjMyrCsftTBX-RJQvdVJLl6AMhntay40Nu&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-4pgnuhxqp5-jb3r%2Csn-i3belney&ms=au%2Conr&mv=m&mvi=4&pl=21&initcwndbps=531250&mime=video%2Fmp4&gir=yes&clen=24458203&ratebypass=yes&dur=540.328&lmt=1540187450357054&mt=1568699241&fvip=5&fexp=23842630&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgPwLlp8Fy8qAFVe0vp_PyQv1IAvdNXQFvGQDIGHAuwmACIATTy0TzXUqaVlKJRJ-MQKsl6dp1QbkT_I0sVTEe1dCA&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIhALkrR1Uksr_aSSAYvboQjs-31Hzy8ofQgfxjajmTokG7AiBHih8Mw0CIOlIH3fDFv8Tn2FiYOe97r8OST9TOEfWXjA%3D%3D&title=Perjuangan%20BJ%20Habibie%20Selama%20di%20Jerman%2C%20Mandiri%20dan%20Bertahan%20dengan%20Biaya%20Sendiri'}}
                    rate={1.0}
                    volume={1.0}
                    muted={false}
                    resizeMode="cover"
                    repeat
                    style={styles.backgroundVideo} />
            </View>
        )
    }
}


var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width:"100%",
    },
});