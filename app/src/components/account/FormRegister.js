import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Icon, Input, Button } from "react-native-elements";
import { validateEmail } from "../../utils/validations";
import { isEmpty, size } from "lodash";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import Loading from "../Loading";
import colors from "../../utils/colors";
import axios from "axios";
import ipAddress from "../../utils/ipAddress";

export default function FormRegister(props) {
  const navigation = useNavigation();
  const { toastRef } = props;
  const [showPass, setShowPass] = useState(false);
  const [showPassRepeat, setShowPassRepeat] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.passwordR)
    ) {
      toastRef.current.show("Ingresa el correo y las contraseñas");
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("El email es invalido");
    } else if (size(formData.password) < 6) {
      toastRef.current.show("Deben ser al menos 6 digitos en la contraseña");
    } else if (formData.password != formData.passwordR) {
      toastRef.current.show("Las contraseñas no coinciden");
    } else {
      setLoading(true);
      axios({
        method: "POST",
        url: "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/user/",
        data: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
              setLoading(false);
              toastRef.current.show("Registrado con Exito");
              navigation.navigate("index");
            })
            .catch(() => {
              setLoading(false);
              toastRef.current.show("Utilice otro correo");
            });
        })
        .catch(() => {
          setLoading(false);
          toastRef.current.show(
            "No se ha podido crear la cuenta, por favor mande mensaje a soporte tecnico"
          );
        });
    }
  };

  const capturarDatos = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Input
        onChange={(e) => capturarDatos(e, "username")}
        placeholder="Usuario"
        containerStyle={styles.formContainer}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle"
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "name")}
        placeholder="Nombre"
        containerStyle={styles.formContainer}
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "surname")}
        placeholder="Apellido"
        containerStyle={styles.formContainer}
        rightIcon={
          <Icon
            type="material-community"
            name="account-multiple-outline"
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "lastname")}
        placeholder="Segundo Apellido"
        containerStyle={styles.formContainer}
        rightIcon={
          <Icon
            type="material-community"
            name="account-multiple"
            iconStyle={styles.icon}
          />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "email")}
        placeholder="Correo Electronico"
        containerStyle={styles.formContainer}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "password")}
        placeholder="Contraseña"
        containerStyle={styles.formContainer}
        password={true}
        secureTextEntry={showPass ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPass ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />
      <Input
        onChange={(e) => capturarDatos(e, "passwordR")}
        placeholder="Repite tu contraseña"
        containerStyle={styles.formContainer}
        password={true}
        secureTextEntry={showPassRepeat ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassRepeat ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassRepeat(!showPassRepeat)}
          />
        }
      />

      <Button
        title="Registrar"
        containerStyle={styles.containerRegister}
        buttonStyle={styles.btnRegister}
        onPress={() => onSubmit()}
      />
      <Loading isVisible={loading} text={"Creando cuenta"} />
    </View>
  );
}

function defaultFormValues() {
  return {
    username: "",
    email: "",
    password: "",
    passwordR: "",
    name: "",
    surname: "",
    lastname: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 25,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  containerRegister: {
    marginTop: 20,
    width: "100%",
  },
  btnRegister: {
    marginTop: 10,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  icon: {
    color: "#c1c1c1",
  },
});
