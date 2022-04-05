import { StyleSheet, Text, View } from 'react-native'
import React, { useState} from 'react'
import { Input, Button } from 'react-native-elements'
import * as firebase from "firebase"

export default function ChangeDisplayNameForm(props) {
     // console.log(props);
     const {displayName, toastRef, setShowModal, setReloadUserInfo} = props;
     const [newDisplayName, setNewDisplayName] = useState(null);
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(false)

     const onSubmit =() =>{
          // console.log(newDisplayName)
          setError(null)
          if(!newDisplayName){
               setError("El campo no puede estar vacio")
          }else if(displayName===newDisplayName){
               setError("Los nombres pueden ser iguales")
          }else{
               setLoading(true)
               const update ={
                    displayName: newDisplayName
               }
               firebase
               .auth()
               .currentUser
               .updateProfile(update)
               .then(()=>{
                    setLoading(false)
                    setReloadUserInfo(true)
                    setShowModal(false)                   
               })
               .catch(()=>{
                    setError("Error al actualizar el nombre")
                    setLoading(false)
               })
          }
     }
  return (
    <View style={styles.view}>
      <Input 
      placeholder="Nombre y Apellidos"
      containerStyle={styles.input}
      rightIcon={{
           type:"material-community",
           name:"account-circle-outline",
           color: "#c2c2c2"
      }}
      onChange={(e)=>setNewDisplayName(e.nativeEvent.text)}
      errorMessage={error}
      defaultValue={displayName || ""}
      />
      <Button 
      title="Cambiar nombre"
      containerStyle={styles.btnContainer}
      buttonStyle={styles.btnStyle}
      onPress={()=>onSubmit()}
      loading={loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
     view:{
          alignItems:"center",
          paddingTop: 10,
          paddingBottom:10
     },
     input:{
          marginBottom:10
     },
     btnContainer:{
          marginTop:20,
          width:"95%"
     },
     btnStyle:{
          backgroundColor: "#fcb823"
     }
})




