import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Message from './src/Message';
import { useState } from 'react';





export default function Messagerie() {
  /*const [messages,setMessages] = useState([
    {id:1,sender:true,text:"hello"},
    {id:2,sender:true,text:"ça va ?"},
  {id:3,sender:false,text:"Non",reaction:[{'😃':1},{'❤️':2}]},
    {id:4,sender:false,text:"Mon poisson rouge est mort",reaction:{}},
    {id:5,sender:true,text:"Je sais, c'est moi qui l'ai tué 😃",reaction:{}},
  ])
  const [selected,setSelected] = useState();
  const handleTextSend = (e)=>{
    setMessages([...messages,{sender:true,text:e.nativeEvent.text}]);
    this.textInput.clear()
  }
  const handleTouchMessage =(messages)=>{
    setSelected(messages)
    if(messages.reaction){
      messages.reaction.push('❤️')
    }
    else{
      messages.reaction=['❤️']
    }
  }*/
  return (
    
    <View style={styles.container}>
{/*       
      <ScrollView vertical style={styles.messageContainer}
        contentContainerStyle={{flexDirection:"column"}}
      >
        {messages.map((message,index)=>
           <>
            <Message onTouchStart={handleTouchMessage} key={index} message={message}></Message>
            {/* {message===selected &&
              <Text>selected</Text>
            } }
            </> 
          )}
        </ScrollView>
        <TextInput ref={input => { this.textInput = input }} onSubmitEditing={handleTextSend} placeholder='Ton message ici' />
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  messageContainer:{
    padding:'7%',
    width:"100%",
    height:'auto'
  }
});
