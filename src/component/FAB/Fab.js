import React, { Component } from 'react';
import { Container, Header, View, Button, Fab } from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";


export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{position:'absolute' }}
            style={{ backgroundColor: "#042B3E" }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="question-circle" style={{fontSize:45}}/>
                <Button  
                   
                    style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="whatsapp" style={{fontSize:28, color:'white'}}/>
                </Button>
                <Button 
                    onPress={this.props.aksiChat} 
                    style={{ backgroundColor: '#042B3E' }}>
                    <Icon name="comments-o" style={{fontSize:28, color:'white'}}/>
                </Button>
                <Button 
                    onPress={this.props.aksiMenu}
                    style={{ backgroundColor: '#DD5144'}} >
                    <Icon name="home" style={{fontSize:28, color:'white'}}/>
                </Button>
          </Fab>
    );
  }
}