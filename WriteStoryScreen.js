import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import db from '../config'
import firebase from 'firebase'
//import {Header} from 'react-native-elements';


export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            text1:''
        } 
    }
    
    submitStory =()=>{
      db.collection('User Stories').add({
        title: this.state.title,
        author: this.state.author,
        storyText: this.state.storyText,
      });
      ToastAndroid.show('Story Submitted', ToastAndroid.SHORT);
      this.setState({
        title: '',
        author: '',
        storyText: '',
      });
      alert(
        "Your story has been submitted successfully. If you want to read your story or any other stories written by different users of the app, then you can just search for the title or author name in the 'Read a story' section of this app."
      );
    };
    render(){
        return(
          <KeyboardAvoidingView>
            <View>
        
                <Text style = {styles.text}>Title of the Book:- </Text>
               <TextInput
               style={styles.inputBox}
               onChangeText={text => {
                 this.setState({ text: text });
               }}
               value={this.state.text}
               
             />
             <Text style = {styles.text2}>Author of the Book:-
             </Text>
             <TextInput 
                onChangeText={text => {
                 this.setState({ text1:text });
               }}
               style={styles.inputBox2}
               value={this.state.text1}/>

                        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity> 
        </View>
              </KeyboardAvoidingView>
               
            
        )
    }
}

const styles = StyleSheet.create({
 inputBox: {
             marginTop: 50,
             width: '80%',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
           inputBox2: {
            marginTop: 20,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
            
          },
          text:{
            color:'purple',
            fontSize:20,
          },
          text2:{
            color:'purple',
            fontSize:20,
          },
          submit:{
            justifyContent:'center',
            borderWidth:4,
            backgroundColor:'orange',
            marginTop:20,
            marginLeft:150,
            width:75,
            height:45,
          }
    
})





////<Header
//backgroundColor={'teal'}
//centerComponent={{
//text: 'My Story Hub',
//style: { color: '#fff', fontSize: 20 },
//}}
///>