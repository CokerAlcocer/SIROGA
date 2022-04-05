import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, Text } from 'react-native-elements'
import Mediciones from '../components/Mediciones'

export default function SystemData() {
  return (
    <View style={styles.card} >
      <Text h4 style={styles.cardTitle}  >Nombre del sistema</Text>
      
      <View style={styles.cardBody}>
        <Text style={{fontSize:17}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cumque quis.</Text>
        
        <Mediciones/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25,
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ebebeb',
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: "center"
    },
    cardBody: {
        marginTop: 25
    },
    
    description:{
      fontWeight: 'bold',
      marginBottom: 2,
      fontSize: 26
    },
    
   
})