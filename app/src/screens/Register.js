import { StyleSheet, View, ScrollView, Image } from "react-native";
import React, { useRef } from "react";
import FormRegister from "../components/account/FormRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";
import { Icon, Text } from "react-native-elements";
import colors from "../utils/colors";

export default function Register() {
  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Icon
        containerStyle={styles.icono}
        type="material-community"
        name="account-multiple-plus"
        iconStyle={styles.icon}
      />

      <View style={styles.viewForm}>
        <FormRegister toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 200,
    alignSelf: "center",
  },
  viewForm: {
    marginHorizontal: 40,
  },
  title: {
    textAlign: "center",
    marginTop: 30,
  },
  textTitle: {
    color: colors.PRIMARY_COLOR,
  },
  icono: {
    marginTop: 40,
  },
  icon: {
    fontSize: 50,
    color: colors.PRIMARY_COLOR,
    marginLeft: 10,
  },
  title2: {
    textAlign: "center",
    color: colors.PRIMARY_COLOR,
    marginTop: 50,
    fontSize: 55,
    fontWeight: "bold",
  },
});
