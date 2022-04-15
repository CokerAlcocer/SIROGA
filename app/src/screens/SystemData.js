import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, Text } from 'react-native-elements'
import Mediciones from '../components/Mediciones'
import colors from '../utils/colors'
import { ScrollView } from 'react-native-gesture-handler'

export default function SystemData({route}) {
  const { sistemId } = route.params;
  const [sistem, setSistem] = useState({})

  const getMeasures = () => {
    fetch('http://192.168.100.138:8080/siroga/api/sistem/'+sistemId).then(res => res.json()).then(json => {
      setSistem(json.data);
    }).catch(e => console.log(e))
  }

  useEffect(() => {
    setInterval(() => {
      getMeasures()
    }, 5000)
  }, [])
  

  return (
    <View >
      <View style={styles.card} >
        <Text style={styles.cardTitle}  >{sistem.broker}</Text>
        <View style={styles.cardBody}>
          <Text style={styles.description} >{sistem.description}</Text>
          <Mediciones 
            humAirMax={sistem.humAirMax} humAirMin={sistem.humAirMin} 
            humEarthMax={sistem.humEarthMax} humEarthMin={sistem.humEarthMin} 
            tempAirMax={sistem.tempAirMax} tempAirMin={sistem.tempAirMin} 
            tempEarthMax={sistem.tempEarthMax} tempEarthMin={sistem.tempEarthMin} />
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
    textAlign: 'center'
  },
})