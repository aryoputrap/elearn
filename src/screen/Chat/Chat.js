import React from 'react';
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
import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseSvc from '../../Router/FirebaseSvc'


export default class Chat extends React.Component {
     state = {
            messages: [],
        };
    
    componentWillMount() {
        this.setState({
            messages: [
            {
                _id: 1,
                text: "I LOVE YOU",
                createdAt: new Date(),
                user: {
                _id: 2,
                name: "React Native",
                avatar: "https://placeimg.com/240/240/any",
                },
            },
            ],
        });
    }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }));
      }
  render() {
    return (
    <View style={{flex:1,marginBottom:20}}>
        <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
            _id: 1,
            
            }}
            />
    </View>    
    )
  }
}