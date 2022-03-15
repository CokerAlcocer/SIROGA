import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

export default function CardSystem() {
  return (
    <View style={styles.card} >
      <Text style={styles.cardTitle} >Nombre del sistema</Text>
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text style={styles.cardSubTitle} >Descripción</Text>
        <Text>Este sistema...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ebebeb',
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardBody: {
        marginTop: 10
    },
    divider: {
        borderColor: '#ebebeb'
    },
    cardSubTitle:{
      fontWeight: 'bold',
      marginBottom: 2,
      fontSize: 15
    }
})