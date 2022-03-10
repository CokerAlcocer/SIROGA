import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../../screens/Index';

const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='index' component={Index} options={{title: 'Inicio'}} />
    </Stack.Navigator>
  )
}