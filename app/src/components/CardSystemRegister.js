import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Overlay, Icon, Input, Divider } from 'react-native-elements'

const toggleOverlay = () => {
    setVisible(!visible);
};

export default function CardSystemRegister(props) {
    const { addButton } = props;
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <>
            <View style={addButton? styles.cardTrue : styles.cardFalse} onTouchStart={() => toggleOverlay()} >
                <Icon
                    name="plus"
                    type="material-community"
                    color="#d3d3d3"
                    size={40}
                />
                <Text style={styles.text} >Añadir</Text>
            </View>
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                height={505}
            >
                <Text style={styles.cardTitle} >Aviso</Text>
                <Divider style={styles.divider} />

                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />
                <Input containerStyle={styles.cardInput} inputStyle={styles.cardInput} placeholder={'Broker'} />

                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonContainer} >
                        <Button
                            icon={
                                <Icon
                                    name="delete"
                                    type="material-community"
                                    color="white"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            title="Eliminar"
                            onPress={toggleOverlay}
                            containerStyle={styles.cardBtnR}
                            buttonStyle={styles.cardBtnRemove}
                        />
                    </View>
                    <View style={styles.separator} ></View>
                    <View style={styles.buttonContainer} >
                        <Button
                            containerStyle={styles.cardBtnR}
                            icon={
                                <Icon
                                    name="cancel"
                                    type="material-community"
                                    color="white"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            buttonStyle={styles.cardBtnCancel}
                            title="Cancelar"
                            onPress={toggleOverlay}
                        />
                    </View>
                </View>
            </Overlay>
        </>
    );
}

const styles = StyleSheet.create({
    cardTrue: {
        backgroundColor: null,
        width: '100%',
        padding: 15,
        borderStyle: 'dotted',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#d3d3d3',
        marginBottom: 10,
        alignItems: 'center'
    },
    cardFalse:{
        backgroundColor: null,
        width: '100%',
        height: Dimensions.get("window").height - 155,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: "#d3d3d3",
        fontSize: 20
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    separator: {
        width: '5%'
    },
    divider: {
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "47.5%"
    },
    cardBtnL: {
        width: '100%',
    },
    cardBtnR: {
        width: '100%',
    },
    buttonsContainer: {
        marginTop: 30,
        flexDirection: 'row',
        width: "100%"
    },
    cardBtnRemove: {
        backgroundColor: '#f55'
    },
    cardBtnCancel: {
        backgroundColor: 'grey'
    },
    cardInputContainer: {
        width: "100%",
    },
})