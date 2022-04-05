import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import System from "../screens/System";
import Profile from "../screens/Profile";
import { Icon } from "react-native-elements";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function IndexStack(props) {


     const {navigation} = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Index}
        options={{ 
             title: "Inicio",
             headerShown:false,
             
             headerLeft: () => 
             <Icon 
             onPress={() => navigation.openDrawer()}
             type='material-community' 
             name="menu" 
             size={22}
             color= {"black"}/> 
          }}  
      />
      <Stack.Screen
        name="system"
        component={System}
        options={{ title: "Sistemas" }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: "Perfil" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ 
             title: "Registrate"
          }}
          
      />
    </Stack.Navigator>
  );
}
