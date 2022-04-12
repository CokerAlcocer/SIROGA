import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, Text } from 'react-native-elements'
import Mediciones from '../components/Mediciones'
import colors from '../utils/colors'
import { ScrollView } from 'react-native-gesture-handler'

export default function SystemData() {
  return (
    <View >
      <View style={styles.card} >
        <Text style={styles.cardTitle}  >Nombre del sistema</Text>
        <View style={styles.cardBody}>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cumque quis.</Text>
          <Mediciones />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  card: {
    backgroundColor: colors.COLOR_BASE,
    width: "100%",
    height: "100%",
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: "center"
  },
  cardBody: {
    marginTop: 10
  },
  description: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 26
  },
})