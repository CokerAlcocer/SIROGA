import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import colors from '../utils/colors';
import { Button, Input } from 'react-native-elements';
import Navigation from '../navigations/Navigation'

export default function Login() {
    const [session, setSession] = useState(false)

    if(session){
      return(
        <View style={styles.container} >
          <Text style={styles.text} >SIROGA</Text>
          <Text>Sistema de Riego Autoático</Text>
          <Input
              onChange={(event) => captureData(event, "email")}
              placeholder="Correo Electrónico"
              containerStyle={styles.formInput}
          />
          <Button />
        </View>
      );
    }else{
      return (
        <Navigation/>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
      },
      text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.PRIMARY_COLOR
      },
      formContainer: {
        marginTop: 40,
        width: '95%'
      },
      formInput: {
          width: '95%'
      }
})