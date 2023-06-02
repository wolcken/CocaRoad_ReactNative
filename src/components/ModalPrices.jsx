import { View, Text, Modal, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomColors from '../stylus/colors'
import Prices from './Prices'
// import * as Font from 'expo-font';

const ModalPrices = ({ showInfo, setShowInfo, shed }) => {

    // const [fontsLoaded, setFontsLoaded] = useState(false);
    // useEffect(() => {
    //     if (!fontsLoaded) {
    //         loadFonts();
    //     }
    // })
    // const loadFonts = async () => {
    //     await Font.loadAsync({
    //         'roboto-light': require('../assets/fonts/roboto/Roboto-Light.ttf'),
    //         // 'ds-digib': require('./src/assets/fonts/ds_digital/DS-DIGIB.ttf'),
    //     });
    //     setFontsLoaded(true);
    // }


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
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center'
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
        color: CustomColors.primary,
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