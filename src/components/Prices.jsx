import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'
import Numbers from './Numbers'

const Prices = ({ prices }) => {

    return (
        <>
            {
                prices.elegida_kl != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Elegida Kl</Text>
                        {/* <Text style={styles.text}>{prices.elegida_kl} Bs</Text> */}
                        <Numbers number={prices.elegida_kl} />
                    </View>
                    :
                    null
            }

            {
                prices.hojeada_esp != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Hojeada Especial</Text>
                        {/* <Text style={styles.text}>{prices.hojeada_esp} Bs</Text> */}
                        <Numbers number={prices.hojeada_esp} />
                    </View>
                    :
                    null
            }

            {
                prices.hojeada != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Hojeada</Text>
                        {/* <Text style={styles.text}>{prices.hojeada} Bs</Text> */}
                        <Numbers number={prices.hojeada} />
                    </View>
                    :
                    null
            }

            {
                prices.mediana_esp != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Mediana Especial</Text>
                        {/* <Text style={styles.text}>{prices.mediana_esp} Bs</Text> */}
                        <Numbers number={prices.mediana_esp} />
                    </View>
                    :
                    null
            }

            {
                prices.mediana != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Mediana</Text>
                        {/* <Text style={styles.text}>{prices.mediana} Bs</Text> */}
                        <Numbers number={prices.mediana} />
                    </View>
                    :
                    null
            }

            {
                prices.comun != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Comun</Text>
                        {/* <Text style={styles.text}>{prices.comun} Bs</Text> */}
                        <Numbers number={prices.comun} />
                    </View>
                    :
                    null
            }

            {
                prices.chimi != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Chimi</Text>
                        {/* <Text style={styles.text}>{prices.chimi} Bs</Text> */}
                        <Numbers number={prices.chimi} />
                    </View>
                    :
                    null
            }

            {
                prices.choqueta != '0' ?
                    <View style={styles.container}>
                        <Text style={styles.text}>Choqueta</Text>
                        {/* <Text style={styles.text}>{prices.choqueta} Bs</Text> */}
                        <Numbers number={prices.choqueta} />
                    </View>
                    :
                    null
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    text: {
        color: CustomColors.black,
        fontSize: 18
        // margin: 10,
        // fontFamily: 'digital'
    }
})

export default Prices