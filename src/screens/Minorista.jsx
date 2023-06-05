import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import apiObject from '../api/DBfirestore'
import CustomColors from '../stylus/colors'
import { useNavigation } from '@react-navigation/native'

const Minorista = () => {

  const navigation = useNavigation()

  const region = 'adepcoca'
  
  // const aux2 = apiObject.useAux();
  // console.log(aux2);

  const handleGalpon = (item) => {
    navigation.navigate('Test', {prec: item})
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={aux2}
        renderItem={({ item }) => (
          <View key={item} style={styles.wrap}>
            <TouchableOpacity
              onPress={() => {
                handleGalpon(item)
              }}
              activeOpacity={0.5}
            >
              <ImageBackground
                style={styles.image}
                source={require('../assets/icons/hoja.png')}
              >
                <Text style={styles.text}>{item}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        )}
      />
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

export default Minorista