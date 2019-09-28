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
            <View style={{backgroundColor:'#FFC34D', flex:1}}>
                <StatusBar translucent backgroundColor="transparent" />
                <View
                    style={{
                        width: '100%', height: '20%', backgroundColor: "black",
                        borderBottomRightRadius:40, borderBottomLeftRadius:40
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 35 }} >
                        <Icon name="user-circle-o" size={45} color="white" />
                        <View style={{flexDirection:"column"}}>
                        <Text style={styles.TextWellcome}>Aryo Putra Purwanto</Text>
                        <Text style={{fontSize:12,color:"white",marginLeft:10}}>SMAN 1 Cianjur</Text>
                        </View>
                    </View>
                    <Image
                        style={{width: '100%', height: '40%',marginTop:10,borderBottomRightRadius:40, borderBottomLeftRadius:40}}
                        source={require('../../asset/awan.png')}
                    />
                </View>

                <View style={{
                flexDirection:'row',
                backgroundColor:'#FFF', flex:1, 
                marginTop:20,marginLeft:10, marginRight:10,
                borderRadius:40}}>

                   <View style={{flexDirection:"column"}}>
                        <Text style={{color:'#91490c', fontWeight:"bold", marginLeft:30, marginTop:15}}>
                            Nama Sekolah 
                        </Text>
                        <Text style={{color:'#91490c', fontWeight:"bold", marginLeft:30, marginTop:15}}>
                            Nama  
                        </Text>
                        <Text style={{color:'#91490c', fontWeight:"bold", marginLeft:30, marginTop:15}}>
                            TTL 
                        </Text>
                        <Text style={{color:'#91490c', fontWeight:"bold", marginLeft:30, marginTop:15}}>
                            Email  
                        </Text>
                        <Text style={{color:'#91490c', fontWeight:"bold", marginLeft:30, marginTop:15}}>
                            Kelas  
                        </Text>
                    </View>
                    <View style={{flexDirection:"column", marginLeft:5}}>
                        <Text style={{color:'#91490c',marginTop:15}}>:</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>:</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>:</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>:</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>:</Text>

                    </View>
                    <View style={{flexDirection:"column", marginLeft:5}}>
                        <Text style={{color:'#91490c',marginTop:15}}>SMAN 1 Cianjur</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>Aryo Putra Purwanto</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>Cianjur, 29 Desember 2019</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>aryoputrap@tampan.com</Text>
                        <Text style={{color:'#91490c',marginTop:15}}>Kelas Alam Terbuka</Text>
                    </View>
                </View>


                 <Image
                        style={{
                            width: '100%', height: '47%',
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