import React, { useContext, useState } from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import regions from "../data/regions";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import CustomColors from "../stylus/colors";

const RegionsList = () => {

    const { setRegion } = useContext(AppContext);

    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={styles.container}
        >
            {regions.map(region => {
                return (
                    <View
                        key={region.id}
                        style={styles.wrap}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setRegion(region.name)
                                navigation.navigate('Sheds')
                            }}
                            activeOpacity={0.5}
                        >
                            <ImageBackground
                                style={styles.image}
                                source={require('../assets/icons/hoja.png')}
                            >
                                <Text style={styles.text}>
                                    {region.name}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: CustomColors.grey,
        justifyContent: 'center'
    },
    wrap: {
        height: 100,
        width: 350,
        overflow: 'hidden',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'cover'
    },
    text: {
        position: 'absolute',
        left: '15%',
        top: '30%',
        color: CustomColors.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default RegionsList;