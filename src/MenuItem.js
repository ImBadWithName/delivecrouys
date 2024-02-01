
import React from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';


const MenuItem = (props) => {
    const item =props.item;
  return (
    <View style={styles.containerItem}>
        <TouchableOpacity onPress={props.setTargetItem}>
            <View style={{width:"100%",aspectRatio:1}}>
                <Image source={{uri:item.image}} style={{width:"100%",height:"100%"}}/>
            </View>
        </TouchableOpacity>
        <View style={styles.detail} >
            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                <Text style={{fontSize:15 }}>{item.name}</Text>
                <Text>{item.price} €</Text>
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'flex-end'}}>
            <Text style={{fontSize:12 }}>{item.description}</Text>
            <BouncyCheckbox isChecked={item.selected} onPress={()=>props.setSelected(!item.selected)}
                size={15}
                fillColor="red"
                unfillColor="#FFFFFF"
            />
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    containerItem: {
        flexGrow:1,
        flexBasis:"40%"
    },
    detail:{
        padding:12
    }
  });
export default MenuItem