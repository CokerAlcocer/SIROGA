import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Card, Overlay, Icon } from "react-native-elements";
import CardSystem from "../components/CardSystem"
import Colors from '../utils/colors';
import CardSystemRegister from "../components/CardSystemRegister";
import { ScrollView } from "react-native-gesture-handler";


export default function System(props) {
    const [valor, setValor] = useState(true)
    const [renderComponent, setRenderComponent] = useState(null)

    useEffect(() => {
        if (valor) {
            setRenderComponent(
                <ScrollView>
                    <View style={styles.container}>
                        <CardSystem />
                        <CardSystem />
                        <CardSystem />
                    </View>
                </ScrollView>
            )
        } else {
            setRenderComponent(
                <View>
                    <CardSystemRegister />
                    <CardSystemRegister />
                    <CardSystemRegister />
                </View>
            )
        }
    }, [])


    return (
        <View style={{ color: Colors.PRIMARY_COLOR }}>{renderComponent}</View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        textAlign: "center",
        marginTop: 10,
        marginLeft: 20,
        fontSize: 35,
    },
    container: {
        padding: 10
    }
})