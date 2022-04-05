import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Overlay, Icon ,Badge,Divider} from 'react-native-elements'

const toggleOverlay = () => {
    setVisible(!visible);
};

export default function CardSystemRegister() {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.card} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginEnd: 10 }}>
                <Text style={styles.cardTitle} >Nombre del sistema</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.cardBody}>
                <Text style={styles.cardSubTitle} >Descripción</Text>
                <Text style={styles.description}>Ad veniam proident voluptate nulla. Eu magna sint nisi sit. Est Lorem incididunt consequat.</Text>
                <View style={styles.divideButton}>
                    <Text style={styles.cardTitle}>
                        <Button
                            title="Agregar"
                            onPress={toggleOverlay}
                            buttonStyle={styles.button}
                            icon={
                                <Icon
                                    type='material-community'
                                    name="home-plus"
                                    color="white"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                        />
                        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                            <Text style={styles.textPrimary}>Agregar sistema!</Text>
                            <Text style={styles.textSecondary}>
                                ¡Aquí puedes agregar tu sistema!
                            </Text>
                            <Button
                                icon={
                                    <Icon
                                        name="cancel"
                                        type="material-community"
                                        color="white"
                                        size={25}
                                        iconStyle={{ marginRight: 10 }}
                                    />
                                }
                                title="Salir"
                                onPress={toggleOverlay}
                            />
                        </Overlay>
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
    card: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ebebeb',
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardBody: {
        marginTop: 10
    },
    divider: {
        borderColor: '#ebebeb'
    },
    cardSubTitle: {
        fontWeight: 'bold',
        marginBottom: 2,
        fontSize: 15
    },
    description: {
        textAlign: 'justify'
    },
    button: {
        width: 130,
        height: 40,
        backgroundColor:"green"
    },
    divideButton: {
        marginTop: 20,
        alignItems: 'center'
    },
    buttonRed: {
        backgroundColor: "red",
        width: 100
    },


})