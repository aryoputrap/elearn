import React, { Component } from "react";
import {
    Button, Keyboard, KeyboardAvoidingView,
    Platform, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity,
    Text, TextInput, TouchableWithoutFeedback, View, ImageBackground
    , Dimensions,Image

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { Row } from "native-base";



const { height, width } = Dimensions.get('window')
class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (

            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    style={styles.container}
                    source={require('../../asset/Login.png')}>
                    <Image style={{width:"20%",height:"10%"}} source={require('../../asset/Planet1.png')}/>
                    <Image source={require('../../asset/Rocket1.png')}
                    style={{position:'absolute',top:20,left:400
                    ,width:"100%",height:height*0.9}} />
                
                    <SafeAreaView style={styles.container}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.inner}>

                                <TouchableOpacity
                                    style={styles.Buttonx}
                                    onPress={() => this.props.navigation.navigate('Login')}
                                >
                                    <Text style={styles.Submit}>LOG IN</Text>
                                </TouchableOpacity>
                                <View style={styles.ORView}>
                                    <Text style={styles.OR}>OR</Text>
                                </View>
                                
                                <TouchableOpacity
                                    style={styles.Buttonx}
                                    onPress={() => this.props.navigation.navigate('Registrasi')}
                                >
                                    <Text style={styles.Submit}>SIGN UP</Text>
                                </TouchableOpacity>
                                    <View style={styles.FaceGoogle}>
                                        <TouchableOpacity
                                            style={styles.ButtonFacebook}
                                        > 
                                        <View style={{flexDirection:"row",top:8}}>
                                            <Icon
                                                style={{right:5}}
                                                name={"facebook-square"} 
                                                size={30} 
                                                color={"white"} />
                                            <Text style={styles.SubmitWhite}>Facebook</Text>
                                        </View>
                                        </TouchableOpacity>   
                                        <TouchableOpacity
                                            style={styles.ButtonGoogle}
                                        >
                                        <View style={{flexDirection:"row",top:8}}>
                                            <Icon
                                                style={{right:10}}
                                                name={"google-plus"} 
                                                size={28} 
                                                color={"white"} />
                                            <Text style={styles.SubmitWhite}>Google</Text>
                                        </View>    
                                        </TouchableOpacity>
                                    </View>
                            </View>
                            
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

//biru:#042B3E
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    FaceGoogle:{
        flexDirection:"row",
        right:60,
        height:height*1,
        width:width*0.55,
        flex:1,
        bottom:120, 
        alignContent:"center"},
    Submit: {
        color: '#042B3E',
        textAlign: 'center',
        fontSize: 35,
        fontWeight:'bold',
    },
    SubmitWhite: {
        color: '#ffff',
        textAlign: 'center',
        fontSize: 23,
        fontWeight:'bold',
    },
    ORView:{
        width:"10%",
        height:"8%",
        borderRadius:100,
        backgroundColor:"#FFC90E",
        alignSelf:"center",
        top:8
    },
    OR: {
        top:5,
        color:'#042B3E',
        textAlign: 'center',
        fontSize: 20,
        fontWeight:'bold',
    },
    Buttonx: {
        elevation: 20,
        textAlign: 'center',
        alignContent: "center",
        width: width*0.8,
        height: height*0.06,
        borderRadius: 10,
        marginTop: 20,
        marginBottom:5,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#FFC90E",
        
    },
    ButtonFacebook: {
        elevation: 20,
        width: width*0.38,
        height: height*0.06,
        left:10,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "blue",
    },
    ButtonGoogle: {
        elevation: 20,
        width: width*0.38,
        height: height*0.06,
        borderRadius: 10,
        marginLeft:20,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "red",
        
    },
    inner: {
        flexDirection:"column",
        position: 'relative',
        alignItems: 'center',
        marginTop: 30,
        alignContent: "center",
        flex: 3,
    },
    HeaderLogin: {
        marginBottom: 20,
        color: "#042B3E",
        fontWeight:"bold",
        textAlign:"center",
        fontSize: 40,
    },
    InputIconPass: {
        top: 8,
        left: 45,
    },
    ViewTextInput: {
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 10,
        marginTop:10,
        height: height * 0.07,
        width: width * 0.8,
    },
    InputIcon: {
        position: "relative",
        justifyContent: "flex-start",
        right:10,
        backgroundColor: '#fff',
    },
    input: {
        fontSize: 21,
        textAlign: 'center',
        width: width * 0.55,
        backgroundColor: 'white',
        color: '#042B3E',
        borderColor: "black",
        left:1,
        right:11
    },
    btnContainer: {
        backgroundColor: "white",
        borderRadius: 100,
        marginTop: 8,
    },
});

export default Welcome;