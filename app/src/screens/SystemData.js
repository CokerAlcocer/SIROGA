import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, Text } from 'react-native-elements'
import Mediciones from '../components/Mediciones'
import colors from '../utils/colors'
import { ScrollView } from 'react-native-gesture-handler'
import ipAddress from '../utils/ipAddress'
import axios from 'axios'

export default function SystemData({route}) {
  const { sistemId } = route.params;
  const [sistema, setSistema] = useState({})
  const [measures, setMeasures] = useState([])

  const getSistem = () => {
    axios({method: 'GET', url: 'http://'+ipAddress.IP_ADDRESS+':8080/siroga/api/sistem/'+sistemId}).then(res => {
      setSistema(res.data.data)
    }).catch(e => console.log(e))

    axios({method: 'GET', url: 'http://'+ipAddress.IP_ADDRESS+':8080/siroga/api/mh/'}).then(res => {
      setMeasures(res.data.data)
    }).catch(e => console.log(e))
  }
  
  useEffect(() => {
    getSistem()
  }, [])

  return (
    <View >
      <View style={styles.card} >
        <Text style={styles.cardTitle}  >{sistema.broker}</Text>
        <View style={styles.cardBody}>
          <Text style={styles.description} >{sistema.description}</Text>
          <Mediciones 
            measures={measures} broker={sistemId.broker}
            humAirMax={sistema.humAirMax} humAirMin={sistema.humAirMin} 
            humEarthMax={sistema.humEarthMax} humEarthMin={sistema.humEarthMin} 
            tempAirMax={sistema.tempAirMax} tempAirMin={sistema.tempAirMin} 
            tempEarthMax={sistema.tempEarthMax} tempEarthMin={sistema.tempEarthMin} />
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