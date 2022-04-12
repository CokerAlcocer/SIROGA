import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import Colors from '../utils/colors';
import CardSystem from '../components/CardSystem'
import CardSystemRegister from '../components/CardSystemRegister'
import colors from "../utils/colors";


export default function System(props) {
    const [valor, setValor] = useState(true)
    const [renderComponent, setRenderComponent] = useState(null)
    const [data, setData] = useState([])
    const [sistems, setSistems] = useState([])

    const getSistems = async () => {
        setData(fetch('http://10.0.0.8:8080/siroga/api/sistem/').then(res => res.json()).then(json => json).catch(e => console.log(e)));
        for (let i = 0; i < data._W.data.length; i++) {
            console.log(data._W.data[i].user.id)
            if (data._W.data[i].user.id === 1) {
                setSistems([...sistems, data._W.data[i]])
            }
        }
    }



    useEffect(() => {
    }, [])


    return (
        <>
            <Text style={styles.viewTitle} >Mis Sistemas</Text>
            <ScrollView>
                <View style={styles.container}>
                    <CardSystem />
                    <CardSystemRegister />
                </View>
            </ScrollView>
        </>
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
    },
    viewTitle: {
        backgroundColor: colors.COLOR_BASE,
        paddingTop: 40,
        paddingLeft: 13,
        paddingBottom: 10,
        fontWeight: "bold",
        fontSize: 30
    }
})