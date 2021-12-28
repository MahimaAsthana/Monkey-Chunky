import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSound from './components/PhonicSound';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSound: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        
          <Image
          style={styles.imageIcon} source={require('./assets/monkey.png')}
        />
        
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]?(
            this.setState({chunks: db[word].chunks}),
             this.setState({phonicSound: db[word].phones})):
             alert('The word does not exist in the database')
            }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
       <ScrollView>
       {
         this.state.chunks.map((item,index)=>{
           return( 
             <View>
         
             <PhonicSound wordChunk = {this.state.chunks[index]}
             soundChunk = {this.state.phonicSound[index]}buttonIndex={index} />
             </View>
          ) })
       }
       </ScrollView>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    borderRadius:20
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  
  
  imageIcon: {
    marginTop:20,
    width: 180,
    height: 150,
    alignSelf:'center'
  },
 
});
