import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import IndexStack from "./IndexStack";
import SystemStack from "./SystemStack";
import ProfileStack from "./ProfileStack";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="index"
          component={IndexStack}
          options={{
            title: "Inicio",
            drawerIcon: () => (
              <Icon type="material-community" size={22} name={"view-grid"} />
            ),
          }}
        />
        <Drawer.Screen
          name="system"
          component={SystemStack}
          options={{
            title: "Sistemas",
            drawerIcon: () => (
              <Icon type="material-community" size={22} name={"barrel"} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          component={ProfileStack}
          options={{
            title: "Perfil",
            drawerIcon: () => (
              <Icon
                type="material-community"
                size={22}
                name={"account"}
                color={"white"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//rnf
