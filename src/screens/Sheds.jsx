import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import AppContext from '../context/AppContext';

const Sheds = () => {

    const {region} = useContext(AppContext);

    return (
        <View>
            <Text>
                {region}
            </Text>
        </View>
    )
}

export default Sheds;