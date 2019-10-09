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
    Button,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.Shape1}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 50 }} >
                        <Icon name="user-circle-o" size={45} color="white" />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.TextWellcome}>Aryo Putra Purwanto</Text>
                            <Text style={{ fontSize: 12, color: "white", marginLeft: 10 }}>SMAN 1 Cianjur</Text>
                        </View>
                    </View>
                   
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    Shape1: {
        width: '100%',
        height: '18%',
        backgroundColor: "#042B3E",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    parent: {
        width:"100%",
        height:'100%',
        position:"absolute",
        backgroundColor: 'white',
        flex: 1
    },
    TextWellcome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
        color: 'white'
    },
});