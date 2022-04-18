import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import System from "../screens/System";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false, title: "Perfil" }}
      />
    </Stack.Navigator>
  );
}
