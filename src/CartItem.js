import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CartItem = (props) => {
    const item = props.item;
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{height:"100%",aspectRatio:0.9}} onPress={props.setTargetItem}>
          <Image style={styles.image} source={{uri:item.image}}/>
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'flex-end'}}>
            <Text>{item.price}€</Text>
            <BouncyCheckbox  isChecked={item.selected} onPress={()=>props.setSelected(!item.selected)} 
                size={15}
                fillColor="red"
                unfillColor="#FFFFFF"
            />
          </View>
        </View>

    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
        width:"100%",
        height:100,

        
    },
    image:{
        height:"100%",
        width:"100%",
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    content:{
      flexGrow:1,
      flexDirection:"row",
      justifyContent:'space-between',
      padding:15
    },
    title:{
      fontSize:24
    },
    description:{
      marginTop:'auto',
      marginBottom:'auto',
      fontSize :12
    }
})