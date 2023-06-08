import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'

const Law = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>LEY GENERAL DE LA COCA</Text>
            <Text style={styles.title2}>CAPITULO I</Text>
            <Text style={styles.title2}>DISPOSICIONES GENERALES</Text>
            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTICULO 1.(OBJETO)</Text>
                <Text style={styles.text}>La presente Ley tiene por objeto:</Text>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>a)</Text>
                    <Text style={styles.text}>Normar la revalorización, producción, circulación, transporte, comercialización,
                        consumo, investigación, industrialización y promoción de la coca en su estado natural;</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>b)</Text>
                    <Text style={styles.text}>Establecer el marco institucional de regulación, control y fiscalización;</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>c)</Text>
                    <Text style={styles.text}>Regular las tasas administrativas.</Text>
                </View>
            </View>
            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTICULO 2.(FINALIDADES)</Text>
                <Text style={styles.text}>La presente Ley tiene las siguientes finalidades:</Text>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>a)</Text>
                    <Text style={styles.text}>Proteger y revalorizar la coca originaria y ancestral como patrimonio cultural y recurso
                        natural renovable del Estado Plurinacional de Bolivia;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>b)</Text>
                    <Text style={styles.text}>Promover y fortalecer el desarrollo integral sustentable, en las zonas de producción
                        autorizadas de coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>c)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>d)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>e)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subtitle}>f)</Text>
                    <Text style={styles.text}>Establecer mecanismos de control y fiscalización a la producción, circulación, transporte,
                        comercialización, investigación, industrialización y promoción de la coca;
                    </Text>
                </View>
            </View>
            <View style={styles.article}>
                <Text style={styles.subtitle}>ARTÍCULO 3. (ÁMBITO DE APLICACIÓN)</Text>
                <Text style={styles.text}>La presente Ley se aplica en todo el territorio del Estado Plurinacional de Bolivia, en actividades de revalorización, producción, circulación, transporte, comercialización, consumo, investigación, industrialización y promoción de la coca en su estado natural.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        textAlign: 'center',
        color: CustomColors.primary,
        fontSize: 20,
        fontWeight: 'bold'
    },
    title2: {
        textAlign: 'center',
        color: CustomColors.black,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    },
    article: {
        marginTop: 10
    },
    subtitle: {
        color: CustomColors.black,
        fontWeight: 'bold',
        marginBottom: 5,
        marginRight: 5
    },
    section: {
        flexDirection: 'row'
    },
    text: {
        marginBottom: 5,
        paddingRight: 5
    }
})

export default Law