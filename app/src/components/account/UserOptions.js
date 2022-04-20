import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ListItem } from "react-native-elements";
import { map } from "lodash";
import Modal from "../Modal";
import ChangePassword from "./ChangePassword";
import { useNavigation } from "@react-navigation/native";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
import ChangeEmail from "./ChangeEmail";

export default function UserOptions(props) {
  const { userInfo, toastRef, setReloadUserInfo } = props;
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const selectComponent = (key) => {
    switch (key) {
      case "displayName":
        setRenderComponent(
          <ChangeDisplayNameForm
            displayName={userInfo.displayName}
            setShowModal={setShowModal}
            toastRef={toastRef}
            setReloadUserInfo={setReloadUserInfo}
          />
        );
        setShowModal(true);
        break;
      case "email":
        setRenderComponent(
          <ChangeEmail
            email={userInfo.email}
            setShowModal={setShowModal}
            toastRef={toastRef}
            setReloadUserInfo={setReloadUserInfo}
          />
        );
        setShowModal(true);
        break;
      case "password":
        setRenderComponent(
          <ChangePassword
            setShowModal={setShowModal}
            email={userInfo.email}
            setReloadUserInfo={setReloadUserInfo}
            toastRef={toastRef}
          />
        );
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  const menuOptions = generateOptions(selectComponent);
  // console.log(menuOptions);
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameL,
            color: menu.iconColor,
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameR,
            color: menu.iconColor,
          }}
          containerStyle={styles.menuItem}
          onPress={menu.onPress}
        />
      ))}
      {renderComponent && (
        <Modal isVisible={showModal} setIsVisible={setShowModal}>
          {renderComponent}
        </Modal>
      )}
    </View>
  );
}

function generateOptions(selectComponent) {
  return [
    {
      title: "Cambiar Nombre de Usuario",
      iconType: "material-community",
      iconNameL: "account-circle",
      iconColor: "#ccc",
      iconNameR: "chevron-right",
      onPress: () => selectComponent("displayName"),
    },
    {
      title: "Cambiar Correo eléctronico",
      iconType: "material-community",
      iconNameL: "at",
      iconColor: "#ccc",
      iconNameR: "chevron-right",
      onPress: () => selectComponent("email"),
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameL: "lock-reset",
      iconColor: "#ccc",
      iconNameR: "chevron-right",
      onPress: () => selectComponent("password"),
    },
  ];
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
