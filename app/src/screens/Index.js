import React, { useEffect, useState } from "react";
import { View, StyleSheet, LogBox } from "react-native";
import { firebaseApp } from "../utils/firebase";
import * as firebase from "firebase";
import {Text} from 'react-native-elements'
import Login from "../screens/Login";
import Loading from "../components/Loading";
import colors from "../utils/colors";

import History from "../components/History";

export default function Index(props) {
  const { navigation } = props;
  const [login, setLogin] = useState(null); //guardar el estado de la sesión
  const [loading, setLoading] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
      if(login){
      
        setRenderComponent(
          <View>
            <History/>
            <History/>
            <History/>
          </View>
        )
      }else{
        setRenderComponent(
          <History/>
        )
      }
    });

   
  }, [login]);

  if (login === null) return <Loading isVisible={true} text={"Cargando"} />;

  if (login) {
    return (
    
      
      <View style={{marginTop: 50}}>
        <Text
        h1
        style={styles.title}
        >SIROGA</Text>
      
       {renderComponent}


      
        


       
      </View>
    );
  } else {
    return <Login />;
    
  }
}

const styles = StyleSheet.create({
  containerBtn: {
    margin: 20,
    marginTop: 10,
  },
  btnOption: {
    backgroundColor: colors.PRIMARY_COLOR,
    
  },
  title: {
    textAlign: "center",
    color: colors.PRIMARY_COLOR,
    padding:10,
    marginBottom: 100
  }
});