import React, { Component } from 'react';
import { ScrollView, Dimensions,View, Text} from 'react-native';
import { WebView } from 'react-native-webview'


export default class Demo extends Component {
    render() {
        return (
            <WebView
                style={{ flex: 1 }}
                source={{uri:"http://physics.bu.edu/~duffy/HTML5/impulse.html"}}
            />
        );
    }
}