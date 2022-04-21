import { StyleSheet, View, ScrollView } from "react-native";
import React, { useRef } from "react";
import { Icon, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import FormLogin from "../components/account/FormLogin";
import Toast from "react-native-easy-toast";
import colors from "../utils/colors";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <Text style={styles.title}>
        SIROGA
        </Text>
        <Text style={styles.text}>Sistema de Riego Automático</Text>
        <FormLogin toastRef={toastRef} />
        <CreateCuenta />
      </View>
      <Toast ref={toastRef} opacity={0.9} position={"center"} />
    </ScrollView>
  );

  function CreateCuenta() {
    const navigation = useNavigation();

    return (
      <Text style={styles.textRegister}>
        ¿Aún no tienes cuenta?{" "}
        <Text
          style={styles.btnRegistrar}
          onPress={() => navigation.navigate("register")}
        >
          Registrate aquí
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 200,
    alignSelf: "center",
    marginTop: 50,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
  },
  btnRegistrar: {
    color: colors.COLOR_LINK,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    color: colors.PRIMARY_COLOR,
    marginTop: 130,
    fontSize: 60,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    color: colors.PRIMARY_COLOR,
    marginTop: 0,
    fontSize: 20,
  },
  icon: {
    fontSize: 52,

    color: "green",
  },
});
