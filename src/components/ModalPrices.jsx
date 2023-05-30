import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'
import Prices from './Prices'

const ModalPrices = ({ showInfo, setShowInfo, shed }) => {
    return (
        <>
            <Modal visible={showInfo} transparent={true} animationType='slide'>
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={require('../assets/icons/hoja.png')}
                        />
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
        justifyContent: 'flex-end'
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: CustomColors.primary
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