import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import regions from "../data/regions";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const RegionsList = () => {

    const { setRegion } = useContext(AppContext);

    const navigation = useNavigation();

    return (
        <View>
            {regions.map(region => {
                return (
                    <View key={region.id} style={styles.container}>
                        {/* <Text style={styles.title}>
                            {region.name}
                        </Text> */}
                        <Button
                            style={styles.button}
                            onPress={() => {
                                setRegion(region.name)
                                navigation.navigate('Sheds')
                            }}
                            title={region.name}
                            accessibilityLabel="Learn more about"
                        />
                    </View>
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    button: {
        color: '#841584'
    }
});

export default RegionsList;