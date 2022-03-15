import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardInfo from '../components/CardInfo'
import { ScrollView } from 'react-native-gesture-handler'

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container} >
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
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