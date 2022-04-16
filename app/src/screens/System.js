import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView, AsyncStorageStatic } from "react-native";
import { Icon, Button } from 'react-native-elements'
import Colors from '../utils/colors';
import CardSystem from '../components/CardSystem'
import CardSystemRegister from '../components/CardSystemRegister'
import colors from "../utils/colors";
import { add, map } from "lodash";
import Loading from "../components/Loading";
import ipAddress from "../utils/ipAddress";


export default function System(props) {
    const [userSistems, setUserSistems] = useState([])
    const [loading, setLoading] = useState(false)

    const getSistems = async () => {
        setLoading(true)
        await fetch('http://'+ipAddress.IP_ADDRESS+':8080/siroga/api/sistem/').then(res => res.json()).then(json => {
            let aux = []
            for (let i = 0; i < json.data.length; i++) {
                if (json.data[i].user.id === 1) {
                    aux.push(json.data[i])
                }
            }
            setUserSistems(aux)
        }).catch(e => console.log(e))
        setLoading(false)
    }

    let mapSistems = userSistems

    return (
        <>
            <View style={styles.viewHeader}>
                <View style={{width: '80%'}} >
                    <Text style={styles.viewTitle} >Mis Sistemas</Text>
                </View>
                <View style={{width: '20%'}} >
                    <Button icon={
                            <Icon
                                name="cached"
                                type="material-community"
                                color="black"
                                size={25}
                            />
                        }
                        title=""
                        onPress={() => getSistems()}
                        containerStyle={styles.headerBtnCont}
                        buttonStyle={styles.headerBtn}
                    />
                </View>
            </View>
            {userSistems.length > 0 ?
                (
                    <ScrollView >
                        <View style={styles.container} >
                            {map(mapSistems, (mapSistems, index) => (
                                <CardSystem key={index} sistem={userSistems[index]} />
                            ))}
                            {userSistems.length < 3 ? (<CardSystemRegister addButton={userSistems.length > 0} />) : (null)}
                        </View>
                    </ScrollView>
                ) :
                (
                    <CardSystemRegister addButton={userSistems.length > 0} />
                )
            }
            <Loading
                isVisible={loading}
                text={"Refrescando Sistemas"}
            />
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
    viewHeader: {
        flexDirection: "row",
        backgroundColor: colors.COLOR_BASE,
        paddingTop: 40,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    viewTitle: {
        fontWeight: "bold",
        fontSize: 30
    },
    headerBtnCont: {
        alignItems: "flex-end"
    },
    headerBtn: {
        backgroundColor: null
    }
})