import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {StatusBar} from "expo-status-bar";

const NavBar = (props) => {
  return (
    <View style={styles.NavBar}>
      {props.targetItem && 
      <TouchableOpacity style={{marginRight:'auto'}} onPress={()=>props.setTargetItem(null)}>
        <Image style={styles.arrow}  source={require("./images/arrow.png")}/>
      </TouchableOpacity>
      }
      <Text onPress={()=>props.setView("home")} style={styles.title}>Delivecrous</Text>
      <TouchableOpacity onPress={()=>props.setView("cart")}>
        <Image style={styles.cart} source={require("./images/cart.png")}/>
        {props.cartSize>0 &&
          <Text style={styles.number}>{props.cartSize|'rien'}</Text>
        }
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  NavBar:{
    width:'100%',
    backgroundColor:"#FDF7EF",
    padding:'3%',
    paddingTop:20,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    position:"absolute",

    textAlign:'center',

    left: 0, 
    right: 0, 

  },
  cart:{
    marginLeft:'auto',
    height : 30,
    width:30,
  },
  arrow:{
    
    height : 30,
    width:30,
  },
  number:{
    position:"absolute",
    color:"white",
    backgroundColor:"#E33620",
    borderRadius:50,
    aspectRatio:1,
    minWidth:"1rem",
    textAlign:"center",
    fontSize:11,
    alignSelf:"flex-end",
    marginRight:-5,
    marginTop:-7,
    width:15
  }
})