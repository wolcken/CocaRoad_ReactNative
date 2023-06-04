import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomColors from '../stylus/colors'
import apiObject from '../api/DBfirestore'


const Create = () => {

    const region = 'adepcoca';

    const [state, setState] = useState({
        name: '',
        elegida_kl: '',
        hojeada_esp: '',
        hojeada: '',
        mediana_esp: '',
        mediana: '',
        comun: '',
        chimi: '',
        choqueta: '',
        view: false
    })

    const handleChanges = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const saveNewShed = () => {
        if (state.name === '') {
            Alert.alert('Please Provider a name')
        } else {
            apiObject.setShed(state, region)
        }
        // console.log(state)
    }

    return (
        <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>

            <View style={styles.container}>
                <Text>Galpon</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Galpon'

                    onChangeText={(value) => handleChanges('name', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Elegida Kl</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Elegida Especial'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('elegida_kl', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Hojeada Especial</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Hojeada Especial'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('hojeada_esp', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Hojeada</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Hojeada'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('hojeada', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Mediana Especial</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Mediana Especial'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('mediana_esp', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Mediana</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Mediana'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('mediana', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Comun</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Comun'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('comun', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Chimi</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Chimi'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('chimi', value)}
                />
            </View>
            <View style={styles.container}>
                <Text>Choqueta</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Choqueta'
                    keyboardType='numeric'
                    onChangeText={(value) => handleChanges('choqueta', value)}
                />
            </View>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: CustomColors.grey, true: CustomColors.primary }}
                    onValueChange={(value) => handleChanges('view', value)}
                    value={state.view}
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={saveNewShed}
                >
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        // flex: 1
    },
    input: {
        flex: 1,
        margin: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: CustomColors.primary,
        borderRadius: 10,
        height: 40
    },
    switch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Create