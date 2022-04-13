import { StyleSheet, Text, View } from 'react-native'
import React, { useState} from 'react'
import { Input, Button } from 'react-native-elements'
import * as firebase from "firebase"
import colors from '../../utils/colors'

export default function ChangePassword(props) {
     
     const { setShowModal, setReloadUserInfo} = props;
     const [newPassword, setNewPassword] = useState(null);
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(false)
     

     const onSubmit =() =>{
          
          setError(null)
          if(!newPassword){
               setError("El campo no puede estar vacio")
         
          }else{
          
               setLoading(true)
               
               firebase
               .auth()
               .currentUser
               .updatePassword(newPassword)
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
      placeholder="Nueva contraseña"
      containerStyle={styles.input}
      rightIcon={{
           type:"material-community",
           name:"key",
           color: "#c2c2c2"
      }}
      onChange={(e)=>setNewPassword(e.nativeEvent.text)}
      errorMessage={error}
      defaultValue={""}
      />
      <Button 
      title="Cambiar contraseña"
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
          backgroundColor: colors.PRIMARY_COLOR
     }
})




