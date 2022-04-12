import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Divider, ButtonGroup, Icon, Text } from "react-native-elements";
import colors from "../utils/colors";
import ModalInfo from "./ModalInfo";
import {useNavigation} from '@react-navigation/native'



export default function History() {
  


  return (
    <View style={styles.card}> 
      <View style={styles.cardHeader} >
        <Text style={styles.cardTitle}>Nombre del sistema</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text >
          El huerto tal ha alcanzado una temperatura de más de X grados
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  cardHeader: {
    flexDirection: 'row',
    width: "100%"
  },
  divider: {
    marginVertical: 10
  },

});
