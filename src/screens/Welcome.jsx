import { View, Text, Button, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View>
                <Image
                    source={require('../assets/images/fot1.jpeg')}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: 10,
                        transform: [
                            { translateX: 20 },
                            { translateY: 50 },
                            { rotate: "-15deg" }
                        ]
                    }}
                />

                <Image
                    source={require("../assets/images/fot2.jpeg")}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: -30,
                        left: 100,
                        transform: [
                            { translateX: 50 },
                            { translateY: 50 },
                            { rotate: "-5deg" }
                        ]
                    }}
                />

                <Image
                    source={require("../assets/images/fot3.jpeg")}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                        position: "absolute",
                        top: 130,
                        left: -50,
                        transform: [
                            { translateX: 50 },
                            { translateY: 50 },
                            { rotate: "15deg" }
                        ]
                    }}
                />

                <Image
                    source={require("../assets/images/fot4.jpeg")}
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: 20,
                        position: "absolute",
                        top: 110,
                        left: 100,
                        transform: [
                            { translateX: 50 },
                            { translateY: 50 },
                            { rotate: "-15deg" }
                        ]
                    }}
                />
            </View>


            <View style={{
                paddingHorizontal: 22,
                paddingVertical: 10,
                position: "absolute",
                top: 410,
                width: "100%",
                backgroundColor: CustomColors.secondary
            }}>
                <Text style={{
                    fontSize: 46,
                    fontWeight: 800,
                    color: CustomColors.grey
                }}>Let's Get</Text>

                <Text style={{
                    fontSize: 46,
                    fontWeight: 800,
                    color: CustomColors.white
                }}>Started</Text>

                {/* <Pressable
                    style={styles.button1}
                    onPress={
                        () => navigation.navigate("Home")
                    }>
                    <Text style={styles.text}>Inicio</Text>
                </Pressable> */}

                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 16,
                        color: CustomColors.white,
                        marginVertical: 4
                    }}>Connect to review the latest prices</Text>
                    <Text style={{
                        fontSize: 16,
                        color: CustomColors.white,
                    }}>Where you can choose the best</Text>
                </View>

                <Pressable
                    style={styles.button2}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text>Join Now</Text>
                </Pressable>

                <View style={{
                    flexDirection: "row",
                    marginTop: 12,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: CustomColors.white
                    }}>Already have an account ?</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: CustomColors.white,
                            fontWeight: "bold",
                            marginLeft: 4
                        }}>Login</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: CustomColors.primary,
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: CustomColors.grey,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Welcome