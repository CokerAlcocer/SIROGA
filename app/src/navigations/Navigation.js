import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import IndexStack from "./IndexStack";
import SystemStack from "./SystemStack";
import ProfileStack from "./ProfileStack";
import { firebaseApp } from "../utils/firebase";
import * as firebase from "firebase";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  const [header, setHeader] = useState(true);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, [login]);

  if (login) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="index"
          tabBarOptions={{
            inactiveTintColor: "#d3d3d3",
            activeTintColor: "#1e90ff",
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOption(route, color),
          })}
        >
          <Tab.Screen
            name="index"
            component={IndexStack}
            options={{ title: "Inicio" }}
          />
          <Tab.Screen
            name="system"
            component={SystemStack}
            options={{ title: "Mis Sistemas" }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileStack}
            options={{ title: "Mi Perfil" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="index"
          tabBarOptions={{
            headerShown: true,
            inactiveTintColor: "white",
            activeTintColor: "green",
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOption(route, color),
          })}
        >
          <Tab.Screen
            name="index"
            component={IndexStack}
            options={({ route }) => ({
              tabBarVisible: false,
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

function screenOption(route, color) {
  let icono;

  switch (route.name) {
    case "index":
      icono = "view-grid-outline";
      break;
    case "system":
      icono = "barrel";
      break;
    case "profile":
      icono = "account-outline";
      break;
    case "system":
      icono = "barrel";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={icono} size={22} color={color} />
  );
}
