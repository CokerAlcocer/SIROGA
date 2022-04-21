import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  AsyncStorageStatic,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import firebase from "firebase";
import CardSystem from "../components/CardSystem";
import CardSystemRegister from "../components/CardSystemRegister";
import colors from "../utils/colors";
import { add, map } from "lodash";
import Loading from "../components/Loading";
import ipAddress from "../utils/ipAddress";
import axios from "axios";

export default function System(props) {
  const [user, setUser] = useState({});
  const [userSistems, setUserSistems] = useState([]);
  const [loading, setLoading] = useState(false);
  let aux = {};

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

  const getSistems = async () => {
    setLoading(true);
    await axios({
      method: "GET",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/sistem/",
    })
      .then((res) => {
        let aux = [];
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].user?.id == user.id) {
            aux.push(res.data.data[i]);
          }
        }
        setUserSistems(aux);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };

  let mapSistems = userSistems;

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getSistems();
  }, [user]);

  return (
    <>
      <View style={styles.viewHeader}>
        <View style={{ width: "80%" }}>
          <Text style={styles.viewTitle}>Mis Sistemas</Text>
        </View>
        <View style={{ width: "20%" }}>
          <Button
            icon={
              <Icon
                name="cached"
                type="material-community"
                color="black"
                size={25}
              />
            }
            title=""
            onPress={() => getSistems()}
            containerStyle={styles.headerBtnCont}
            buttonStyle={styles.headerBtn}
          />
        </View>
      </View>
      {userSistems.length > 0 ? (
        <ScrollView>
          <View style={styles.container}>
            {map(mapSistems, (mapSistems, index) => (
              <CardSystem
                key={index}
                sistem={userSistems[index]}
                getSistems={getSistems}
              />
            ))}
            {userSistems.length < 3 ? (
              <CardSystemRegister
                addButton={userSistems.length > 0}
                userId={user.id}
              />
            ) : null}
          </View>
        </ScrollView>
      ) : (
        <CardSystemRegister
          addButton={userSistems.length > 0}
          userId={user.id}
        />
      )}
      <Loading isVisible={loading} text={"Refrescando Sistemas"} />
    </>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: 20,
    fontSize: 35,
  },
  container: {
    padding: 10,
  },
  viewHeader: {
    flexDirection: "row",
    backgroundColor: colors.COLOR_BASE,
    paddingTop: 40,
    paddingLeft: 13,
    paddingBottom: 10,
  },
  viewTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  headerBtnCont: {
    alignItems: "flex-end",
  },
  headerBtn: {
    backgroundColor: null,
  },
});
