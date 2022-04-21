import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import React, { useState } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native"; //para navegación
import Loading from "../Loading";
import colors from "../../utils/colors";
import ipAddress from "../../utils/ipAddress";

export default function FormLogin(props) {
  const navegation = useNavigation();
  const { toastRef } = props;
  const [showPass, setshowPass] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    // Aqui estan las validaciones de los inputs
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son requeridos");
      setLoading(false0);
    } else if (!validateEmail(formData.email)) {
      toastRef.current.show("Correo inválido");
    } else {
      // Aqui entra cuando todas las validaciones son falsas
      // Se crea el objeto que se va a mandar a spring con los datos del formularioç
      // Es por eso que si las validaciones son falsas, es porque la info ya esta cargada
      // MUCHO OJO: Revisa como estan ordenadas las columnas en la base de datos
      let user = {
        email: formData.email,
        password: formData.password,
      };

      // Este objeto request es para traer la info que regresa el servicio, solo se colocan
      // los mismos atributos pero en desorden
      // MUCHO OJO: Revisa como estan ordenadas las columnas en la base de datos
      const request = {
        email: "",
        id: 0,
        lastname: "",
        name: "",
        password: "",
        surname: "",
        username: "",
      };

      // Haces la peticion
      // HAY QUE VER COMO OBTENER LA IP SIN NECESIDAD DE CAMBIARLA NOSOTROS
      await fetch(
        "http://" + ipAddress.IP_ADDRESS + ":8080/siroga/api/user/u",
        {
          method: "POST",
          body: JSON.stringify(user),
          //Si no te deja hacer el post con esta cabecera, agrega la sig:
          // Accept: "aplication/json"
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => {
          // AQUI ES LO IMPORTANTE: Aqui es en donde se procesa la info para asignacion pero como
          // tal, no puedes asignar la variable json directamente. Debes sacarle los datos desde aqui
          request.email = json.data.email;
          request.id = json.data.id;
          request.lastname = json.data.lastname;
          request.name = json.data.name;
          request.password = json.data.password;
          request.surname = json.data.surname;
          request.username = json.data.username;
        })
        .catch((e) => console.log(e));

      // Y listo, ya solo harias la validacion en esta parte
      // NOTA: Procura utilizar !== o === para evitar problemas en las validacions
      //setLoading(true)
      if (request.email !== "" && request.password !== "") {
        //FIREBASE
        firebase
          .auth()
          .signInWithEmailAndPassword(formData.email, formData.password)
          .then((response) => {
            setLoading(false);
            navegation.navigate("index");
          })
          .catch((err) => {
            setLoading(false);
            toastRef.current.show("Las credenciales no son correctas");
          });
        //FIREBASE
      } else {
        setLoading(false);
        toastRef.current.show("El usuario no existe");
      }
    }
  };

  const capturarDatos = (type, e) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

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
        icon={
          <Icon
            type="material-community"
            name="arrow-right"
            iconStyle={{ marginLeft: 10, color: "white" }}
          />
        }
      />
      <Loading isVisible={loading} text={"Iniciando Sesión"} />
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
