import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import Colors from '../utils/colors';
import CardSystem from '../components/CardSystem'
import CardSystemRegister from '../components/CardSystemRegister'
import colors from "../utils/colors";
import { map } from "lodash";


export default function System(props) {
    const [valor, setValor] = useState(true)
    const [renderComponent, setRenderComponent] = useState(null)
    const [showAddBtn, setShowAddBtn] = useState(true)
    const [addButton, setAddButton] = useState(false)
    const [aux, setAux] = useState([])
    const [userSistems, setUserSistems] = useState([])

    const getSistems = async () => {
        await fetch('http://10.0.0.8:8080/siroga/api/sistem/').then(res => res.json()).then(json => {
            setAux(json.data)
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        getSistems()
        setUserSistems([]);
        let array = []
        for(let i = 0; i < aux.length; i++){
            if(aux[i].user.id === 1){
                array.push(aux[i])
            }
        }
        setUserSistems(array)

        if(userSistems.length > 0){
            setAddButton(true)
            if(userSistems >= 3){
                setShowAddBtn(false)
            }
        }else{
            setAddButton(false)
        }
    }, [])

    return (
        <>
            <Text style={styles.viewTitle} >Mis Sistemas</Text>
            {addButton?
                (
                    <ScrollView>
                        <View style={styles.container}>
                            <CardSystem />
                            {showAddBtn?(<CardSystemRegister addButton={addButton} />): null}
                        </View>
                    </ScrollView>
                ):
                (
                    <View style={styles.container}>
                        <CardSystemRegister addButton={addButton} />
                    </View>
                )
            }
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