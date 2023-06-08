import { Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import CustomColors from '../stylus/colors'

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
    backgroundColor: CustomColors.white,
    justifyContent: 'center'
  },
})

export default Minorista