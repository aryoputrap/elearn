import React, { Component } from 'react';
import { ScrollView, Dimensions,View, Text} from 'react-native';
import { WebView } from 'react-native-webview'


export default class Demo extends Component {
    render() {
        return (
    <View style = {{ flex: 1, backgroundColor:'black', marginBottom:10}
          }>
            <WebView
                style={{ flex: 1, width:'100%', height:'100%'}}
                source={{uri:"https://www.mikanse.com/CannonFire/cannon-fire.html"}}
            />
        </View >
        );
    }
}