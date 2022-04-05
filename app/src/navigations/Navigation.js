import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import IndexStack from "./IndexStack";
import SystemStack from "./SystemStack";
import ProfileStack from "./ProfileStack";
import Login from "../screens/Login";
import Index from "../screens/Index";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="index"
        tabBarOptions={{
          headerShown: false,
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
            tabBarVisible: getTabBarVisibility(route),
          })}
        />
        <Tab.Screen
          name="system"
          component={SystemStack}
          options={{ title: "Sistemas" }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Perfil" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


getTabBarVisibility = (route) => {
  const routeName = route.name;

  if (routeName === "index") {
    return true;
  }

  return false;
};

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
