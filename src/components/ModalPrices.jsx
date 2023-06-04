import { View, Text, Modal, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomColors from '../stylus/colors'
import Prices from './Prices'
import apiObject from '../api/DBfirestore'

const ModalPrices = ({ showInfo, setShowInfo, shed }) => {

    return (
        <>
            <Modal visible={showInfo} transparent={true} animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <View key={shed.id} style={styles.wrap}>
                            <ImageBackground
                                style={styles.image}
                                source={require('../assets/icons/hoja.png')}
                            >
                                <Text style={styles.text}>Precios</Text>
                            </ImageBackground>
                        </View>
                        <Text style={styles.title}>{shed.name}</Text>
                        <Prices prices={shed} />
                        <TouchableOpacity
                            onPress={() => setShowInfo(!setShowInfo)}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.button_text}>Closed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* <Text>{name}</Text> */}
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: CustomColors.white,
        alignItems: 'center',
        margin: 20,
        borderRadius: 16,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    image: {
        resizeMode: 'cover',
        height: 100,
        width: 200
    },
    text: {
        position: 'absolute',
        left: '20%',
        top: '30%',
        color: CustomColors.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CustomColors.white,
    },
    button_text: {
        color: CustomColors.white,
        backgroundColor: CustomColors.primary,
        padding: 5,
        borderRadius: 7,
        elevation: 5
    }
})

export default ModalPrices