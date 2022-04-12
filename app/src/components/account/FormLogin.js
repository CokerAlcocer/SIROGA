import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { Input, Icon, Button } from "react-native-elements"
import { isEmpty } from "lodash"
import { validateEmail } from "../../utils/validations"
import firebase from "firebase"
import { useNavigation } from "@react-navigation/native" //para navegación
import Loading from "../Loading"
import colors from "../../utils/colors"

export default function FormLogin(props) {
  const navegation = useNavigation()
  const { toastRef } = props
  const [showPass, setshowPass] = useState(false)
  const [formData, setFormData] = useState(defaultFormValues())
  const [loading, setLoading] = useState(false)
  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son requeridos")
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("Correo inválido");
    } else {
      setLoading(true)
      firebase.auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          setLoading(false)
          console.log(response);
          navegation.navigate("index")
        })
        .catch((err) => {
          setLoading(false)
          toastRef.current.show("Las credenciales no son correctas");
        });
    }
  };

  const capturarDatos = (type, e) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };


  function test() {
    setTimeout(() => {
      return fetch('http://192.168.0.9:8080/siroga/api/mh/'). //No olvidar cambiar la ip por la del equipo
      then(res => res.json())
      .then(json => console.log(json))
      .catch(e => console.log(e))
    });
  }


  return (
    <View style={styles.formContainer}>
      <Input
        onChange={(e) => capturarDatos("email", e)}
        placeholder="Correo Electrónico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        onChange={(e) => capturarDatos("password", e)}
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPass ? false : true}
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
        title={"Iniciar Sesión"}
        containerStyle={styles.containerBtn}
        buttonStyle={styles.btnLogin}
        onPress={() => onSubmit()}
        iconRight={true}
        
        icon={<Icon type="material-community" name="arrow-right-circle" iconStyle={{marginLeft:10, color:"white"}}/>}
      />
      <Loading
        isVisible={loading}
        text={"Iniciando Sesión"}
      />
    </View>
  );
}

function defaultFormValues() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    marginTop: 20,
    width: "100%",
  },
  icon: {
    color: "#c1c1c1",
  },
  containerBtn: {
    margin: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: colors.PRIMARY_COLOR,
  },
});
