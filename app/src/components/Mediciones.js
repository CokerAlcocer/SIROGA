import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Button, Icon } from "react-native-elements";
import * as Progress from "react-native-progress";
import colors from "../utils/colors";
import { Overlay, Divider } from "react-native-elements";
import Loading from "./Loading";

export default function Mediciones(props) {
  const { sistem, measures } = props;
  const [measure, setMeasure] = useState(setMeasures);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  function setMeasures() {
    return {
      humAir:
        measures[measures.length - 1] !== undefined
          ? measures[measures.length - 1].humAir
          : 0,
      humEarth:
        measures[measures.length - 1] !== undefined
          ? measures[measures.length - 1].humEarth
          : 0,
      tempAir:
        measures[measures.length - 1] !== undefined
          ? measures[measures.length - 1].tempAir
          : 0,
      tempEarth:
        measures[measures.length - 1] !== undefined
          ? measures[measures.length - 1].tempEarth
          : 0,
    };
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const changeStatus = (id) => {
    console.log(id);
  };

  useEffect(() => {
    setMeasure(setMeasures());
  }, [measures]);

  return (
    <View>
      <Text style={styles.mediciones}>Mediciones</Text>

      <Text style={styles.titulos}>Humedad del aire: {measure.humAir}%</Text>
      <View style={styles.limitsContainers}>
        <Text style={styles.min}>Min. {sistem.humAirMin}%</Text>
        <Text style={styles.max}>Max. {sistem.humAirMax}%</Text>
      </View>
      <Progress.Bar
        style={{ marginBottom: 10 }}
        progress={measure.humAir * 0.01}
        width={Dimensions.get("window").width - 100}
        height={12}
        color={
          measure.humAir >= sistem.humAirMin &&
          measure.humAir <= sistem.humAirMax
            ? colors.COLOR_LINK
            : colors.COLOR_DANGER
        }
      />

      <Text style={styles.titulos}>
        Humedad de la tierra: {measure.humEarth}%
      </Text>
      <View style={styles.limitsContainers}>
        <Text style={styles.min}>Min. {sistem.humEarthMin}%</Text>
        <Text style={styles.max}>Max. {sistem.humEarthMax}%</Text>
      </View>
      <Progress.Bar
        style={{ marginBottom: 10 }}
        progress={measure.humEarth * 0.01}
        width={Dimensions.get("window").width - 100}
        height={12}
        color={
          measure.humEarth >= sistem.humEarthMin &&
          measure.humEarth <= sistem.humEarthMax
            ? colors.COLOR_LINK
            : colors.COLOR_DANGER
        }
      />

      <Text style={styles.titulos}>
        Temperatura del aire: {measure.tempAir} ºC
      </Text>
      <View style={styles.limitsContainers}>
        <Text style={styles.min}>Min. {sistem.tempAirMin} ºC</Text>
        <Text style={styles.max}>Max. {sistem.tempAirMax} ºC</Text>
      </View>
      <Progress.Bar
        style={{ marginBottom: 10 }}
        progress={measure.tempAir * 0.01}
        width={Dimensions.get("window").width - 100}
        height={12}
        color={
          measure.tempAir >= sistem.tempAirMin &&
          measure.tempAir <= sistem.tempAirMax
            ? colors.COLOR_LINK
            : colors.COLOR_DANGER
        }
      />

      <Text style={styles.titulos}>
        Temperatura de la tierra: {measure.tempEarth} ºC
      </Text>
      <View style={styles.limitsContainers}>
        <Text style={styles.min}>Min. {sistem.tempEarthMin} ºC</Text>
        <Text style={styles.max}>Max. {sistem.tempEarthMax} ºC</Text>
      </View>
      <Progress.Bar
        style={{ marginBottom: 10 }}
        progress={measure.tempEarth * 0.01}
        width={Dimensions.get("window").width - 100}
        height={12}
        color={
          measure.tempEarth >= sistem.tempEarthMin &&
          measure.tempEarth <= sistem.tempEarthMax
            ? colors.COLOR_LINK
            : colors.COLOR_DANGER
        }
      />

      <Overlay isVisible={visible} height={405}>
        <Text style={styles.cardTitle}>Historial de mediciones</Text>
        <Divider style={styles.divider} />

        <ScrollView>
          <Text style={styles.cardLabel}>Broker</Text>
        </ScrollView>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.cardBtnR}
              icon={
                <Icon
                  name="arrow-left"
                  type="material-community"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={styles.cardBtnCancel}
              title="Regresar"
              onPress={toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
      <Loading isVisible={loading} text={"Guardando Sistema"} />
    </View>
  );
}

const styles = StyleSheet.create({
  mediciones: {
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 22,
    marginTop: 20,
  },
  titulos: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
  },
  limitsContainers: {
    flexDirection: "row",
  },
  min: {
    width: "50%",
    fontSize: 15,
    marginBottom: 10,
  },
  max: {
    width: "50%",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "right",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  divider: {
    marginVertical: 10,
  },
});
