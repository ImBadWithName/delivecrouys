import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';

Success.propTypes = {

};

function Success(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("./images/successBackground.png")}/>
            <Text style={styles.title}>
                Commande Envoyé
            </Text>
            <Text style={styles.inst}>
                Elle vous attendra à la fin de votre cours !
            </Text>
            <Text style={styles.solde}>
                Solde CROUS restant : €
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title:{
        fontSize:35,
        textAlign:"center",
        color:"#713335",
        marginVertical:20,
    },
    inst:{
        fontSize:25,
        textAlign:"center",
        marginVertical:10,
    },
    solde:{
        fontSize:15,
        textAlign:"center",
        color:"#748090",
    },
    container:{
        height:"100%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",

    },
    image:{
        width:230,
        height:200
    }
})
export default Success;