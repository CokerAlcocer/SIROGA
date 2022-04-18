import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import SystemData from "../screens/SystemData";
import System from "../screens/System";

const Stack = createStackNavigator();

export default function SystemStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="system"
        component={System}
        options={{ headerShown: false, title: "Sistema" }}
      />

      <Stack.Screen
        name="index"
        component={Index}
        options={{ title: "InicioX" }}
      />

      <Stack.Screen
        name="systemdata"
        component={SystemData}
        options={{ title: "Mediciones" }}
      />
    </Stack.Navigator>
  );
}
