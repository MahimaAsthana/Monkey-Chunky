import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
  
} from 'react-native';
import {Audio} from 'expo-av';

export default class PhonicSound extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pressedButtonIndex: '',
      
    }
  }
playSound = async soundChunk => {
  var soundLink = "https://s3-whitehatjrcontent.whjr.online/phones/" + soundChunk + ".mp3";
  await Audio.Sound.createAsync(
    {uri:soundLink},
    {shouldPlay:true}
  )
}

  render(){
    return(
 <TouchableOpacity style={
   this.props.buttonIndex === this.state.pressedButtonIndex
   ?[styles.chunkButton,{backgroundColor:'blue'}]
   :[styles.chunkButton,{backgroundColor:'#EC7314'}]
 }
  onPress={()=>{
   this.setState({pressedButtonIndex:this.props.buttonIndex})
   this.playSound(this.props.soundChunk);
 }}>
  <Text style = {
    this.props.buttonIndex === this.state.pressedButtonIndex
    ?[styles.displayText,{color:'white'}]
    :[styles.displayText,{color:'black'}]
  }>{this.props.wordChunk}</Text>
 </TouchableOpacity>
    )
    
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  chunkButton:{
    width: '60%',
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#EC7314',
    borderRadius: 10
  }
});