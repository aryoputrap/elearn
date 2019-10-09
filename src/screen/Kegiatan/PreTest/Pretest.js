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
import { WebView } from 'react-native-webview'
//import komponen
import HeaderKomponen from '../../../component/Header/Header'
import FABKomponen from '../../../component/FAB/Fab'
import Materi from '../../Kegiatan/Materi/Materi1'

export default class Pretest extends Component {
    // const [value, onChangeText] = React.useState('Useless Placeholder');
    //aksiFAB
    aksiChat = () => {this.props.navigation.navigate('Login')}
    aksiMenu = () => {this.props.navigation.navigate('Home')}
    render() {
        return (
        <View style={styles.container}>
            <HeaderKomponen/>
            <View style={{height:"120%",width:"150%", marginTop:150, alignSelf:"center"}}>
                <WebView
                    source={{uri:"http://physics.bu.edu/~duffy/HTML5/impulse.html"}}
                />
            </View>
            <View style={{position:'absolute',alignContent:"center",marginTop:502,marginHorizontal:10,
            height:"50%", width:"95%", backgroundColor:"white"}}>
                <Text style={{color:"red", textAlign:'center',fontSize:15}}>Berapa jarak yang akan ditempuh dengan p 80?</Text>
                    <TextInput style={{
                        borderRadius:10,marginHorizontal:10,
                        height:"50%", width:"95%", backgroundColor:"green"}}>
                    </TextInput>
            </View>
            <FABKomponen 
            aksiChat={this.aksiChat}
            aksiMenu={this.aksiMenu}
            />
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
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
});