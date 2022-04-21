import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import colors from "../../utils/colors";
import axios from "axios";
import ipAddress from "../../utils/ipAddress";

export default function ChangeDisplayNameForm(props) {
  const { displayName, toastRef, setShowModal, setReloadUserInfo } = props;
  const [newDisplayName, setNewDisplayName] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  let aux = {};
  const setAux = (data) => {
    setUser(data);
  };

  //------------------------ACTUALIZAR CONTRASEÑA-------------------//

  const updateUserName = async () => {
    setLoading(true);
    await axios({
      method: "PUT",
      url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/user/",
      data: JSON.stringify({
        id: user.id,
        username: newDisplayName,
        email: user.email,
        password: user.password,
        name: user.name,
        surname: user.surname,
        lastname: user.lastname,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        const update = {
          displayName: newDisplayName,
        };
        firebase
          .auth()
          .currentUser.updateProfile(update)
          .then(() => {
            setLoading(false);
            setReloadUserInfo(true);
            setShowModal(false);
            toastRef.current.show("Nombre actualizado");
          })
          .catch(() => {
            setError("Error al actualizar el nombre");
            setLoading(false);
          });
      })
      .catch((e) => console.log(e));
  };

  //----------------------OBTENER LA INFORMACIÓN DEL USUARIO-------------------//
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
  useEffect(() => {
    getUser();
  }, []);

  const onSubmit = () => {
    setError(null);
    if (!newDisplayName) {
      setError("El campo no puede estar vacio");
    } else if (displayName === newDisplayName) {
      setError("Los nombres pueden ser iguales");
    } else {
      updateUserName();
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre y Apellidos"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
        errorMessage={error}
        defaultValue={displayName || ""}
      />
      <Button
        title="Cambiar nombre"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnStyle}
        onPress={() => onSubmit()}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btnStyle: {
    backgroundColor: colors.PRIMARY_COLOR,
  },
});
