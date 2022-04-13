import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import Colors from '../utils/colors';
import CardSystem from '../components/CardSystem'
import CardSystemRegister from '../components/CardSystemRegister'
import colors from "../utils/colors";


export default function System(props) {
    const [valor, setValor] = useState(true)
    const [renderComponent, setRenderComponent] = useState(null)
    const [addButton, setAddButton] = useState(false)
    const [data, setData] = useState([])
    const [sistems, setSistems] = useState([])

    const getSistems = async () => {
        
    }

    useEffect(() => {
        getSistems();
    }, [])

    return (
        <>
            <Text style={styles.viewTitle} >Mis Sistemas</Text>
            <ScrollView>
                <View style={styles.container}>
                    {addButton? (
                        <>
                            <CardSystem />
                            <CardSystemRegister addButton={addButton} />
                        </>
                    ) : (
                        <CardSystemRegister addButton={addButton} />
                    )}
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