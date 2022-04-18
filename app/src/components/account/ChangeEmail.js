import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Input, Button, Icon } from "react-native-elements";
import * as firebase from "firebase";
import colors from "../../utils/colors";
import { validateEmail } from "../../utils/validations";

export default function ChangeEmail(props) {
  const { email, toastRef, setShowModal, setReloadUserInfo } = props;
  const [newEmail, setNewEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [showPass, setshowPass] = useState(false);

  const onSubmit = () => {
    setError(null);
    if (!newEmail) {
      setError("El campo no puede estar vacio");
    }else if(!validateEmail(newEmail)){ 
     setError("Debes ingresar un correo válido")
    }else {
      setLoading(true);
      console.log("Listo")

      firebase
        .auth()
        .currentUser.updateEmail(newEmail)
        .then(() => {
          setLoading(false);
          setReloadUserInfo(true);
          setShowModal(false);
          toastRef.current.show("Correo Actualizado");
        })
        .catch(() => {
          setError("Error al actualizar el correo");
          setLoading(false)
        });
    }
  };

  //-------------------VALIDAR LA SESIÓN DEL USUARIO-----------------------------//

  const relogin = () => {
    setError(null);
    if (!password) {
      setError("Necesitas ingresar tu contraseña");
    } else {
      setLoading(true);

      firebase
        .auth()
        .currentUser.reauthenticateWithCredential(
          firebase.auth.EmailAuthProvider.credential(email, password)
        )
        .then(() => {
          setLogged(true);
          setLoading(false);
        })
        .catch(() => {
          setError("Verifica tu contraseña");
          setLoading(false);
        });
    }
  };

  if (logged) {
    return (
      <View style={styles.view}>
        <Input
          placeholder="Nuevo correo electrónico"
          containerStyle={styles.input}
          rightIcon={{
            type: "material-community",
            name: "at",
            color: "#c2c2c2",
          }}
          onChange={(e) => setNewEmail(e.nativeEvent.text)}
          errorMessage={error}
          defaultValue={""}
        />
        <Button
          title="Guardar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}
          onPress={() => onSubmit()}
          loading={loading}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Para poder realizar esta acción necesitas ingresar tu contraseña
        </Text>
        <Input
          onChange={(e) => setPassword(e.nativeEvent.text)}
          placeholder="Contraseña"
          containerStyle={styles.inputForm}
          password={true}
          secureTextEntry={showPass ? false : true}
          errorMessage={error}
          rightIcon={
            <Icon
              type="material-community"
              name={showPass ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={() => {
                setshowPass(!showPass);
              }}
            />
          }
        />
        <Button
          title="Enviar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}
          onPress={() => relogin()}
          loading={loading}
        />
      </View>
    );
  }
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
  text: {
    color: "red",
    marginBottom: 30,
    fontSize: 15,
    textAlign: "center",
  },
});
