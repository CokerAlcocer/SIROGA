import React, { useEffect, useState } from "react";
import { View, StyleSheet, LogBox, ScrollView, Dimensions } from "react-native";
import axios from "axios";
import { Text } from "react-native-elements";
import Login from "../screens/Login";
import Loading from "../components/Loading";
import colors from "../utils/colors";
import firebase from "firebase";
import History from "../components/History";
import ipAddress from "../utils/ipAddress";
import { map } from "lodash";

export default function Index(props) {
  const { navigation } = props;
  const [login, setLogin] = useState(null); //guardar el estado de la sesión
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [histories, setHistories] = useState([]);
  let aux = {};
  let auxIds = [];

  const setAux = (data) => {
    setUser(data);
  };

  const getUser = async () => {
    await axios({
      method: "POST",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/user/e",
      data: JSON.stringify({ email: firebase.auth().currentUser.email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        aux = res.data.data;
        setAux(aux);
      })
      .catch((e) => console.log(e));
  };

  const getHistory = () => {
    setHistories([])
    setLoading(true);
    axios({
      method: "GET",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/sistem/",
    })
      .then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].user?.id == user.id) {
            auxIds.push(res.data.data[i].id);
          }
        }
        
        if (auxIds.length > 0) {
          axios({
            method: "GET",
            url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/oh/",
          })
            .then((res) => {
              let auxHistory = [];
              for (let i = 0; i < auxIds.length; i++) {
                for (let j = 0; j < res.data.data.length; j++) {
                  if (res.data.data[j].sistem?.id === auxIds[i]) {
                    auxHistory.push(res.data.data[j]);
                  }
                }
              }
              setHistories(auxHistory);
            })
            .catch((e) => console.log(e));
        } else {
          console.log("No hay mediciones");
        }
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };

  let auxMap = histories;

  useEffect(() => {
    getUser();
  }, [login]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);

      if (login) {
        getHistory();
      }
    });
  }, [login, user]);

  if (login === null) return <Loading isVisible={true} text={"Cargando"} />;

  if (login) {
    return (
      <>
        <Text style={styles.viewTitle}>Historial</Text>
        {histories.length != 0 ? (
          <ScrollView>
            <View style={styles.container}>
              {map(auxMap, (auxMap, index) => (
                <History index={index} history={histories[index]} />
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.containerEmpty}>
            <Text style={styles.textEmpty}>Sin movimientos</Text>
          </View>
        )}
        <Loading isVisible={loading} text={"Cargando Historial"} />
      </>
    );
  } else {
    return <Login />;
  }
}

const styles = StyleSheet.create({
  containerBtn: {
    margin: 20,
    marginTop: 10,
  },
  btnOption: {
    backgroundColor: colors.PRIMARY_COLOR,
  },
  title: {
    textAlign: "center",
    color: colors.PRIMARY_COLOR,
    padding: 10,
    marginBottom: 100,
  },
  textEmpty: {
    textAlign: "center",
    color: colors.COLOR_MUTED,
    fontSize: 25,
  },
  viewTitle: {
    backgroundColor: colors.COLOR_BASE,
    paddingTop: 40,
    paddingLeft: 13,
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  container: {
    padding: 10,
  },
  containerEmpty: {
    height: Dimensions.get("window").height - 155,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
});
