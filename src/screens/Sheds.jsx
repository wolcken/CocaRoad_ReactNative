import React, { useContext, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AppContext from '../context/AppContext';
import apiObject from '../api/DBfirestore';
import Prices from '../components/Prices';
import CustomColors from '../stylus/colors';
import ModalPrices from '../components/ModalPrices';
import { SafeAreaView } from 'react-native-safe-area-context';

const Sheds = () => {

    const { region } = useContext(AppContext);

    const sheds = apiObject.useSheds(region);

    const [info, setInfo] = useState([]);

    const [showInfo, setShowInfo] = useState(false);
    const handleShowInfo = (shed) => {
        setInfo(shed)
        setShowInfo(!showInfo);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sheds}
                renderItem={({ item: shed }) => (
                    <View key={shed.id} style={{ padding: 20 }}>

                        <TouchableOpacity onPress={() => handleShowInfo(shed)}>
                            <Text style={styles.title}>{shed.name}</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
            <ModalPrices showInfo={showInfo} setShowInfo={setShowInfo} shed={info} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColors.grey
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: CustomColors.primary
    }
})

export default Sheds;