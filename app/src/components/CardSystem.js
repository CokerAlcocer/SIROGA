import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Divider, Icon, Button, Badge, Overlay } from "react-native-elements";
import colors from "../utils/colors";
import axios from "axios";
import ipAddress from "../utils/ipAddress";
import Mediciones from "./Mediciones";
import { ScrollView } from "react-native-gesture-handler";
import { map } from "lodash";

export default function CardSystem(props) {
  const { sistem, getSistems } = props;
  const [visible, setVisible] = useState(false);
  const [showMeasures, setShowMeasures] = useState(false);
  const [showMeasureHistory, setShowMeasureHistory] = useState(true);
  const [measures, setMeasures] = useState([]);
  const [watering, setWatering] = useState(false)
  const [sleep, setSleep] = useState(false)
  let aux = [];
  let auxMeasures = measures;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const waterSwitch = () => {
    let obj = {...sistem, status: {id: watering ? 1 : 3}}
    axios({
      method: 'PUT',
      url: 'http://' + ipAddress.IP_ADDRESS + ':8080/siroga/api/sistem/',
      data: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if(!res.data.error){
        obj = {
          sistem: {
            id: sistem.id
          }, 
          operation: {
            id: watering ? 6 : 1
          }
        }

        axios({
          method: 'POST',
          url: 'http://' + ipAddress.IP_ADDRESS + ':8080/siroga/api/oh/',
          data: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.data.error){
            console.log('No actualizado')
          }
        }).catch(e => console.log(e))
      }
      setWatering(!watering)
      getSistems()
    }).catch(e => console.log(e))
  }

  const changeActivity = () => {
    setWatering(false)
    let obj = {...sistem, status: {id: sleep ? 1 : 2}}
    axios({
      method: 'PUT',
      url: 'http://' + ipAddress.IP_ADDRESS + ':8080/siroga/api/sistem/',
      data: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if(!res.data.error){
        obj = {
          sistem: {
            id: sistem.id
          }, 
          operation: {
            id: sleep ? 6 : 5
          }
        }

        axios({
          method: 'POST',
          url: 'http://' + ipAddress.IP_ADDRESS + ':8080/siroga/api/oh/',
          data: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.data.error){
            console.log('No actualizado')
          }
        }).catch(e => console.log(e))
      }
      setSleep(!sleep)
      getSistems()
    }).catch(e => console.log(e))
  }

  const toggleMeasures = () => {
    getAllMeasures();
    setShowMeasures(!showMeasures);
    setShowMeasureHistory(true);
  };

  const setAux = (array) => {
    setMeasures(array);
  };

  const getAllMeasures = () => {
    let a = []
    axios({
      method: "GET",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/mh/",
    })
      .then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].broker == sistem.broker) {
            a.push(res.data.data[i]);
          }
        }
        aux = a;
        setAux(aux);
      })
      .catch((e) => console.log(e));
  };

  const removeSistem = () => {
    let remove = sistem;
    remove.broker = "---";
    remove.user = null;
    axios({
      method: "PUT",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/sistem/",
      data: JSON.stringify(remove),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        getSistems()
      })
      .catch((e) => console.log(e));
  };

  const getBadgeColor = (id) => {
    switch (id) {
      case 1:
        return (
          <Badge
            value=" "
            badgeStyle={{
              alignSelf: "flex-end",
              backgroundColor: colors.COLOR_SUCCESS,
            }}
          />
        );
        break;
      case 2:
        return (
          <Badge
            value=" "
            badgeStyle={{
              alignSelf: "flex-end",
              backgroundColor: colors.COLOR_MUTED,
            }}
          />
        );
        break;
      case 3:
        return (
          <Badge
            value=" "
            badgeStyle={{
              alignSelf: "flex-end",
              backgroundColor: colors.COLOR_LINK,
            }}
          />
        );
        break;
      case 4:
        return (
          <Badge
            value=" "
            badgeStyle={{
              alignSelf: "flex-end",
              backgroundColor: colors.COLOR_DANGER,
            }}
          />
        );
        break;
    }
  };

  useEffect(() => {
    getAllMeasures();
    setInterval(() => {
      getAllMeasures();
    }, 10000);
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardTitle}>{sistem.broker}</Text>
        </View>
        <View style={styles.cardHeaderContainer}>
          {getBadgeColor(sistem.status.id)}
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text style={styles.cardSubtitle}>Descripción</Text>
        <Text style={styles.cardText}>{sistem.description}</Text>
        <View
          style={{
            flexDirection: "row-reverse",
            alignItems: "flex-end",
            marginTop: 20,
          }}
        >
          <Button
            disabled={sistem.status.id == 4 ? true : false}
            buttonStyle={styles.cardBtn}
            icon={
              <Icon type="material-community" name="chart-bar" size={27}></Icon>
            }
            onPress={toggleMeasures}
          />
          <Button
            containerStyle={{ marginRight: 15 }}
            buttonStyle={styles.cardBtn}
            title={""}
            icon={
              <Icon type="material-community" name={"delete"} size={27}></Icon>
            }
            onPress={toggleOverlay}
          />
        </View>
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} height={185}>
        <Text style={styles.cardTitle}>Aviso</Text>
        <Divider style={styles.divider} />
        <Text style={styles.textPrimary}>
          ¿Estas securo de eliminar el sistema? Esta opción no se puede deshacer
          si confirmas...
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name="delete"
                  type="material-community"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="Eliminar"
              onPress={() => removeSistem()}
              containerStyle={styles.cardBtnR}
              buttonStyle={styles.cardBtnRemove}
            />
          </View>
          <View style={styles.separator}></View>
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
        </View>
      </Overlay>

      {/*CARD DE MEDICIONES*/}
      <Overlay
        isVisible={showMeasures}
        onBackdropPress={toggleMeasures}
        height={showMeasureHistory ? 565 : 400}
      >
        {showMeasureHistory ? (
          <>
            <View style={{flexDirection: "row", alignItems: "center"}} >
              <Text style={styles.cardTitle}>Mediciones del Sistema</Text>
              <View style={{marginLeft: 30}} >
                {getBadgeColor(sistem.status.id)} 
              </View>
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.cardTitle}>{sistem.broker}</Text>
            <View style={styles.cardBody}>
              <Text style={styles.description}>{sistem.description}</Text>
              <Mediciones sistem={sistem} measures={measures} />
              <View style={styles.botones}>
                <Button
                  icon={
                    <Icon
                      color={colors.COLOR_BASE}
                      type="material-community"
                      name={sistem.status.id == 2 ? "power" : "weather-night"}
                    />
                  }
                  containerStyle={styles.botonOpt}
                  buttonStyle={{
                    fontSize: 10,
                    height: 45,
                    backgroundColor: sistem.status.id == 2 ? colors.COLOR_SUCCESS : colors.COLOR_DANGER,
                  }}
                  type="solid"
                  onPress={() => changeActivity()}
                />
                <Button
                  disabled={sistem.status.id == 2}
                  icon={
                    <Icon
                      type="material-community"
                      name={sistem.status.id == 3 ? "water-pump-off" : "water-pump"}
                      color={colors.COLOR_BASE}
                    />
                  }
                  iconLeft={true}
                  buttonStyle={{
                    backgroundColor: sistem.status.id == 3 ? colors.COLOR_DANGER : colors.COLOR_LINK,
                    height: 45,
                  }}
                  containerStyle={styles.botonOpt}
                  iconPosition={true}
                  onPress={() => waterSwitch()}
                />
                <Button
                  icon={
                    <Icon
                      type="material-community"
                      name="history"
                      color={colors.COLOR_BASE}
                    />
                  }
                  buttonStyle={{
                    backgroundColor: colors.COLOR_ICON,
                    height: 45,
                  }}
                  containerStyle={styles.botonOpt}
                  onPress={() => setShowMeasureHistory(!showMeasureHistory)}
                />
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.cardTitle}>Historial de Mediciones</Text>
            <Divider style={styles.divider} />
            <ScrollView>
            {measures.length > 0 ? (
                map(auxMeasures, (auxMeasures, index) => (
                  <>
                    <Text index={index}>
                      Humedad del aire: {measures[index].humAir}
                    </Text>
                    <Text index={index}>
                      Humedad de la tierra: {measures[index].humEarth}
                    </Text>
                    <Text index={index}>
                      Temperatura del aire: {measures[index].tempAir}
                    </Text>
                    <Text index={index}>
                      Temperatura de la tierra: {measures[index].tempEarth}
                    </Text>
                    <Divider style={styles.divider} ></Divider>
                  </>
                ))
              ) : (
                <Text>Sin mediciones</Text>
              )}
            </ScrollView>
            <View style={styles.botones}>
              <Button
                title="Regresar"
                buttonStyle={{ backgroundColor: colors.COLOR_LINK, height: 45 }}
                containerStyle={{ width: "100%" }}
                onPress={() => setShowMeasureHistory(!showMeasureHistory)}
              />
            </View>
          </>
        )}
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.COLOR_BASE,
    width: "100%",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.COLOR_DISABLED,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: "row",
    width: "100%",
  },
  cardHeaderContainer: {
    width: "50%",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cardSubtitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cardText: {
    marginTop: 5,
  },
  divider: {
    marginVertical: 10,
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
  },
  separator: {
    width: "5%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "47.5%",
  },
  cardBtn: {
    backgroundColor: null,
    padding: 0,
  },
  cardBtnL: {
    width: "100%",
  },
  cardBtnR: {
    width: "100%",
  },
  cardBtnRemove: {
    backgroundColor: colors.COLOR_DANGER,
  },
  cardBtnCancel: {
    backgroundColor: "grey",
  },
  botones: {
    flexDirection: "row",
  },
  botonOpt: {
    marginTop: 30,
    width: "31%",
    marginRight: 10,
  },
});
