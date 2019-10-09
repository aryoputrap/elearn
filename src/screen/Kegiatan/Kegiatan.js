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
            <View style={{ backgroundColor: "#FFC90E", flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={styles.ShapeKegiatan} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 35 }} >
                        <Icon name="user-circle-o" size={45} color="white" />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.TextWellcome}>Aryo Putra Purwanto</Text>
                            <Text style={{ fontSize: 12, color: "white", marginLeft: 10 }}>SMAN 1 Cianjur</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:130,position:"absolute", height:"100%", width:"100%", flexDirection:'column',padding:10}}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Pretest')}
                    style={styles.TahapEvaluasi}>
                        <Text style={styles.TeksTahap}>PRE-TEST</Text>
                    </TouchableOpacity>
                  
                        <View style={{ height:"100%", width:"100%",flexDirection:"row",flexWrap:'wrap',marginHorizontal:18}}>
                            <TouchableOpacity style={styles.Tahap}>
                                <Text style={styles.TeksTahap}>TAHAP 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Tahap}>
                                <Text style={styles.TeksTahap}>TAHAP 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Tahap}>
                                <Text style={styles.TeksTahap}>TAHAP 3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Tahap}>
                                <Text style={styles.TeksTahap}>TAHAP 4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Tahap}>
                                <Text style={styles.TeksTahap}>TAHAP 5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TahapEvaluasi}>
                                <Text style={styles.TeksTahap}>EVALUASI</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <Image
                    style={styles.ImageFooter}
                    source={require('../../asset/awan1.png')}
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
    ImageFooter:{
        marginTop:500,
        position:'absolute',
        height:"55%",
        width:'100%',
        alignSelf: 'stretch',
    },
    TeksTahap:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        marginVertical:15
    },
    Tahap:{
        justifyContent:'space-between',
        width: '45%',
        height: '7%',
        opacity:1,
        marginLeft:7,
        backgroundColor: "white",
        borderRadius:50,
        alignItems:"center",
        alignContent:'center',
        alignSelf:'center',
        marginTop:20,
    },
    TahapEvaluasi:{
        justifyContent:'space-between',
        width: '70%',
        height: '7%',
        opacity:1,
        marginHorizontal:50,
        backgroundColor: "white",
        borderColor:"black",
        borderRadius:50,
        alignItems:"center",
        alignContent:'center',
        alignSelf:'center',
        marginTop:15,
        borderColor:'#201310'
    },
    ShapeKegiatan:{
        width: '100%',
        height: '18%',
        backgroundColor:"#042B3E",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    TextWellcome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        textAlign: 'center',
        color: 'white'
    },
});