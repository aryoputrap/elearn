import React, { Component } from "react";
import {
    Button, Keyboard, KeyboardAvoidingView,
    Platform, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity,
    Text, TextInput, TouchableWithoutFeedback, View, ImageBackground
    , Dimensions

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'



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
                    source={require('../../asset/scc.png')}>
                    <SafeAreaView style={styles.container}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.inner}>
                                <View style={{ 
                                    position:'absolute',
                                    alignContent:"center",
                                    // left:200,
                                    width:width*0.5, 
                                    height:50,
                                    backgroundColor:"#FFC90E",
                                    borderTopLeftRadius:10,
                                    borderTopRightRadius:10
                                    }}>

                                </View>
                                <Text style={styles.HeaderLogin}>
                                    REGISTER
                                </Text>
                                <View style={styles.ViewTextInput}>
                                    <Icon2
                                        style={styles.InputIcon}
                                        name={'user-graduate'} 
                                        size={35}
                                        color={'#042B3E'}
                                    />
                                    
                                    <TextInput
                                        placeholder={"Username"}
                                        placeholderTextColor={'#042B3E'}
                                        style={styles.input}
                                    />
                                </View>
                                <View style={styles.ViewTextInput}>
                                    <Icon
                                        style={styles.InputIcon}
                                        name={'lock'} 
                                        size={35}
                                        color={'#042B3E'}
                                    />
                                    <TextInput
                                        secureTextEntry={this.state.showPass}
                                        placeholder={"Password"}
                                        placeholderTextColor={'#042B3E'}
                                        style={styles.input}
                                    />
                                    <TouchableOpacity
                                        onPress={this.showPass.bind(this)}
                                        style={styles.BtnEye}>
                                        <Icon
                                        name={this.state.press == false ? "eye" : "eye-slash"} 
                                        size={30} 
                                        color={this.state.press == false?'#042B3E': "red"} />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity
                                    style={styles.Buttonx}
                                    onPress={() => this.props.navigation.navigate('Home')}
                                >
                                    <Text style={styles.Submit}>SUBMIT</Text>
                                </TouchableOpacity>
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
    BtnEye: {
        flex:1,
        position:"absolute",
        left:300
    },
    Submit: {
        color: '#042B3E',
        textAlign: 'center',
        fontSize: 35,
        fontWeight:'bold',
    },
    Buttonx: {
        elevation: 20,
        textAlign: 'center',
        alignContent: "center",
        width: width*0.8,
        height: height*0.06,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 100,
        marginHorizontal: 280,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#FFC90E",
    },
    inner: {
        position: 'relative',
        alignItems: 'center',
        marginTop: 300,
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