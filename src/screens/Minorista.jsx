import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ImageBackground, Button } from 'react-native'
import React, { useState } from 'react'
import apiObject from '../api/DBfirestore'
import CustomColors from '../stylus/colors'
import { useNavigation } from '@react-navigation/native'

const Minorista = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
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
})

export default Minorista