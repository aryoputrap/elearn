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


export default class App extends Component {
    render() {
        return (
            
            <View style={{flex:2}}>
                <StatusBar translucent backgroundColor="transparent" />
                <ImageBackground
                    resizeMode='stretch'
                    style={{ width: '100%', height: '100%',resizeMode: 'cover', alignSelf: 'stretch', }}
                    source={require('../../asset/Mock.png')}>
                    <View style={{flex:2}}>
                    <Text style={styles.Textlogin}>o--- LOGIN ---o</Text>
                    <TextInput
                        style={styles.Textinput}
                        placeholder='Username'
                        placeholderTextColor='black'
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                    <TextInput
                        style={styles.Textinput2}
                        placeholder='Password'
                        placeholderTextColor='black'
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                    <TouchableOpacity
                        style={styles.Buttonx}
                        onPress={() => this.props.navigation.navigate('Home')}
                        
                    >
                        <Text style={styles.Submit}>SUBMIT</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    Textlogin:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:"#91490C",
        marginTop: 430,
    },
    Textinput: {
        height: "6%",
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        width: '60%',
        borderColor: 'white',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1
    },
    Textinput2: {
        height: "6%",
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        width: '60%',
        borderColor: 'white',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1
    },
    Submit: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 7,
        fontWeight: 'bold',
        fontSize: 25
    },
    Buttonx: {
        width: "60%",
        height: "6%",
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 500,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#201310",
    },
});
