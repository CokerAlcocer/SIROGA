import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Overlay, Icon, Input, Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../utils/colors";
import axios from "axios";
import ipAddress from "../utils/ipAddress";
import Loading from "../components/Loading";

const toggleOverlay = () => {
  setVisible(!visible);
};

export default function CardSystemRegister(props) {
  const { addButton, userId } = props;
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const saveSistem = () => {
    setVisible(false);
    setLoading(true);
    axios({
      method: "POST",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/sistem/",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .catch((e) => console.log(e));
    setLoading(false);
  };

  const captureData = (event, type) => {
    setData({ ...data, [type]: event.nativeEvent.text });
  };

  useEffect(() => {
    initialValues();
  }, [userId]);

  return (
    <>
      <View
        style={addButton ? styles.cardTrue : styles.cardFalse}
        onTouchStart={() => toggleOverlay()}
      >
        <Icon name="plus" type="material-community" color="#d3d3d3" size={40} />
        <Text style={styles.text}>Añadir</Text>
      </View>
      <Overlay isVisible={visible} height={505}>
        <Text style={styles.cardTitle}>Agregar Sistema</Text>
        <Divider style={styles.divider} />

        <ScrollView>
          <Text style={styles.cardLabel}>Broker</Text>
          <Input
            containerStyle={styles.cardInput}
            placeholder={"Broker"}
            onChange={(event) => captureData(event, "broker")}
          />

          <Text style={styles.cardLabel}>Descripción</Text>
          <Input
            ty
            containerStyle={styles.cardInput}
            placeholder={"Broker"}
            onChange={(event) => captureData(event, "description")}
          />

          <Text style={styles.cardLabel}>Límites de humedad del aire</Text>
          <View style={{ flexDirection: "row" }}>
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "humAirMin")}
            />
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "humAirMax")}
            />
          </View>

          <Text style={styles.cardLabel}>Límites de humedad de la tierra</Text>
          <View style={{ flexDirection: "row" }}>
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "humEarthMin")}
            />
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "humEarthMax")}
            />
          </View>

          <Text style={styles.cardLabel}>Límites de temperatura del aire</Text>
          <View style={{ flexDirection: "row" }}>
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "tempAirMin")}
            />
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "tempAirMax")}
            />
          </View>

          <Text style={styles.cardLabel}>
            Límites de temperatura de la tierra
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "tempEarthMin")}
            />
            <Input
              keyboardType="numeric"
              containerStyle={styles.cardInputRow}
              placeholder={"Broker"}
              onChange={(event) => captureData(event, "tempEarthMax")}
            />
          </View>
        </ScrollView>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.cardBtnR}
              icon={
                <Icon
                  name="cancel"
                  type="material-community"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={styles.cardBtnCancel}
              title="Cancelar"
              onPress={toggleOverlay}
            />
          </View>
          <View style={styles.separator}></View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name="content-save"
                  type="material-community"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Guardar"
              onPress={saveSistem}
              containerStyle={styles.cardBtnR}
              buttonStyle={styles.cardBtnRemove}
            />
          </View>
        </View>
      </Overlay>
      <Loading isVisible={loading} text={"Guardando Sistema"} />
    </>
  );

  function initialValues() {
    setData({
      broker: "",
      humAirMax: 0,
      humAirMin: 0,
      humEarthMax: 0,
      humEarthMin: 0,
      tempAirMax: 0,
      tempAirMin: 0,
      tempEarthMax: 0,
      tempEarthMin: 0,
      status: {
        id: 1,
      },
      user: {
        id: userId,
      },
      description: "",
    });
  }
}

const styles = StyleSheet.create({
  cardTrue: {
    backgroundColor: null,
    width: "100%",
    padding: 15,
    borderStyle: "dotted",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "#d3d3d3",
    marginBottom: 10,
    alignItems: "center",
  },
  cardFalse: {
    backgroundColor: null,
    width: "100%",
    height: Dimensions.get("window").height - 155,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#d3d3d3",
    fontSize: 20,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cardLabel: {
    marginLeft: 10,
  },
  cardInput: {
    marginBottom: 15,
  },
  cardInputRow: {
    width: "50%",
    marginBottom: 15,
  },
  separator: {
    width: "5%",
  },
  divider: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "47.5%",
  },
  cardBtnL: {
    width: "100%",
  },
  cardBtnR: {
    width: "100%",
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
  },
  cardBtnRemove: {
    backgroundColor: colors.COLOR_DANGER,
  },
  cardBtnRemove: {
    backgroundColor: colors.COLOR_SUCCESS,
  },
  cardBtnCancel: {
    backgroundColor: "red",
  },
  cardInputContainer: {
    width: "100%",
  },
});
