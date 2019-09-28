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

//import screen
import Materi from '../Menu/Menu'

export default class Home extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFC34D', flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" />
                <View
                    style={{
                        width: '100%', height: '18%', backgroundColor: "black",
                        borderBottomRightRadius: 40, borderBottomLeftRadius: 40
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 35 }} >
                        <Icon name="user-circle-o" size={45} color="white" />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.TextWellcome}>Aryo Putra Purwanto</Text>
                            <Text style={{ fontSize: 12, color: "white", marginLeft: 10 }}>SMAN 1 Cianjur</Text>
                        </View>
                    </View>
                </View>

                <View  style={{
                        width: '50%', height: '7%', backgroundColor: "white", borderRadius:50,
                        alignItems:"center", alignContent:'center', alignSelf:'center', marginTop:20,
                        borderColor:'#201310'
                    }}>
                    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15, marginVertical:15}}> PRE TEST</Text>
                </View>
                
                    <Image
                        style={{
                            width: '100%', height: '45%',
                            marginTop: 250,
                            resizeMode: 'cover', alignSelf: 'stretch',
                        }}
                        source={require('../../asset/awan2.png')}
                    />
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    TextWellcome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
        color: 'white'
    },
});