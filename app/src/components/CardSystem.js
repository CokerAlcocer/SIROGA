import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Divider, Icon, Button, Badge, Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../utils/colors";

export default function CardSystem() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardTitle} >Nombre</Text>
        </View>
        <View style={styles.cardHeaderContainer}>
          <Badge value="Regando" badgeStyle={styles.badge} />
        </View>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.cardBody} >
        <Text style={styles.cardSubtitle} >Descripción</Text>
        <Text style={styles.cardText} >Deshjkfdsahjfdal</Text>
        <View style={styles.buttonsContainer} >
          <View style={styles.buttonContainer}>
            <Button containerStyle={styles.cardBtnL} buttonStyle={styles.cardBtnRemove} title={'Quitar'} onPress={toggleOverlay} />
          </View>
          <View style={styles.separator} ></View>
          <View style={styles.buttonContainer}>
            <Button containerStyle={styles.cardBtnR} buttonStyle={styles.cardBtnMeasure} title={'Mediciones'} onPress={() => navigation.navigate("systemdata")} />
          </View>
        </View>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        height={185}
      >
        <Text style={styles.cardTitle} >Aviso</Text>
        <Divider style={styles.divider} />
        <Text style={styles.textPrimary}>
          ¿Estas securo de eliminar el sistema? Esta opción no se puede deshacer si confirmas...
        </Text>
        <View style={styles.buttonsContainer} >
          <View style={styles.buttonContainer} >
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
              containerStyle={styles.cardBtnR}
              buttonStyle={styles.cardBtnRemove}
            />
          </View>
          <View style={styles.separator} ></View>
          <View style={styles.buttonContainer} >
            <Button
              containerStyle={styles.cardBtnR}
              icon={
                <Icon
                  name="cancel"
                  type="material-community"
                  color="white"
                  size={25}
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={styles.cardBtnCancel}
              title="Cancelar"
              onPress={toggleOverlay}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.COLOR_BASE,
    width: "100%",
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.COLOR_DISABLED,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    width: "100%"
  },
  cardHeaderContainer: {
    width: '50%'
  },
  badge: {
    alignSelf: 'flex-end'
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  cardSubtitle: {
    fontWeight: 'bold',
    fontSize: 15
  },
  cardText: {
    marginTop: 5
  },
  divider: {
    marginVertical: 10
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    width: "100%"
  },
  separator: {
    width: '5%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: "47.5%"
  },
  cardBtnL: {
    width: '100%',
  },
  cardBtnR: {
    width: '100%',
  },
  cardBtnRemove: {
    backgroundColor: colors.COLOR_DANGER
  },
  cardBtnCancel: {
    backgroundColor: 'grey'
  }
});
