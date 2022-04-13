import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect} from 'react'
import { Input, Button } from 'react-native-elements'
import * as firebase from "firebase"
import colors from '../../utils/colors'

export default function ChangeEmail(props) {
     // console.log(props);
     const {displayName, toastRef, setShowModal, setReloadUserInfo} = props;
     const [newEmail, setNewEmail] = useState(null);
     const [error, setError] = useState(null)
     const [loading, setLoading] = useState(false)
  

    //  useEffect(() => {
    //    firebase.auth().currentUser.reauthenticateWithCredential(credentials)
    //    .then(() =>{
    //        console.log("Holis")
    //    })
    //  }, [])
     
     
     const onSubmit =() =>{
          
          setError(null)
          if(!newEmail){
               setError("El campo no puede estar vacio")
         
          }else{
          
               setLoading(true)
               
               firebase
               .auth()
               .currentUser
               .updateEmail(newEmail)
               .then(()=>{
                    setLoading(false)
                    setReloadUserInfo(true)
                    setShowModal(false)                   
               })
               .catch((error)=>{
                    setError("Error al actualizar el correo")
                    setLoading(false)
                    console.log(error)
               })
          }
     }
  return (
    <View style={styles.view}>
      <Input 
      placeholder="Nuevo correo electrónico"
      containerStyle={styles.input}
      rightIcon={{
           type:"material-community",
           name:"at",
           color: "#c2c2c2"
      }}
      onChange={(e)=>setNewEmail(e.nativeEvent.text)}
      errorMessage={error}
      defaultValue={""}
      />
      <Button 
      title="Guardar"
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




