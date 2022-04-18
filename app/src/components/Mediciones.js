import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Button, Icon } from "react-native-elements";
import * as Progress from "react-native-progress";
import colors from "../utils/colors";
import { Overlay, Divider } from "react-native-elements";
import Loading from "./Loading";

export default function Mediciones(props) {
  const [measure, setMeasure] = useState({})
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { sistem } = props;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const changeStatus = (id) => {
    console.log(id)
  }

  const getAllMeasures = () => {
    toggleOverlay(true)
  }

  useEffect(() => {
  }, [])

  return (
    <View>
      <Text style={styles.mediciones}>Mediciones</Text>

      <Text style={styles.titulos}>Humedad del aire</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {sistem.humAirMin}%</Text>
        <Text style={styles.max} >Max. {sistem.humAirMax}%</Text>
      </View>
      <Progress.Bar width={Dimensions.get('window').width - 30} height={12} color={colors.COLOR_LINK} />

      <Text style={styles.titulos}>Humedad de la tierra</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {sistem.humEarthMin}%</Text>
        <Text style={styles.max} >Max. {sistem.humEarthMax}%</Text>
      </View>
      <Progress.Bar width={Dimensions.get('window').width - 30} height={12} color={colors.COLOR_DANGER} />

      <Text style={styles.titulos}>Temperatura del aire</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {sistem.tempAirMin} ºC</Text>
        <Text style={styles.max} >Max. {sistem.tempAirMax} ºC</Text>
      </View>
      <Progress.Bar width={Dimensions.get('window').width - 30} height={12} color={colors.COLOR_LINK} />

      <Text style={styles.titulos}>Temperatura de la tierra</Text>
      <View style={styles.limitsContainers} >
        <Text style={styles.min} >Min. {sistem.tempEarthMin} ºC</Text>
        <Text style={styles.max} >Max. {sistem.tempEarthMax} ºC</Text>
      </View>
      <Progress.Bar width={Dimensions.get('window').width - 30} height={12} color={colors.COLOR_DANGER} />

      <View style={styles.botones}>
        {0 == 1 ?
          (<Button
            icon={<Icon color={colors.COLOR_BASE} type="material-community" name="power" />}
            containerStyle={styles.botonOpt}
            buttonStyle={{ height: 45, backgroundColor: colors.COLOR_DANGER }}
            title="Reposar"
            type="solid"
            onPress={() => changeStatus(2)}
          />) :
          (<Button
            icon={<Icon color={colors.COLOR_BASE} type="material-community" name="power" />}
            containerStyle={styles.botonOpt}
            buttonStyle={{ height: 45, backgroundColor: colors.COLOR_DANGER }}
            title="Encender"
            type="solid"
            onPress={() => changeStatus(1)}
          />)
        }
        <Button
          icon={<Icon type="material-community" name="water-pump" color={colors.COLOR_BASE} />}
          iconLeft={true}
          buttonStyle={{ backgroundColor: colors.COLOR_LINK, height: 45 }}
          containerStyle={styles.botonOpt}
          title="Regar"
          type="solid"
          iconPosition={true}
          onPress={() => changeStatus(3)}
        />
        <Button
          icon={<Icon type="material-community" name="history" color={colors.COLOR_BASE} />}
          buttonStyle={{ backgroundColor: colors.COLOR_SUCCESS, height: 45 }}
          containerStyle={styles.botonOpt}
          title="Historial"
          onPress={() => getAllMeasures()}
        />
      </View>
      <Overlay
        isVisible={visible}
        height={405}
      >
        <Text style={styles.cardTitle} >Historial de mediciones</Text>
        <Divider style={styles.divider} />

        <ScrollView >
          <Text style={styles.cardLabel} >Broker</Text>

        </ScrollView>

        <View style={styles.buttonsContainer} >
          <View style={styles.buttonContainer} >
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
      <Loading
        isVisible={loading}
        text={"Guardando Sistema"}
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
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  divider: {
    marginVertical: 10
},
});
