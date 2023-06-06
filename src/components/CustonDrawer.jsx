import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import CustomColors from '../stylus/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const CustonDrawer = (props) => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: CustomColors.white }}
            >
                <SafeAreaView>
                    <View style={{
                        height: 200,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomColor: '#f4f4f4',
                        borderBottomWidth: 1,
                    }}>
                        <Image
                            source={require('../assets/images/pirates.png')}
                            style={{
                                height: 130,
                                width: 130,
                                borderRadius: 65,
                                backgroundColor: CustomColors.primary
                            }}
                        />
                        <Text style={{
                            fontSize: 20,
                            marginVertical: 6,
                            fontWeight: 'bold',
                            color: CustomColors.primary
                        }}>
                            Alfredo Ramos
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: CustomColors.secondary,
                            // fontFamily: 'digital'
                        }}>
                            Administrador
                        </Text>
                    </View>
                </SafeAreaView>
                <View style={{ flex: 1, backgroundColor: CustomColors.white, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{
                padding: 20, borderTopWidth: 1, borderTopColor: '#f4f4f4'
            }}>
                <TouchableOpacity
                    style={{ paddingVertical: 15 }}
                    onPress={() => { 
                        navigation.navigate('Login');
                     }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="login" size={24} color={CustomColors.primary} />
                        <Text style={{ 
                            marginLeft: 10,
                            fontWeight: '600',
                            color: CustomColors.primary
                         }}>Log in</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustonDrawer