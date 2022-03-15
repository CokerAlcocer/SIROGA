import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IndexStack from './stackNavigations/IndexStack';
import DashboardStack from './stackNavigations/DashboardStack';
import ProfileStack from './stackNavigations/ProfileStack';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='index'
            tabBarOptions={{
                inactiveTintColor: "gray",
                activeTintColor: '#0079ff'
            }}
            screenOptions={({route}) => ({tabBarIcon: ({color}) => screenOpt(route, color)})}
        >
            <Tab.Screen name='index' component={IndexStack} options={{title: 'Inicio'}} />
            <Tab.Screen name='dashboard' component={DashboardStack} options={{title: 'Mis Sistemas'}} />
            <Tab.Screen name='profile' component={ProfileStack} options={{title: 'Mi Perfil'}} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

function screenOpt(route, color) {
    let icon;
    switch (route.name) {
        case "index":
            icon = "view-grid-outline";
            break;
        case "dashboard":
            icon = "format-list-bulleted-square";
            break;
        case "profile":
            icon = "account";
            break;
    }

    return <Icon type="material-community" name={icon} size={22} color={color} />
}