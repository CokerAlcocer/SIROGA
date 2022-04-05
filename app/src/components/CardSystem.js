import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Divider, Icon, Button, Badge, Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function CardSystem() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  console.log(navigation);
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginEnd: 10,
        }}
      >
        <Text style={styles.cardTitle}>Nombre del sistema</Text>
        <Badge status="primary" value="Regando" badgeStyle={{ marginTop: 5 }} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.cardBody}>
        <Text style={styles.cardSubTitle}>Descripción</Text>
        <Text style={styles.description}>
          Ad veniam proident voluptate nulla. Eu magna sint nisi sit. Est Lorem
          incididunt consequat.
        </Text>
        <View style={styles.divideButton}>
          <Text style={styles.cardTitle}>
            <Button
              buttonStyle={styles.buttonRed}
              title="Quitar"
              icon={
                <Icon
                  type="material-community"
                  name="cancel"
                  color="#fff"
                  iconStyle={{ marginRight: 5 }}
                />
              }
              onPress={toggleOverlay}
            ></Button>
            <Button
              buttonStyle={styles.button}
              title="Mediciones"
              icon={
                <Icon
                  type="material-community"
                  name="coolant-temperature"
                  color="#fff"
                  iconStyle={{ marginRight: 6 }}
                />
              }
              onPress={() => navigation.navigate("systemdata")}
            />
          </Text>
        </View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          height={290}
        >
          <Text style={styles.textPrimary}>
            ¿Estas securo de eliminar el sistema?
          </Text>
          <Text style={styles.textSecondary}>
            ¡Esta opción no se puede deshacer si confirmas!
          </Text>
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
            onPress={toggleOverlay}
            buttonStyle={{ backgroundColor: "red" }}
          />
          <Button
          containerStyle={{marginTop:10}}
            icon={
              <Icon
                name="cancel"
                type="material-community"
                color="white"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{ backgroundColor: "grey" }}
            title="Cancelar"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textPrimary: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ebebeb",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardBody: {
    marginTop: 10,
  },
  divider: {
    borderColor: "#ebebeb",
  },
  cardSubTitle: {
    fontWeight: "bold",
    marginBottom: 2,
    fontSize: 15,
  },
  description: {
    textAlign: "justify",
  },
  button: {
    width: 130,
    height: 40,
    marginLeft: 60,
  },
  divideButton: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonRed: {
    backgroundColor: "red",
    width: 100,
  },
});
