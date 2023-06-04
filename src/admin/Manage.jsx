import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors';
import { useNavigation } from '@react-navigation/native';

const Manage = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => { navigation.navigate('Create') }}
            >
                <Text style={styles.text}>Create</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => { console.log('hi') }}
            >
                <Text style={styles.text}>Edit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    button: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: CustomColors.primary,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Manage