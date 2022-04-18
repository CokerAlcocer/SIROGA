import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, Text } from "react-native-elements";
import Mediciones from "../components/Mediciones";
import colors from "../utils/colors";
import { ScrollView } from "react-native-gesture-handler";
import ipAddress from "../utils/ipAddress";
import axios from "axios";

export default function SystemData({ route }) {
  const { sistemId } = route.params;
  const [sistem, setSistem] = useState({});
  const [measures, setMeasures] = useState([]);

  const getSistem = () => {
    axios({
      method: "GET",
      url:
        "http://" +
        ipAddress.IP_ADDRESS +
        ":8080/siroga/api/sistem/" +
        sistemId,
    })
      .then((res) => {
        setSistem(res.data.data);
      })
      .catch((e) => console.log(e));

    axios({
      method: "GET",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/mh/",
    })
      .then((res) => {
        setMeasures(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getSistem();
  }, []);

  return (
    <View>
      <View style={styles.card}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  cardBody: {
    marginTop: 10,
  },
  description: {
    textAlign: "center",
  },
});
