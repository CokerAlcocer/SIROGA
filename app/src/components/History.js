import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Divider, ButtonGroup, Icon, Text } from "react-native-elements";


export default function History(props) {
  const { history } = props;

  const getDescription = () => {
    switch (history.operation.id) {
      case 1:
        return "Se regó el huerto";
      case 2:
        return "Se agregó este nuevo sistema";
      case 3:
        return "Se removió este sistema";
      case 4:
        return "El sistema registro anomalías en las mediciones de los sensores";
      case 5:
        return "Se puso a reposar el sistema";
      case 6:
        return "Sistema activo y en espera"
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{history.sistem.broker}</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text>{getDescription()}</Text>
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
    fontWeight: "bold",
    fontSize: 20,
  },
  cardHeader: {
    flexDirection: "row",
    width: "100%",
  },
  divider: {
    marginVertical: 10,
  },
});
