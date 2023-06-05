import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import apiObject from '../api/DBfirestore'

const Delete = () => {

    const region = 'adepcoca'
    const shed = 'Test'

    const handleRemove = () => {
        Alert.alert('Remove The Shed', 'Are you sure?',
            [
                { text: 'Yes', onPress: () => apiObject.deleteShed(region, shed) },
                { text: 'No', onPress: () => console.log('cancel') }
            ])
    }

    return (
        <View>
            <Text>Delete</Text>
            <Pressable
                onPress={handleRemove}
            >
                <Text style={{ color: 'blue' }}>Eliminar</Text>
            </Pressable>
        </View>
    )
}

export default Delete