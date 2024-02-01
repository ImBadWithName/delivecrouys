import { StyleSheet, Text, TextInput, View,ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import CartItem from './CartItem'


const Cart = (props) => {
  const [city,setCity]=useState()
  const [street,setStreet]=useState()
  const [postal,setPostal]=useState()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panier</Text>
      <View style={{maxHeight:200}}>
      <ScrollView contentContainerStyle={styles.itemsList} vertical>
        {props.items.map(item=>
        <CartItem setTargetItem={()=>props.setTargetItem(item)} setSelected={(value)=>props.setSelectedItem(item.id,value)} key={item.id} item ={item}/>
        )}

      </ScrollView>
      </View>
      <View style={{alignSelf:'flex-end'}}>
            <Text>Total : {props.items.length?  props.items.map(item=>item.price).reduce((accumulator,item)=>accumulator+=item):0} €</Text>
      </View>
        <Text style={styles.catchPhrase}>
          Où veux-tu te faire livrer ? 
          En salle de TD ? 🚀
        </Text>
        <View>
          <TextInput placeholder='Rue' placeholderTextColor={"#7480908A"} style={styles.textInput}></TextInput>
          <View style={{flexDirection:'row',gap:30,justifyContent:'space-between',width:"100%"}}>
            <TextInput placeholder='Ville' placeholderTextColor={"#7480908A"} style={[styles.textInput,{width:'50%'}]}/>
            <TextInput keyboardType='numeric' textContentType="postalCode" placeholder='Code postal' placeholderTextColor={"#7480908A"} style={[styles.textInput,{width:'50%'}]}/>
          </View>
        </View>

        <TouchableOpacity onPress={()=> {
            props.setView("success");
            props.clear();
        }}  >
          <Text style={styles.submit} >Passer commande</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
      height:"auto",
      padding:20,
        flexDirection:"column",
        flexGrow:1,
        justifyContent:"space-around"
    },
    itemsList:{
      gap:10,
    },
    title:{
      fontSize:35
    },
    catchPhrase:{
      
      fontSize : 25
    },
    submit:{
      fontSize:23,
      backgroundColor:"#713335",
      color:"white",
      paddingHorizontal:40,
      paddingVertical:20,
      margin:'auto',
      borderRadius:3,
        textAlign:"center"
    },
    textInput:{
      borderBottomColor:"#748090",
      borderBottomWidth:1.3,
      marginVertical:20,
      fontSize:20,
      
    }
})