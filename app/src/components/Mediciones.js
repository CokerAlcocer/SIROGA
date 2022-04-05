import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, ButtonGroup, Icon } from "react-native-elements";
import * as Progress from "react-native-progress";

export default function Mediciones() {
  return (
    <View>
      <Text style={styles.mediciones}>Mediciones</Text>

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <Text style={styles.subtitulos}>Min. 30%</Text>
      <Progress.Bar progress={0.3} width={null} height={12} color={"blue"} />

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <Text style={styles.subtitulos}>Min. 30%</Text>
      <Progress.Bar progress={0.8} width={null} height={12} color={"red"} />

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <Text style={styles.subtitulos}>Min. 30%</Text>
      <Progress.Bar progress={0.5} width={null} height={12} color={"blue"} />

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <Text style={styles.subtitulos}>Min. 30%</Text>
      <Progress.Bar progress={0.6} width={null} height={12} color={"red"} />

      <View style={styles.botones}>
        <Button
          icon={<Icon type="material-community" name="water-pump" />}
          iconRight={true}
          buttonStyle={{ backgroundColor: "#03c2fc", height: 45 }}
          containerStyle={styles.botonOpt}
          title="Regar"
          type="solid"
          iconPosition={true}
        />
        <Button
          icon={<Icon type="material-community" name="history" />}
          buttonStyle={{ backgroundColor: "green", height: 45 }}
          containerStyle={styles.botonOpt}
          title="Historial"
        />
      </View>
      <Button
        icon={<Icon type="material-community" name="power" />}
        containerStyle={{ alignItems: "center", marginTop: 15 }}
        buttonStyle={{ width: "70%", height: 50, backgroundColor: "red" }}
        title="Reposar"
        type="solid"
      />
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
  subtitulos: {
    fontSize: 15,
    marginBottom: 10,
  },
  containerBtn: {
    width: "100%",
    marginTop: 100,
  },
  btnOption: {
    backgroundColor: "red",
  },
  botones: {
    flexDirection: "row",
  },
  botonOpt: {
    width: "50%",
    padding: 3,
    marginTop: 30,
  },
});
