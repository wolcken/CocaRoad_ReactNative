import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Pressable, Modal, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import DropRegions from '../components/DropRegions'
import DropSheds from '../components/DropSheds'
import CustomColors from '../stylus/colors'
import apiObject from '../api/DBfirestore'

const Edit = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [region, setRegion] = useState('')
    const [shed, setShed] = useState('')
    const [price, setPrice] = useState();

    const addRegion = (name) => {
        setRegion(name)
    }

    const addShed = (name) => {
        setShed(name)
    }

    const handleDates = () => {
        // setPrice(apiObject.usePrice(region, shed));
        setModalVisible(true)
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Regions</Text>
            {/* <Text>{region}</Text> */}
            <DropRegions addRegion={addRegion} />
            <Text style={styles.title}>Sheds</Text>
            {/* <Text>{shed}</Text> */}
            <DropSheds addShed={addShed} />
            <TouchableOpacity style={styles.button} onPress={handleDates}>
                <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* <Text style={styles.modalText}>Edit Prices</Text> */}
                        <Text style={styles.modalText}>Region: {region}   Shed: {shed}</Text>

                        <View style={styles.coninput}>
                            <Text>Elegida Kl</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Elegida Especial'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('elegida_kl', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Hojeada Especial</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Hojeada Especial'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('hojeada_esp', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Hojeada</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Hojeada'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('hojeada', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Mediana Especial</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Mediana Especial'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('mediana_esp', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Mediana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Mediana'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('mediana', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Comun</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Comun'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('comun', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Chimi</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Chimi'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('chimi', value)}
                            />
                        </View>
                        <View style={styles.coninput}>
                            <Text>Choqueta</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Choqueta'
                                keyboardType='numeric'
                            // onChangeText={(value) => handleChanges('choqueta', value)}
                            />
                        </View>
                        <View style={styles.switch}>
                            <Switch
                                trackColor={{ false: CustomColors.grey, true: CustomColors.primary }}
                                // onValueChange={(value) => handleChanges('view', value)}
                                // value={state.view}
                                value={false}
                            />
                        </View>

                        <View style={styles.coninput}>
                            <Pressable
                                style={[styles.button, styles.buttonSave]}
                                onPress={() => console.log('Save Dates')}>
                                <Text style={styles.textStyle}>Save</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        color: CustomColors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: CustomColors.secondary,
        padding: 10,
        marginTop: 20,
        borderRadius: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonSave: {
        backgroundColor: CustomColors.primary,
    },
    buttonCancel: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: CustomColors.primary,
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        height: 40,
        width: 130,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    coninput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300
    }
})

export default Edit