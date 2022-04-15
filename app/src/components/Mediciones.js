import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import * as Progress from "react-native-progress";
import colors from "../utils/colors";

export default function Mediciones(props) {
  const { humAirMax, humAirMin, humEarthMax, humEarthMin, tempAirMax, tempAirMin, tempEarthMax, tempEarthMin } = props;
  return (
    <View>
      <Text style={styles.mediciones}>Mediciones</Text>

      <Text style={styles.titulos}>Humedad del aire</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {humAirMin}%</Text>
        <Text style={styles.max} >Max. {humAirMax}%</Text>
      </View>
      <Progress.Bar progress={0.5} width={null} height={12} color={colors.COLOR_LINK} />

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {humEarthMin}%</Text>
        <Text style={styles.max} >Max. {humEarthMax}%</Text>
      </View>
      <Progress.Bar progress={0.8} width={null} height={12} color={colors.COLOR_DANGER} />

      <Text style={styles.titulos}>Temperatura del aire</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {tempAirMin} ºC</Text>
        <Text style={styles.max} >Max. {tempAirMax} ºC</Text>
      </View>
      <Progress.Bar progress={0.5} width={null} height={12} color={colors.COLOR_LINK} />

      <Text style={styles.titulos}>Temperatura de la tierra</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {tempEarthMin} ºC</Text>
        <Text style={styles.max} >Max. {tempEarthMax} ºC</Text>
      </View>
      <Progress.Bar progress={0.6} width={null} height={12} color={colors.COLOR_DANGER} />

      <View style={styles.botones}>
        <Button
          icon={<Icon color={colors.COLOR_BASE} type="material-community" name="power" />}
          containerStyle={styles.botonOpt}
          buttonStyle={{ height: 45, backgroundColor: colors.COLOR_DANGER }}
          title="Reposar"
          type="solid"
        />
        <Button
          icon={<Icon type="material-community" name="water-pump" color={colors.COLOR_BASE} />}
          iconLeft={true}
          buttonStyle={{ backgroundColor: colors.COLOR_LINK, height: 45 }}
          containerStyle={styles.botonOpt}
          title="Regar"
          type="solid"
          iconPosition={true}
        />
        <Button
          icon={<Icon type="material-community" name="history" color={colors.COLOR_BASE} />}
          buttonStyle={{ backgroundColor: colors.COLOR_SUCCESS, height: 45 }}
          containerStyle={styles.botonOpt}
          title="Historial"
        />
      </View>
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
    flexDirection: "row"
  },
  min: {
    width: '50%',
    fontSize: 15,
    marginBottom: 10,
  },
  max: {
    width: '50%',
    fontSize: 15,
    marginBottom: 10,
    textAlign: "right"
  },
  btnOption: {
    backgroundColor: "red",
  },
  botones: {
    flexDirection: "row",
  },
  botonOpt: {
    marginTop: 30,
    width: "31.5%",
    marginRight: 10
  },
});
