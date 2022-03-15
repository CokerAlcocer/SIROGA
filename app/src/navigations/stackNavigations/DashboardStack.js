import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../../screens/Dashboard';

const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='dashboard' component={Dashboard} options={{title: 'Mis Sistemas'}} />
    </Stack.Navigator>
  )
}