import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, ImageBackground, RefreshControl } from 'react-native';
import apiObject from '../api/DBfirestore';
import CustomColors from '../stylus/colors';
import ModalPrices from './ModalPrices';
import { SafeAreaView } from 'react-native-safe-area-context';

const Sheds = ({ region }) => {

    const sheds = apiObject.useSheds(region);

    const [info, setInfo] = useState('');

    const [showInfo, setShowInfo] = useState(false);
    const handleShowInfo = (shed) => {
        setInfo(shed)
        setShowInfo(!showInfo);
        // console.log(shed)
    }

    //refreshing
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sheds}
                renderItem={({ item: shed }) => (
                    <>
                        {
                            shed.view === true ?
                                <View key={shed.id} style={styles.wrap}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            handleShowInfo(shed)
                                        }}
                                        activeOpacity={0.5}
                                    >
                                        <ImageBackground
                                            style={styles.image}
                                            source={require('../assets/icons/hoja.png')}
                                        >
                                            <Text style={styles.text}>{shed.name}</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                        }
                    </>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressBackgroundColor={CustomColors.secondary}
                        colors={[CustomColors.white, CustomColors.primary]}
                    />
                }
            />
            <ModalPrices showInfo={showInfo} setShowInfo={setShowInfo} shed={info} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
})

export default Sheds;