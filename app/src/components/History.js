import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Divider, ButtonGroup, Icon, Text } from "react-native-elements";
import colors from "../utils/colors";
import ModalInfo from "./ModalInfo";
import {useNavigation} from '@react-navigation/native'



export default function History() {
  


  return (
    <View style={styles.card}> 
      <Text style={{fontSize:20}}>Nombre del sistema
      
      </Text>
      
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text style={{ marginBottom: 20 }}>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardBody: {
    marginTop: 10,
  },
  divider: {
    borderColor: "#ebebeb",
  }

});
