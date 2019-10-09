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
                    <View style = {styles.backgroundContainer}>
                        <Image
                        style={{ width: '100%', height: '110%', marginTop: 10, 
                        borderBottomRightRadius: 40, borderBottomLeftRadius: 40, }}
                        resizeMode = 'cover'
                        source={require('../../asset/menu.png')}
                         />
                    </View>
                    <View>
                        <Image
                            style={{height:"60%", width:'100%',marginTop:430, bottom:0,top:0}}
                            source={require('../../asset/awan1.png')} />
                    </View>
                </View>
          
                <View style={styles.PilihMenu}>
                    <Text style={styles.TeksPilihMenu}>Pilih Menu</Text>
                </View>
                    <View style={styles.ViewMenu}>
                        <TouchableOpacity style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/KI.png')} />
                            <Text style={styles.TeksMenu}>KI/KD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/i.png')} />
                            <Text style={styles.TeksMenu}>Indikator</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Bantuan')}
                        style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/bantu.png')} />
                            <Text style={styles.TeksMenu}>Bantuan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/grap.jpg')} />
                            <Text style={styles.TeksMenu}>Angket</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/about.png')} />
                            <Text style={styles.TeksMenu}>Tentang</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TouchMenu}>
                            <Image
                                resizeMode='contain'
                                style={styles.MenuImage}
                                source={require('../../asset/Games.gif')} />
                            <Text style={styles.TeksMenu}>Games</Text>
                        </TouchableOpacity>   
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
    TeksMenu:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15
    },
    ViewMenu:{
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        flexWrap:"wrap",
        marginTop:5,
        marginLeft:10,
        marginRight:5,
    },
    TouchMenu:{
        overflow: 'hidden',
        width: "32%", 
        height: "20%",
        position: 'relative'
    },
    MenuImage:{
        flex:1,
        width: "100%",
        height: "100%",
        marginTop: 20,
        marginBottom:10,
        alignSelf:"center",
        justifyContent:'space-around',
        marginLeft:5,
        marginRight:5
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    PilihMenu:{
        width: '90%',
        height: '6%',
        backgroundColor:'#042B3E',
        borderLeftColor:'#042B3E',
        borderColor:"black",
        alignContent: 'center', 
        alignItems: 'center', 
        alignSelf: 'center',
        marginTop: 25,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    TeksPilihMenu:{
        fontWeight: "bold", 
        fontSize: 20, 
        color:'white',
        marginVertical: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
    Shape1: {
        width: '100%',
        height: '40%',
        backgroundColor: "#042B3E",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    parent: {
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