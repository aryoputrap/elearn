import React, { Component } from 'react';
import { ScrollView, Dimensions,View, Text} from 'react-native';
import { WebView } from 'react-native-webview'


export default class Demo extends Component {
    render() {
        return (
    <View style = {{ flex: 1, backgroundColor:'black', marginBottom:10, marginTop:10}
          }>
            <Text style={{color:'black'}}> Satu</Text>
            <WebView
                style={{ flex: 2 }}
                source={{uri:"http://physics.bu.edu/~duffy/HTML5/impulse.html"}}
            />
        </View >
        );
    }
}