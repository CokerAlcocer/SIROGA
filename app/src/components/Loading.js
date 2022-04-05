import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';
import React from 'react'
import colors from '../utils/colors';

export default function Loading(props) {
    const {isVisible, text} = props;
  return (
    <Overlay
    isVisible={isVisible}
    windowBackgroundColor= "rgba(0,0,0,0.5)"
    overlayBackgroundColor= "transparent"
    overlayStyle= {styles.overlay}
    >
    <View style={styles.view}>
        <ActivityIndicator
        size={"large"}
        color="#dedede"/>
        {text && <Text style= {styles.texto}>{text}</Text>}
    </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({

    overlay:{   
        height:100,
        width:200,
        backgroundColor: "#ffff",
        borderColor: colors.PRIMARY_COLOR,
        borderWidth: 3,
        borderRadius: 10
    },

    view:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    texto:{
        color: "#5d5e60",
        textTransform: "uppercase",
        marginTop: 10
    }

})