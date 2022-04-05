import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { Button  } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import UserInfo from '../components/account/UserInfo';
import UserOptions from '../components/account/UserOptions';
import * as firebase from "firebase";
import Toast from 'react-native-easy-toast';
import Loading from "../components/Loading";

export default function Profile() {
  const toastRef = useRef();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(null);
  const [reloadUserInfo, setReloadUserInfo] = useState(false)

  useEffect(()=>{
    (async()=>{
      const user = firebase.auth().currentUser;
      setUserInfo(user);
    })();
    setReloadUserInfo(false);
    console.log(userInfo);
  }, [reloadUserInfo]);
  
  return (
    <View style={styles.userInfo}>
        {userInfo && <UserInfo 
                      userInfo={userInfo}
                      toastRef={toastRef}
                      setLoading={setLoading}
                      setLoadingText={setLoadingText}
                      />}
        <UserOptions
        userInfo={userInfo}
        toastRef={toastRef}
        setReloadUserInfo={setReloadUserInfo}
        />
        <Button
            title='Cerrar sesión'
            buttonStyle={styles.btnCloseSesion}
            titleStyle={styles.btnTitle}
            onPress={() => {
              firebase.auth().signOut();
              navigation.navigate("index");
            }}
        />
        <Toast ref={toastRef} position="center" opacity={0.9} />
        <Loading isVisible={loading} text={loadingText}/>
    </View>
  )
}

const styles = StyleSheet.create({
    userInfo:{
      minHeight:"100%",
      backgroundColor:"#F2F2F2"
    },
    btnCloseSesion:{
      marginTop:30,
      borderRadius:1,
      backgroundColor:"#fcb823",
      borderTopWidth:1,
      borderTopColor:"#E3E3E3",
      borderBottomWidth:1,
      borderBottomColor:"#E3E3E3",
      paddingTop:10,
      paddingBottom:10
    },
    btnTitle:{
      color:"#FCB823",
    }
})