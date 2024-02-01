import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Message =(props)=> {
    const message = props.message;
    return (
        <View style={[styles.messageBody,message.sender?styles.sender:styles.receiver]} >
            <View onTouchStart={()=>props.onTouchStart(message)} style={[styles.message, props.message.sender ? styles.messageSender : styles.messageReceiver]}>
                <Text>{message.text}</Text>

            </View>
            {message.reaction &&
                <Text style={styles.reaction}>
                    {message.reaction}
                    </Text>
                }
        </View>
        );
}
const styles = StyleSheet.create({
    messageBody:{
        alignItems:'flex-end',
        margin:"1%"
    },
    reaction:{
        marginTop:-1,
        paddingLeft :"3.5%"
    },
    sender:{
        alignSelf:'flex-start'
    },

    receiver:{
        alignSelf:'flex-end'
    },
    message:{
      padding:"3.5%",
      
      borderRadius:17
    },
    messageSender:{
      backgroundColor:'#66ff99',
      
    },
    messageReceiver:{
      backgroundColor:'#99ccff',
      
      
    }
  });
export default Message