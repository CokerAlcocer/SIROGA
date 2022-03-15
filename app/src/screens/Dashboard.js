import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CardSystem from '../components/CardSystem'

export default function Dashboard() {
  return (
    <ScrollView>
      <View style={styles.container} >
        <CardSystem />
        <CardSystem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center'
  }
})