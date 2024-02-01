import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemView = (props) => {
    const item = props.item;
  return (
    <View>
        <View style={styles.image}>
            <Image source={require("./images/sushi.jpg")} style={{width:"100%",height:"100%"}}/>
        </View>

        <View style={styles.body}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  )
}

export default ItemView

const styles = StyleSheet.create({
    image:{
        width:"100%",
        aspectRatio:1.4
    },
    title:{
        fontSize:30
    },
    body:{
        padding:20
    },
    description:{
        marginLeft:5
    }
})