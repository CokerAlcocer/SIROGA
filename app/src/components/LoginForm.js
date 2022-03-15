import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, Icon, Button } from 'react-native-elements';

export default function LoginForm() {
  return (
    <View style={styles.formContainer}>
        <Input />
    </View>
  )
}

const styles = StyleSheet.create({
    formInput: {
      marginBottom: 30,
      width: '95%'
    },
    formContainer: {
      marginTop: 10,
    },
    btnRegister: {
      backgroundColor: "#0079ff",
    },
    btnContainer: {
      width: "95%",
      alignSelf: "center",
    },
    iconStyle: {
      color: "#c1c1c1",
    },
  });